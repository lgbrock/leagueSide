const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
	lng: {
		type: Number,
		required: [false, 'Longitude is required'],
	},
	lat: {
		type: Number,
		required: [false, 'Latitude is required'],
	},
	location: {
		name: {
			type: String,
			required: [false, 'Location name is required'],
		},
		type: {
			type: [Number],
			index: '2dsphere',
		},
		required: [false, 'Search radius is required'],
	},
	budget: {
		type: Number,
		required: [true, 'Budget is required'],
	},
});

// geoSchema.index({ location: '2dsphere' });

sponsorSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Sponsor', sponsorSchema);

// *-- GEOLOCATION --*

// const calcRadiusSchema = (lng, lat) => {
// 	const earthRadius = 6371;
// 	const latRadians = (lat * Math.PI) / 180;
// 	const lngRadians = (lng * Math.PI) / 180;
// 	const radius =
// 		earthRadius *
// 		Math.acos(
// 			Math.sin(latRadians) * Math.sin(latRadians) +
// 				Math.cos(latRadians) *
// 					Math.cos(latRadians) *
// 					Math.cos(lngRadians - lngRadians)
// 		);
// 	return radius;
// };

// const sponsorSchema = new mongoose.Schema({
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
// 	// search within radius of location
// 	radius: {
// 		type: Number,
// 		required: [true, 'Please add a radius'],
// 	},
// 	budget: {
// 		type: Number,
// 		required: true,
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// });

// sponsorSchema.pre('save', async function (next) {
// 	const loc = await geocoder.geocode(this.address);
// 	this.location = {
// 		type: 'Point',
// 		coordinates: [loc[0].longitude, loc[0].latitude],
// 		formattedAddress: loc[0].formattedAddress,
// 	};

// 	this.address = undefined;
// 	next();
// });
