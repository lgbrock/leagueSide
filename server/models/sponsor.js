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

const sponsorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: pointSchema,
		required: true,
	},
	budget: {
		type: Number,
		required: true,
	},
});

sponsorSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Sponsor', sponsorSchema);

// location: {
// 	type: {
// 		type: String,
// 		enum: ['Point']
// 	},
// 	coordinates: {
// 		type: [Number],
// 		index: '2dsphere'
// 	}
// 	}
