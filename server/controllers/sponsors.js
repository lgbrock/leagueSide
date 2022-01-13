const sponsorsRouter = require('express').Router();
const Sponsor = require('../models/sponsor');

// GET all sponsors
sponsorsRouter.get('/', async (req, res, next) => {
	const sponsors = await Sponsor.find({});
	res.json(sponsors);
});

// POST/create sponsor
sponsorsRouter.post('/', async (req, res, next) => {
	const sponsor = new Sponsor({
		address: req.body.address,
		budget: req.body.budget,
	});

	const savedSponsor = await sponsor.save();
	res.json(savedSponsor);
});

module.exports = sponsorsRouter;
