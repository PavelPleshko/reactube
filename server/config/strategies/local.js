
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

module.exports.init = function() {
  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      session:false
    },
    function(username, password, done) {
      User.authenticate(username, password, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: 'Invalid username or password.' });
        }

        return done(null, user);
      });
    }
  ));
};