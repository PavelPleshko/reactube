'use strict';
const passport = require('passport'),
FacebookTokenStrategy = require('passport-facebook-token'),
oauth = require('../oauth'),
mongoose = require('mongoose'),
User = mongoose.model('User');


module.exports.init = initFacebookTokenStrategy;

function initFacebookTokenStrategy() {
passport.use(new FacebookTokenStrategy({
	clientID: oauth.facebook.app_id,
    clientSecret: oauth.facebook.app_secret,
    callbackURL     : oauth.facebook.callback,
    profileFields   : ["id","displayName", "gender", "email","location","address"],
    scope           : [ "email", "public_profile"]
},function(accessToken, refreshToken, profile, done){
	console.log(profile);
	 User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
}))


}
