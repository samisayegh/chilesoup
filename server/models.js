var mongoose = require('mongoose');
var _ = require('underscore');

var userSchema = require('./schema/user');
var sessionSchema = require('./schema/session');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test', function(err, db){
    if (err) {
      console.log('Cannot connect to mongo');
    }
    else {
      console.log('Connected to mongo');
    }
  });

  wagner.factory('db', function() {
    return mongoose;
  });

  var User = mongoose.model('User', userSchema);
  var Session = mongoose.model('Session', sessionSchema);
  

  var models = {
    User: User,
    Session: Session
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};