const sponsorsRouter = require('express').Router();
const Sponsor = require('../models/sponsor');
const League = require('../models/league');

// GET all sponsors
sponsorsRouter.get('/', async (req, res, next) => {
	const sponsors = await Sponsor.find({});
	res.json(sponsors);
});

// GET all leagues for a sponsor by radius and budget range
sponsorsRouter.get('/:id/leagues', async (req, res, next) => {
	const { id } = req.params;
	const { radius, budget } = req.query;
	const sponsor = await Sponsor.findById(id);
	if (!sponsor) {
		return res.status(404).json({
			message: 'Sponsor not found',
		});
	}
	const leagues = await League.find({
		location: {
			$near: {
				$geometry: {
					type: 'Point',
					coordinates: [
						sponsor.location.coordinates[0],
						sponsor.location.coordinates[1],
					],
				},
				$maxDistance: radius,
			},
		},
		budget: {
			$gte: budget[0],
			$lte: budget[1],
		},
	});
	res.json(leagues);
});

// POST/create sponsor
sponsorsRouter.post('/', async (req, res, next) => {
	const sponsor = new Sponsor({
		address: req.body.address,
		budget: req.body.budget,
		radius: req.body.radius,
	});

	const savedSponsor = await sponsor.save();
	res.json(savedSponsor);
});

// Find league within certain radius
// sponsorsRouter.get('/:id/leagues', async (req, res, next) => {
// 	const sponsor = await Sponsor.findById(req.params.id);
// 	const leagues = await League.find({
// 		location: {
// 			$near: {
// 				$geometry: {
// 					type: 'Point',
// 					coordinates: [
// 						sponsor.location.coordinates[0],
// 						sponsor.location.coordinates[1],
// 					],
// 				},
// 				$maxDistance: req.query.maxDistance * 1609.34,
// 			},
// 		},
// 	});
// 	res.json(leagues);
// });

module.exports = sponsorsRouter;
