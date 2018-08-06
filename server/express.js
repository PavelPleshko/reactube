import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import csrf from 'csurf';
import RateLimiter from 'express-rate-limit';
import path from 'path';
import Index from '../index';
import {authRoutes,userRoutes,
      categoryRoutes,tagRoutes,
      commentRoutes,mediaRoutes} from './app/allRoutes';
import passport from 'passport';
import session from 'express-session';
import config from './config/config';

//ssr
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './../src/App';
import mainCssRules from './../src/index.css';
import StaticRouter from 'react-router-dom/StaticRouter';
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme,
 createGenerateClassName } from '@material-ui/core/styles'
import {deepPurple,green,red} from '@material-ui/core/colors';
import { matchRoutes } from 'react-router-config';
import routes from './../src/routes/routeConfig';
import 'isomorphic-fetch';
import {configStore} from './../src/store/store';
import { Provider } from 'react-redux'

const CURRENT_WORKING_DIR = process.cwd();
const app = express();
const apiLimiter = new RateLimiter({
  windowsMs:20*60*1000,
  max:150,
  delayMs:0
})
console.log(mainCssRules);
app.use(apiLimiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(csrf({ cookie: true }));
app.use(cors());
app.use(logger("combined"));

 const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };


app.use(session(sessionOpts));
app.use(passport.initialize());
app.use(passport.session());


const loadBranchData =   (location,store) => {
  const branch = matchRoutes(routes, location);
  const promises = branch.map(async ({ route, match }) => {

   if(route.loadData){
     let serverData = await route.loadData(branch[0].match.params);
     store.dispatch(route.reduxAction(Object.values(serverData.data)[0]));
   }
   return await store.getState();
  })
  return Promise.all(promises)
}

app.use('/dist/',express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', mediaRoutes);
app.use('/api', tagRoutes);
app.use('/api', categoryRoutes);
app.use('/api', commentRoutes);


app.get('/*', (req, res,next) => {
	if (req.originalUrl.includes('bundle.js') || req.originalUrl.includes('.png')) { //remove in production
    return next();
  	}

  let csrfToken = req.csrfToken() || null;
  res.cookie('csrfToken', csrfToken, { sameSite: true, httpOnly: true });
	 const context = {}
	
    const theme = createMuiTheme({
      palette: {
        primary: {
        light: '#757de8',
        main: '#3f51b5',
        dark: '#002984',
        contrastText: '#fff',
        error:red[500],
        errorHover:red[600],
        success:green[400],
        successHover:green[600],
        standard:deepPurple[500],
        standardHover:deepPurple[600],
        grey:'#8091a5',
        lightGrey:'#c3cfd5'
      }
    }
});
      const sheetsRegistry = new SheetsRegistry()
      const generateClassName = createGenerateClassName();
      const store = configStore({
        csrf: csrfToken
   });
   loadBranchData(req.url,store).then(newStoreState=>{
    
      const state = `<script id="initialState">
        window.__APP_STATE = ${ JSON.stringify(newStoreState[0]) };
      </script>`;
   	const markup = ReactDOMServer.renderToString(
    
   		<Provider store={store}>
   		<StaticRouter location={req.url} context={context}>
   			<JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}> 
   				<App />
   			</MuiThemeProvider>
         </JssProvider>
   		</StaticRouter>
   		</Provider>
       
   		)
   	  if (context.url) {
        return res.redirect(303, context.url)
       }
       const materialCss = sheetsRegistry.toString();
       const mainCss = mainCssRules.toString();
   	 res.writeHead( 200, { "Content-Type": "text/html" } );
  	 res.end(Index({markup,state,materialCss,mainCss}));
   })
   .catch(err=>{
    console.log(err);
   	res.status(500).send('Data could not be loaded');
   })
  
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else{
    res.status(500).json({message:err.message || 'Internal server error'});
  }
})

export default app;