const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	storeId: {
		type: String,
		required: [true, 'Please add a storeId'],
		unique: true,
		trim: true,
		maxlength: [10, 'StoreId can not be more than 10 characters'],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		type: {
			type: String, // Don't do `{ location: { type: String } }`
			enum: ['Point'], // 'location.type' must be 'Point'
		},
		coordinates: {
			type: [Number],
			index: '2dsphere', // create the geospatial index
		},
		formattedAddress: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

storeSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Store', storeSchema);
