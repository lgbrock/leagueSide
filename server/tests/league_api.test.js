const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const geolib = require('geolib');

const League = require('../models/league');
const Sponsor = require('../models/sponsor');

beforeEach(async () => {
	await League.deleteMany({});
	await Sponsor.deleteMany({});

	for (let league of helper.initialLeagues) {
		let leagueObject = new League(league);
		await leagueObject.save();
	}

	for (let sponsor of helper.initialSponsor) {
		let sponsorObject = new Sponsor(sponsor);
		await sponsorObject.save();
	}
});

describe('Adding a new league', () => {
	test('a valid league has been added', async () => {
		const newLeague = {
			name: 'Test League',
			lng: -73.97,
			lat: 40.78,
			cost: 1000,
		};

		await api
			.post('/api/leagues')
			.send(newLeague)
			.expect(200)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/leagues');

		expect(response.body.length).toBe(helper.initialLeagues.length + 1);

		const names = response.body.map((l) => l.name);
		expect(names).toContain(newLeague.name);
	});
});

describe('Adding a new sponsor', () => {
	test('a valid sponsor has been added', async () => {
		const newSponsor = {
			lng: -122.4194155,
			lat: 37.7749295,
			maxRadius: 10,
			budget: 10000,
		};

		await api
			.post('/api/sponsors')
			.send(newSponsor)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const sponsorsAtEnd = await helper.sponsorsInDb();
		expect(sponsorsAtEnd.length).toBe(helper.initialSponsor.length + 1);

		const contents = sponsorsAtEnd.map((s) => s.address);
		expect(contents).toContain(newSponsor.address);
	});
});

// test distance between initialSponsor and initialLeagues
describe('Distance between a sponsor and a league', () => {
	test('a valid distance has been calculated', async () => {
		const distance = geolib.getDistance(
			{
				latitude: helper.initialSponsor[0].lat,
				longitude: helper.initialSponsor[0].lng,
			},
			{
				latitude: helper.initialLeagues[0].lat,
				longitude: helper.initialLeagues[0].lng,
			}
		);

		expect(distance).toBe(0);
		console.log(distance);
	});
	test('a valid sponsor is within radius of league', async () => {
		const distance = geolib.getDistance(
			{
				latitude: helper.initialSponsor[0].lat,
				longitude: helper.initialSponsor[0].lng,
			},
			{
				latitude: helper.initialLeagues[0].lat,
				longitude: helper.initialLeagues[0].lng,
			}
		);

		expect(distance).toBeLessThanOrEqual(helper.initialSponsor[0].maxRadius);
		console.log(distance);
	});
});

// display initialLeagues that are within initialSponsor's budget
describe('Display Leagues within budget', () => {
	test('a valid sponsor has enough budget to join league', async () => {
		const distance = geolib.getDistance(
			{
				latitude: helper.initialSponsor[0].lat,
				longitude: helper.initialSponsor[0].lng,
			},
			{
				latitude: helper.initialLeagues[0].lat,
				longitude: helper.initialLeagues[0].lng,
			}
		);

		expect(distance).toBeLessThanOrEqual(helper.initialSponsor[0].maxRadius);
		console.log(distance);

		const budget = helper.initialSponsor[0].budget;
		const cost = helper.initialLeagues[0].cost;

		expect(budget).toBeGreaterThanOrEqual(cost);

		const response = await api.get('/api/leagues');

		expect(response.body.length).toBe(helper.initialLeagues.length);
	});
});

// display league names whose cost add up to 8000
describe('Display leagues that fall within 8000 budget of sponsor', () => {
	test('3 leagues have a combined cost less than 8000', async () => {
		const budget = helper.initialSponsor[0].budget;
		const cost =
			helper.initialLeagues[2].cost +
			helper.initialLeagues[3].cost +
			helper.initialLeagues[4].cost;

		expect(budget).toBeGreaterThanOrEqual(cost);

		const response = await api.get('/api/leagues');

		expect(response.body.length).toBe(5);
	});
});

afterAll(() => {
	mongoose.connection.close();
});
