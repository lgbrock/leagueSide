const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	long: {
		type: Number,
		required: true,
	},
	lat: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

leagueSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('League', leagueSchema);
