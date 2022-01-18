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
			address: 'Test address',
			radius: 100,
			budget: 1000000,
		};

		await api
			.post('/api/sponsors')
			.send(newSponsor)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const sponsorsAtEnd = await helper.sponsorsInDb();
		expect(sponsorsAtEnd.length).toBe(helper.initialSponsors.length + 1);

		const contents = sponsorsAtEnd.map((s) => s.address);
		expect(contents).toContain(newSponsor.address);
	});
});

afterAll(() => {
	mongoose.connection.close();
});
