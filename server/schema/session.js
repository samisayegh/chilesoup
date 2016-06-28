var mongoose = require('mongoose');

var sessionSchema = mongoose.Schema({
	host: {
		type: String,
		required: true,
		lowercase: true
	},
	location: {
		address: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		}
	},
	time: {
		day: {
			type: Date,
			required: true
		},
		start: {
			type: Number,
			required: true
		},
		end: {
			type: Number,
			required: true
		}
	},
	skill: {
		type: String,
		required: true
	},
	numOfPlayers: {
		type: Number,
		required: true
	},
	notes: {
		type: String,
		required: true
	},
	roster: {
		username: {
			type: String
		},
		instrument: {
			type: String
		},
		skill: {
			type: String
		}
	}
});

module.exports = sessionSchema;
module.exports.sessionSchema = sessionSchema;