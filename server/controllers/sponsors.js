const sponsorsRouter = require('express').Router();
const Sponsor = require('../models/sponsor');

// GET all Sponsors
sponsorsRouter.get('/', async (req, res, next) => {
	const sponsors = await Sponsor.find({});
	res.send(sponsors);
});

// POST/create sponsor
sponsorsRouter.post('/', async (req, res, next) => {
	const { lng, lat, location, budget } = req.body;
	const sponsor = new Sponsor({
		lng,
		lat,
		location,
		budget,
	});
	await sponsor.save();
	res.status(201).json(sponsor);
});

module.exports = sponsorsRouter;
