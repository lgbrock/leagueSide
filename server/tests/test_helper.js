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

modules.exports = {
	initialLeagues,
};
