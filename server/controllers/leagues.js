const leaguesRouter = require('express').Router();
const League = require('../models/league');
const Sponsor = require('../models/sponsor');

// GET all leagues
leaguesRouter.get('/', async (req, res, next) => {
	const leagues = await League.find({});
	res.send(leagues);
});

// GET leagues in a specific radius from a specific location (lat, long) from sponsor location
leaguesRouter.get('/:lat/:long/:radius', async (req, res, next) => {
	const lat = req.params.lat;
	const long = req.params.long;
	const radius = req.params.radius;
	const leagues = await League.find({
		location: {
			$near: {
				$geometry: {
					type: 'Point',
					coordinates: [long, lat],
				},
				$maxDistance: radius,
			},
		},
	});
	res.send(leagues);
});

// POST/create a league
leaguesRouter.post('/', async (req, res, next) => {
	const league = new League({
		name: req.body.name,
		budget: req.body.budget,
		address: req.body.address,
	});

	const savedLeague = await league.save();
	res.send(savedLeague);
});

module.exports = leaguesRouter;
