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

describe('Adding a new league', () => {});

afterAll(() => {
	mongoose.connection.close();
});
