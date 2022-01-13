const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);

const League = require('../models/league');

beforeEach(async () => {
	await League.deleteMany({});

	for (let league of helper.initialSponsors) {
		let newLeague = new League(league);
		await newLeague.save();
	}
});

describe('Adding a new league', () => {
	test('a valid league can be added', async () => {
		const newLeague = {
			name: 'Basketball',
			location: {
				type: 'Point',
				coordinates: [-73.97, 40.77],
			},
			price: 1000,
		};

		await api
			.post('/api/leagues')
			.send(newLeague)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/leagues');
		expect(response.body.length).toBe(helper.initialSponsors.length + 1);
	});
});

afterAll(() => {
	mongoose.connection.close();
});
