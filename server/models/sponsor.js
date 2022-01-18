const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const sponsorSchema = new mongoose.Schema({
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		type: {
			type: String,
			enum: ['Point'],
		},
		coordinates: {
			type: [Number],
			index: '2dsphere',
		},
		formattedAddress: String,
	},
	// search within radius of location
	radius: {
		type: Number,
		required: [true, 'Please add a radius'],
	},
	budget: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

sponsorSchema.pre('save', async function (next) {
	const loc = await geocoder.geocode(this.address);
	this.location = {
		type: 'Point',
		coordinates: [loc[0].longitude, loc[0].latitude],
		formattedAddress: loc[0].formattedAddress,
	};

	this.address = undefined;
	next();
});

sponsorSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Sponsor', sponsorSchema);
