const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);

const League = require('../models/league');

beforeEach(async () => {
	await League.deleteMany({});

	for (let league of helper.initialLeagues) {
		let newLeague = new League(league);
		await newLeague.save();
	}
});

describe('new league is saved as json file', () => {
	test('league is returned in json format', () => {
		return api
			.get('/api/leagues')
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});
});

// describe('Adding a new league', () => {
// 	test('a valid league can be added', async () => {
// 		const newLeague = {
// 			name: 'Central Park',
// 			cost: 1000,
// 			address: 'New York, NY',
// 		};

// 		await api
// 			.post('/api/leagues')
// 			.send(newLeague)
// 			.expect(200)
// 			.expect('Content-Type', /application\/json/);

// 		const response = await api.get('/api/leagues');
// 		expect(response.body.length).toBe(helper.initialLeagues.length + 1);
// 	});
// });

afterAll(() => {
	mongoose.connection.close();
});
