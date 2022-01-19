const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		unique: true,
		trim: true,
	},
	lng: {
		type: Number,
		required: [false, 'Longitude is required'],
	},
	lat: {
		type: Number,
		required: [false, 'Latitude is required'],
	},
	cost: {
		type: Number,
		required: [true, 'Cost is required'],
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

// * -- GEOLOCATION -- *

// const mongoose = require('mongoose');
// const geocoder = require('../utils/geocoder');

// const leagueSchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: [true, 'Please add a name'],
// 		unique: true,
// 		trim: true,
// 		maxlength: [50, 'Name can not be more than 50 characters'],
// 	},
// 	budget: {
// 		type: Number,
// 		required: [true, 'Please add a budget to sponsor your league'],
// 	},
// 	address: {
// 		type: String,
// 		required: [true, 'Please add an address'],
// 	},
// 	location: {
// 		type: {
// 			type: String,
// 			enum: ['Point'],
// 		},
// 		coordinates: {
// 			type: [Number],
// 			index: '2dsphere',
// 		},
// 		formattedAddress: String,
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// });

// leagueSchema.pre('save', async function (next) {
// 	const loc = await geocoder.geocode(this.address);
// 	this.location = {
// 		type: 'Point',
// 		coordinates: [loc[0].longitude, loc[0].latitude],
// 		formattedAddress: loc[0].formattedAddress,
// 	};

// 	this.address = undefined;
// 	next();
// });
