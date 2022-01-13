const storesRouter = require('express').Router();
const Store = require('../models/store');

storesRouter.get('/', async (req, res, next) => {
	const stores = await Store.find({});
	res.status(200).json({
		success: true,
		count: stores.length,
		data: stores,
	});
});

storesRouter.post('/', async (req, res, next) => {
	const store = await Store.create(req.body);

	res.status(200).json({
		success: true,
		data: store,
	});

	next();
});

module.exports = storesRouter;
