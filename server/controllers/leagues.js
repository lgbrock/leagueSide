const leaguesRouter = require('express').Router();
const League = require('../models/league');

// GET all leagues
leaguesRouter.get('/', async (req, res, next) => {
	const leagues = await League.find({});
	res.send(leagues);
});

// POST/create a new league
leaguesRouter.post('/', async (req, res, next) => {
	const { name, lng, lat, cost } = req.body;
	const location = {
		type: 'Point',
		coordinates: [lng, lat],
	};
	const newLeague = new League({
		name,
		location,
		cost,
	});
	const savedLeague = await newLeague.save();
	res.send(savedLeague);
});

module.exports = leaguesRouter;
