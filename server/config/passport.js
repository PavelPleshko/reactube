import passport from 'passport';
import mongoose from 'mongoose';
import JwtInit from './strategies/jwt';
const User = mongoose.model('User');

const initPassport = function(app) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, done);
  });

  // load strategies
  // require('./strategies/local').init();
  // require('./strategies/bearer').init();
  // require('./strategies/facebook').init();
  JwtInit();
};


export default initPassport;