'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.init = initBasicStrategy;

function initBasicStrategy() {
  passport.use('basic', new BasicStrategy(function(username, password, done){
    User.authenticate(username, password, (err, user) => {
      if (err) {
        return done(err);
      }
console.log(user,username);
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  }));
}