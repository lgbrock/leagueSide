const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Point'],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});

const leagueSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: pointSchema,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

pointSchema.index({ location: '2dsphere' });

leagueSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('League', leagueSchema);
