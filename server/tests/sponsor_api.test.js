const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);

const Sponsor = require('../models/sponsor');

beforeEach(async () => {
	await Sponsor.deleteMany({});

	for (let sponsor of helper.initialSponsors) {
		let newSponsor = new Sponsor(sponsor);
		await newSponsor.save();
	}
});

describe('Adding a new sponsor', () => {
	test('a valid sponsor can be added', async () => {
		const newSponsor = {
			address: '123 Main St',
			budget: 1000,
		};

		await api
			.post('/api/sponsors')
			.send(newSponsor)
			.expect(200)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/sponsors');
		expect(response.body.length).toBe(helper.initialSponsors.length + 1);
	});
});

afterAll(() => {
	mongoose.connection.close();
});
