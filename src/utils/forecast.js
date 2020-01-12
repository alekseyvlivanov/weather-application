const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/03521f7df6c5a2daf398c82866fa5b85/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, {
        timezone: body.timezone,
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
