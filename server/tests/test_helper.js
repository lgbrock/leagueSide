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
