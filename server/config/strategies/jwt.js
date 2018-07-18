
import passport from 'passport';
import {Strategy as JwtStrategy}  from 'passport-jwt';
import config from '../config';
import User from '../../models/user.model';

const cookieExtractor = (req)=> {
  let token = null;
  if (req && req.cookies) token = req.cookies['jwt'];
  return token;
};

const opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = config.jwtSecret;
const jwtInit = () => {
passport.use('jwt',new JwtStrategy(opts, (jwt_payload, done)=> {
    User.findOne({_id: jwt_payload._id}, (err, user)=> {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
}

export default jwtInit;