
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import Index from '../index';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import categoryRoutes from './routes/category.routes';
import tagRoutes from './routes/tag.routes';
import mediaRoutes from './routes/media.routes';
import passport from 'passport';
import session from 'express-session';
import config from './config/config';

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

 const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };


app.use(session(sessionOpts));
app.use(passport.initialize());
app.use(passport.session());


app.use('/dist/',express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
   res.send(Index());
})


app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', mediaRoutes);
app.use('/api', tagRoutes);
app.use('/api', categoryRoutes);




app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})
export default app;