const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);

const Location = require('../models/location');

beforeEach(async () => {
	await Location.deleteMany({});

	for (let location of helper.initialSponsors) {
		const newLocation = new Location(location);
		await newLocation.save();
	}
});

describe('When a location is saved', () => {
	test('a location is returned', async () => {
		const newLocation = {
			name: 'Central Park',
			location: {
				type: 'Point',
				coordinates: [-73.97, 40.77],
			},
			price: 1000,
		};

		await api
			.post('/api/locations')
			.send(newLocation)
			.expect(200)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/locations');
		expect(response.body.length).toBe(helper.initialSponsors.length + 1);
	});
});

afterAll(() => {
	mongoose.connection.close();
});

// const response = await api
// 			.post('/api/leagues')
// 			.send(helper.initialSponsors[0]);

// 		expect(response.status).toBe(201);
// 		expect(response.body).toHaveProperty('name', 'Central Park');
// 		expect(response.body).toHaveProperty(
// 			'location.coordinates',
// 			[-73.97, 40.77]
// 		);
// 		expect(response.body).toHaveProperty('price', 1000);
