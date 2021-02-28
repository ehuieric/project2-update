function formatDate (date) {
  return moment.unix(date).format("MM/DD/YYYY");

}

function apisearch () {

    var APIkey = `611014b4e0ba1ad2c8de4333af239b85`;
    var key = '7YBjjSaewx5BgAnD4Sxe61fQ83dHuABQ';
    var url1= `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location="columbus"`;

$.ajax({
  url: url1,
  method: "GET",
  headers: {
      "x-requested-with": "xhr"
  }
}).then(function(response){

  const lat = response.results[0].locations[0].displayLatLng.lat;
  const lon = response.results[0].locations[0].displayLatLng.lng;
  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alert,minutely&appid=${APIkey}&units=imperial`;
  var queryurl = `https://cors-anywhere.herokuapp.com/` + url;

  

  $.ajax({
      url: queryurl,
      method: "GET",
      headers: {
          "x-requested-with": "xhr"
      }
  }).then(function (data) {
      console.log('weather', data);
      $("#results").empty();
      $("#results").append(`<div class="info"> 
                              <h1 class="city">
                              ${response.results[0].providedLocation.location}
                                <span>
                                 ${formatDate(data.current.dt)}
                                </span>
                              </h1>
                              <p>Temperature: ${data.current.temp} F</p>
                              <p>Humidity: ${data.current.humidity}%</p>
                              <p>wind speed: ${data.current.wind_speed} MPH</p>
                              <p>UV Index: ${data.current.uvi} </p>
                          </div>`);

  })
})
}                        
    
apisearch();