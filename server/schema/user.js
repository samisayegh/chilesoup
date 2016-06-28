var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		instrument: {
			type: String,
			lowercase: true
		},
		skill: {
			type: String
		},
		city: {
			type: String
		}
	},
	data: {
		oauth: { type: String},
		email: { type: String},
		password: { type: String},
		phone: {type: Number},
		created: {type: Date}
	}
});

// Generates a hash from a password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Checks if provided password matches stored hash
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.data.password);
};

module.exports = userSchema;
module.exports.userSchema = userSchema;