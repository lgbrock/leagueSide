const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const leaguesRouter = require('./controllers/leagues');
const sponsorsRouter = require('./controllers/sponsors');
const locationsRouter = require('./controllers/locations');
const storesRouter = require('./controllers/stores');

logger.info('connecting to', config.MONGODB_URI);

mongoose
	.connect(config.MONGODB_URI)
	.then(() => {
		logger.info('connected to MongoDB');
	})
	.catch((error) => {
		logger.error('error connecting to MongoDB:', error.message);
	});

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/leagues', leaguesRouter);
app.use('/api/sponsors', sponsorsRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/stores', storesRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
