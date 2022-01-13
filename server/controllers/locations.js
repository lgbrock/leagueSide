const locationsRouter = require('express').Router();
const Location = require('../models/location');

locationsRouter.post('/', async (req, res, next) => {
	const body = req.body;

	const location = new Location({
		name: body.name,
		location: {
			type: 'Point',
			coordinates: [body.longitude, body.latitude],
		},
	});
	const savedLocation = await location.save();
	res.send(savedLocation);
});

module.exports = locationsRouter;
