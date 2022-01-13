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



afterAll(() => {
	mongoose.connection.close();
});
