const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	coordinates: {
		type: [Number],
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

modules.exports = mongoose.model('Sponsor', sponsorSchema);
