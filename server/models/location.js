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

const locationSchema = new mongoose.Schema({
	name: String,
	location: {
		type: pointSchema,
		required: true,
	},
});

locationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Location', locationSchema);
