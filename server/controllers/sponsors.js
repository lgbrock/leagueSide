const sponsorsRouter = require('express').Router();
const Sponsor = require('../models/sponsor');

// POST/create sponsor
sponsorsRouter.post('/', async (req, res, next) => {
	const sponsor = new Sponsor({
		name: req.body.name,
		location: {
			type: {
				type: String,
				enum: ['Point'],
			},
			coordinates: {
				type: [Number],
				index: '2dsphere',
			},
		},
		budget: req.body.budget,
	});
	const savedSponsor = await sponsor.save();
	res.json(savedSponsor);
});

module.exports = sponsorsRouter;
