const nodeGeocoder = require("node-geocoder");
const keys = require("../config/dev");

const options = {
  provider: keys.geocoderProvider,
  httpAdapter: "https",
  apiKey: keys.geocodeerApiKey,
  formatter: null,
};
const geocoder = nodeGeocoder(options);

module.exports = geocoder;
