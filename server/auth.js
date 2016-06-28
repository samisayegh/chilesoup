var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var ROOT_URL = 'http://localhost:3000';

module.exports = function setupAuth(User, Config, app){
	
	// High level serialize/de-serialize configuration for passport
	passport.serializeUser(function(user, done) {
	done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
	User.
	  findOne({ _id : id }).
	  exec(done);
	});
	
	// FACEBOOK STRATEGY
	passport.use(new FacebookStrategy({
		clientID: Config.facebook.clientID,
		clientSecret: Config.facebook.clientSecret,
		callbackURL: ROOT_URL + '/auth/facebook/callback',
		// Necessary for new version of Facebook graph API
		profileFields: ['id', 'emails', 'name']
	},
	function(accessToken, refreshToken, profile, done) {
		if (!profile.emails || !profile.emails.length) {
			return done('No emails associated with this account!');
		}

		User.findOneAndUpdate({'data.oauth': profile.id },
		{
			$set: {
			'profile.username': profile.emails[0].value
			// 'profile.picture': 'http://graph.facebook.com/' +
			//   profile.id.toString() + '/picture?type=large'
			}
		},
		{ 'new': true, upsert: true, runValidators: true },
		function(err, user) {
		  done(err, user);
		});
	}));

	// TWITTER STRATEGY
	passport.use(new TwitterStrategy({
		consumerKey: Config.twitter.consumerKey,
		consumerSecret: Config.twitter.consumerSecret,
		callbackURL: ROOT_URL + '/auth/twitter/callback'
	},
	function(token, tokenSecret, profile, done){
		User.findOne({'data.oauth': profile.id }, function(err, user) {
			if(err) {
				console.log(err);  // handle errors!
			}
			if (!err && user !== null) {
				done(null, user);
			} 
			else {
				user = new User({
					'profile.username': profile.displayName,
					'profile.city': profile.location,
					'data.oauth': profile.id,
					'data.created': Date.now()
				});
				user.save(function(err) {
					if(err) {
						console.log(err);  // handle errors!
					} 
					else {
						console.log("saving user ...");
						done(null, user);
					}
				});
			}
		});
	}));
	
	// GOOGLE STRATEGY
	passport.use(new GoogleStrategy({
		clientID: Config.google.clientID,
		clientSecret: Config.google.clientSecret,
		callbackURL: ROOT_URL + '/auth/google/callback'
	},
	function(request, accessToken, refreshToken, profile, done) {
		User.findOne({ 'data.oauth': profile.id }, function(err, user) {
			if(err) {
				console.log(err);  // handle errors!
			}
			if (!err && user !== null) {
				done(null, user);
			}
			else {
				user = new User({
					'profile.username': profile.displayName,
					'data.oauth': profile.id,
					'data.email': profile.emails[0].value,
					'data.created': Date.now()
				});
				user.save(function(err) {
					if(err) {
				    	console.log(err);  // handle errors!
					}
					else {
						console.log("saving user ...");
						done(null, user);
					}
				});
			}
		});
	}));

	// LOCAL STRATEGY
	passport.use('local-login', new LocalStrategy({
		passReqToCallback : true
	},function(req, email, password, done) {
		User.findOne({ 'data.email': email }, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user){
				return done(null, false, { message: 'Email is not registered.' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}));

	passport.use('local-signup', new LocalStrategy({
		passReqToCallback : true
	},function(req, email, password, done) {
		User.findOne({ 'data.email': email }, function(err, user) {
			if (err) {
				return done(err);
			}
			if (user) {
				return done(null, false, { message: 'That email address is already in use. Login instead?' });
			}
			else{
				user = new User({
					'profile.username': getEmailPrefix(email),
					'data.email': email,
					'data.password': this.generateHash(password),
					'data.created': Date.now()
				});
				user.save(function(err) {
					if(err) {
				    	console.log(err);  // handle errors!
					}
					else {
						done(null, user);
					}
				});
			}
		});
	}));

	// Express middlewares
	app.use(require('express-session')({secret: Config.facebook.clientSecret}));
	app.use(passport.initialize());
	app.use(passport.session());

	
	// SUPPORTING FUNCTIONS
	function getEmailPrefix(email){
		//TODO: convert to regex checking for '.' and '@' symbols
		return email.split(/[.@_]/)[0];
	};
};