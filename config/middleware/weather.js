var weather = require('weather-js');

var db = require("../models");

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {var weather = require('weather-js');
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
  });

  module.exports = weather;