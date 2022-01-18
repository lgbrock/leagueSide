const League = require('../models/league');

const initialLeagues = [
	{
		name: 'Central Park',
		address: 'New York, NY',
		budget: 3000,
	},
	{
		name: 'Sara D. Roosevelt Park',
		address: 'New York, NY',
		budget: 2000,
	},
	{
		name: 'Polo Grounds',
		address: 'New York, NY',
		budget: 1000,
	},
];

const initialSponsors = [
	{
		name: 'Central Park',
		location: { type: 'Point', coordinates: [-73.97, 40.77] },
		price: 1000,
	},
	{
		name: 'Sara D. Roosevelt Park',
		location: { type: 'Point', coordinates: [-73.9928, 40.7193] },
		price: 2000,
	},
	{
		name: 'Polo Grounds',
		location: { type: 'Point', coordinates: [-73.9375, 40.8303] },
		category: 'Stadiums',
		price: 5000,
	},
	{
		name: 'The High Line',
		location: { type: 'Point', coordinates: [-74.0059, 40.7195] },
		price: 3000,
	},
];

module.exports = {
	initialLeagues,
	initialSponsors,
};
