const leaguesRouter = require('express').Router();
const League = require('../models/league');

// GET all leagues
leaguesRouter.get('/', async (req, res, next) => {
	const leagues = await League.find({});
	res.send(leagues);
});

// POST/create a league
leaguesRouter.post('/', async (req, res, next) => {
	const league = new League({
		name: req.body.name,
		address: req.body.address,
	});

	const savedLeague = await league.save();
	res.send(savedLeague);
});

module.exports = leaguesRouter;
