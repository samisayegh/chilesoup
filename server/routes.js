var bodyparser = require('body-parser');
var status = require('http-status');
var _ = require('underscore');
var passport = require('passport');

module.exports = function(app, wagner){
	
	//DEPENDENCIES
	var deps = wagner.invoke(function(db, Session){
		return {
			db: db,
			Session: Session
		};
	});

	var db = deps.db;
	var Session = deps.Session;

	// OPEN ROUTES
	app.get('/', function(req, res){
		res.send('Hello World');
	});

	app.get('/:city', function(req, res){
		var city = req.params.city;
		var query = {'location.city': city};
		var sessions = Session.find(query, function(err, doc){
			if (err) {
				return res.status(status.INTERNAL_SERVER_ERROR);
			}
			else if(doc.length === 0){
				return res.send('There are no sessions listed for '+ city + '. Consider starting one.');
			}
			return res.send(doc);
		});
	});

	// AUTHORIZATION
	// FACEBOOK ROUTES
	app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', { failureRedirect: '/fail' }), function(req, res) {
	  	res.send('Welcome via facebook, ' + req.user.profile.username);
	});

	// TWITTER ROUTES
	app.get('/auth/twitter', passport.authenticate('twitter', { scope: ['email'] }));

	app.get('/auth/twitter/callback', 
		passport.authenticate('twitter', { failureRedirect: '/fail' }), function(req, res) {
	  	res.send('Welcome via twitter, ' + req.user.profile.username);
	});

	// GOOGLE ROUTES
	app.get('/auth/google', passport.authenticate('google', { scope: ['email'] }));

	app.get('/auth/google/callback', 
		passport.authenticate('google', { failureRedirect: '/fail' }), function(req, res) {
	  	res.send('Welcome via google, ' + req.user.profile.username);
	});

	// LOCAL ROUTES
	app.post('/auth/local-login', 
		passport.authenticate('local-login', { successRedirect: '/',
			failureRedirect: '/local-login',
			failureFlash: true 
		})
	);

	app.get('/auth/local-signup', 
		passport.authenticate('local-signup', { successRedirect: '/',
			failureRedirect: '/local-signup',
			failureFlash: true 
		})
	);

	//SUPPORTING FUNCTIONS
	function ensureAuthenticated(req, res, next) {
		if (req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth')
	}
};