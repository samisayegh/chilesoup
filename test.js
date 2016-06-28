var assert = require('assert');
var express = require('express');
var status = require('http-status');
var superagent = require('superagent');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:3000';

var testUser = superagent.agent();

describe('Chilesoup Site Tests', function() {
  var server;
  var app;
  var User;
  var Session;
  var Config;

  before(function() {
    app = express();

    // Bootstrap server
    require('./server/models')(wagner);
    require('./server/dependencies')(wagner);
    wagner.invoke(require('./server/auth.js'), {app: app});
    require('./server/routes')(app, wagner);
    
    var deps = wagner.invoke(function(User,Session,Config){
      return {
        User: User,
        Session: Session,
        Config: Config
      };
    });

    User = deps.User;
    Session = deps.Session;
    Config = deps.Config;

    server = app.listen(3000);
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  beforeEach(function(done) {
    // Make sure categories are empty before each test
    User.remove({}, function(error) {
      assert.ifError(error);
      Session.remove({}, function(error) {
        assert.ifError(error);
        done();
      });
    });
  });

  beforeEach(function(done) {

    var users = [{
      profile: {
        username: 'balop',
        instrument: 'trumpet',
        skill: 'advanced',
        city: 'Montreal'
      },
      data: {
        oauth: 'invalid',
        email: 'balop@gmail.com',
        password: 'warhol',
        phone: '514123456'
      }
    },

    {
      profile: {
        username: 'mittney',
        instrument: 'piano',
        skill: 'beginner',
        city: 'Montreal'
      },
      data: {
        oauth: 'invalid',
        email: 'mittney@gmail.com',
        password: 'velvet',
        phone: '5149876543'
      }
    }];

    var sessions = [{
      host: 'balop',
      location: {
        address: '2750 Rue Workman, Montreal, QC, H3J 2S7',
        city: 'montreal'
      },
      time: {
        day: "June 27, 2016",
        start: 9,
        end: 11
      },
      skill: 'advanced',
      numOfPlayers: 4,
      notes: 'Jazz theme, $5 per person'
    },
    {
      host: 'mittney',
      location: {
        address: '1400 Avenue des Pins, Montreal, QC, H3G 1B1',
        city: 'montreal'
      },
      time: {
        day: "June 30, 2016",
        start: 7,
        end: 9
      },
      skill: 'beginner',
      numOfPlayers: 5,
      notes: 'Blues theme, free'
    }];
    
    User.create(users, function(error) {
      assert.ifError(error);
      Session.create(sessions, function(error) {
        assert.ifError(error);
        done();
      });
    });
  });

  describe('Database Schema:', function(){
    it('Retrieves a user from the user collection', function(done) {
      var query = {'profile.username': 'balop'};
      User.findOne(query, function(err, doc){
        assert.ifError(err);
        assert.equal(doc.profile.username, 'balop');
        done();
      });
    });

    it('Retrieves all sessions for a city', function(done) {
      var query = {'location.city': 'montreal'};
      Session.find(query, function(err, doc){
        assert.ifError(err);
        assert.equal(doc.length, 2);
        done();
      });
    });
  });

  describe('Routes:', function(){
    it('Retrieves the sessions for a city', function(done){
      var url = URL_ROOT + '/montreal';
      superagent.get(url).end(function(err, res){
        if (err) {
          return done(err);
        }
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 2);
        done();
      });
    });
  });

  // describe('Authentication:', function(){
  //   it('Logs in using local strategy', function(done){
  //     var url = URL_ROOT + '/auth/local-login';
  //     testUser.post(url).send({'data.email':'mittney@gmail.com', 'data.password':'velvet'}).end(function(err, res){
  //       if (err) {
  //         return done(err);
  //       }
  //       assert.equal(res.status, 200);
  //       console.log(res.body);
  //       done();
  //     });
  //   });
  // });
});


