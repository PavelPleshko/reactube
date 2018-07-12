import devBundle from './devBundle';
import config from './config/config';
import app from './express';
import path from 'path';
import mongoose from 'mongoose';
import initPassport from './config/passport';

mongoose.connect(config.mongoUri)





devBundle.compile(app);



initPassport(app);

app.listen(config.port, function onStart(err) {
  if (err) {
    console.log(err) 
  }
  console.info('Server started on port %s.', config.port)
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})