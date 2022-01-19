const League = require('../models/league');
const Sponsor = require('../models/sponsor');

const initialLeagues = [
	{
		name: 'The Wyld Stallyns',
		lng: -73.97,
		lat: 40.77,
		cost: 4500,
	},
	{
		name: 'Team Zoidberg',
		lng: -73.97,
		lat: 40.77,
		cost: 6000,
	},
	{
		name: 'The Zoomers',
		lng: -73.97,
		lat: 40.77,
		cost: 1500,
	},
	{
		name: 'North Horsburg Little League',
		lng: -73.97,
		lat: 40.77,
		cost: 3500,
	},
	{
		name: 'The Duloc Ogres',
		lng: -73.97,
		lat: 40.77,
		cost: 2500,
	},
];

const initialSponsor = [
	{
		lng: -73.97,
		lat: 40.77,
		maxRadius: 5,
		budget: 8000,
	},
];

// Total Budget + radius (i.e. 5 miles) + location (i.e. lngitude/longitude) = enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it
// const enoughLeagues = async (budget, radius) => {
// 	const leagues = await League.find({});
// 	const sponsors = await Sponsor.find({});

// 	const totalBudget = leagues.reduce((acc, league) => acc + league.cost, 0);
// 	const totalSponsors = sponsors.reduce(
// 		(acc, sponsor) => acc + sponsor.price,
// 		0
// 	);

// 	return totalBudget + totalSponsors + radius > budget;
// };

const leaguesInDb = async () => {
	const leagues = await League.find({});
	return leagues.map((league) => league.toJSON());
};

const sponsorsInDb = async () => {
	const sponsors = await Sponsor.find({});
	return sponsors.map((sponsor) => sponsor.toJSON());
};

module.exports = {
	initialLeagues,
	initialSponsor,
	leaguesInDb,
	sponsorsInDb,
};

// TEST
// 		location: {
// 			type: 'Point',
// 			coordinates: [-73.41624, 41.12308],
// 			formattedAddress: '123 Main Street, Norwalk, CT 06851, US',
// 		},
// 		name: 'League of Legends',
// 		cost: 1000,
// 		createdAt: '2022-01-13T02:26:47.067Z',
// 		id: '61df8de71155b614519bf16a',
// 	},
// 	{
// 		location: {
// 			type: 'Point',
// 			coordinates: [-74.007228, 40.713054],
// 			formattedAddress: ', New York, NY, US',
// 		},
// 		name: 'Central Park',
// 		cost: 1000,
// 		createdAt: '2022-01-18T00:20:00.793Z',
// 		id: '61e607b0b20b0d0102fb5b3d',
// 	},
// 	{
// 		location: {
// 			type: 'Point',
// 			coordinates: [-75.16562, 39.951061],
// 			formattedAddress: ', Philadelphia, PA, US',
// 		},
// 		name: 'Sara D. Roosevelt Park',
// 		budget: 2000,
// 		createdAt: '2022-01-18T18:01:32.672Z',
// 		id: '61e7007c15aff70fc4e59cce',
// 	},
// 	{
// 		location: {
// 			type: 'Point',
// 			coordinates: [-86.362997, 40.754493],
// 			formattedAddress: ', Logansport, IN, US',
// 		},
// 		name: 'Turkey Dogs',
// 		budget: 3000,
// 		createdAt: '2022-01-18T18:10:23.638Z',
// 		id: '61e7028f77374f8bbaa21dda',
// 	},
// 	{
// 		location: {
// 			type: 'Point',
// 			coordinates: [-74.660744, 40.35198],
// 			formattedAddress: ', Princeton, NJ, US',
// 		},
// 		name: 'Hungry Hippos',
// 		budget: 5000,
// 		createdAt: '2022-01-18T21:05:25.041Z',
// 		id: '61e72b956ccb3f621d59c591',
// 	},
// ];

// const initialSponsors = [
// 	{
// 		name: 'Central Park',
// 		location: { type: 'Point', coordinates: [-73.97, 40.77] },
// 		price: 1000,
// 	},
// 	{
// 		name: 'Sara D. Roosevelt Park',
// 		location: { type: 'Point', coordinates: [-73.9928, 40.7193] },
// 		price: 2000,
// 	},
// 	{
// 		name: 'Polo Grounds',
// 		location: { type: 'Point', coordinates: [-73.9375, 40.8303] },
// 		category: 'Stadiums',
// 		price: 5000,
// 	},
// 	{
// 		name: 'The High Line',
// 		location: { type: 'Point', coordinates: [-74.0059, 40.7195] },
// 		price: 3000,
// 	},
// ];
