const NodeGeocoder = require('node-geocoder');

// GeoCoder
const options = {
	provider: process.env.GEOCODER_PROVIDER,
	fetch: 'https',
	apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
	formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;