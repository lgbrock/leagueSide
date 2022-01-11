const League = require('../models/league');

const initialLeagues = [
	{
		name: 'Basketball',
		long: -122.4194155,
		lat: 37.7749295,
		price: 50,
	},
	{
		name: 'Soccer',
		long: -122.4194155,
		lat: 37.7749295,
		price: 60,
	},
	{
		name: 'Baseball',
		long: -122.4194155,
		lat: 37.7749295,
		price: 10,
	},
	{
		name: 'Hockey',
		long: -122.4194155,
		lat: 37.7749295,
		price: 20,
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

modules.exports = {
	initialLeagues,
	initialSponsors,
};
