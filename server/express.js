import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import csurf from 'csurf';
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
import RootRouter from './../src/routes/RootRouter/RootRouter';
import StaticRouter from 'react-router-dom/StaticRouter'
import { matchRoutes } from 'react-router-config';
import routes from './../src/routes/routeConfig';
import 'isomorphic-fetch';
import {configStore} from './../src/store/store';
import { Provider } from 'react-redux'

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(csurf());
app.use(cors());
app.use(logger());


 const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };


app.use(session(sessionOpts));
app.use(passport.initialize());
app.use(passport.session());


const loadBranchData = (location) => {
  const branch = matchRoutes(routes, location);
  const promises = branch.map(({ route, match }) => {

    return route.loadData
      ? route.loadData(branch[0].match.params)
      : Promise.resolve(null)
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
	if (req.originalUrl === '/bundle.js') {
    return next();
	}
	 const context = {}
	 const store = configStore();
   loadBranchData(req.url).then(data=>{
   	const markup = ReactDOMServer.renderToString(
   		<Provider store={store}>
   		<StaticRouter location={req.url} context={context}>
   			
   				<RootRouter data={data} />
   			
   		</StaticRouter>
   		</Provider>
   		)
   	  if (context.url) {
        return res.redirect(303, context.url)
       }
   	 res.writeHead( 200, { "Content-Type": "text/html" } );
  	 res.end(Index({markup:markup}));
   })
   .catch(err=>{
   	res.status(500).send('Data could not be loaded');
   })
  
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})

export default app;