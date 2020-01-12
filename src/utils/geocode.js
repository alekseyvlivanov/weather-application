const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiYWxla3NleXZsaXZhbm92IiwiYSI6ImNrNTU0M2E0MTBxZmozZHI1M3l5bXlldzcifQ.YQbMATuELLNjVWJ0ebcucQ&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geocoding service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find geolocation!", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
