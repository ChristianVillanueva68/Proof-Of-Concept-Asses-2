const TempTxt = document.getElementById("temperature");
const WeatherImg = document.getElementById("weather");
// Unchangable variables, gets temp and weather
function getWeather(latitude, longitude, region){
   fetch("https://api.weather.gov/points/" + latitude + "," + longitude)
  .then(response => {
    return response.json();
  }).then(data => {
        fetch(data.properties.forecast)
    .then(response => {
        return response.json();
    }).then(data => {
        TempTxt.innerHTML = data.properties.periods[0].temperature + "\u00B0F";
// Requests weather data from server by giving latitude and longitude of specified area or region
        let weather = data.properties.periods[0].shortForecast;
// Declaration of variables based on scope of statement
        if(weather.includes("Sun")){
            WeatherImg.src = "img/sun_" + region + ".png";
        }
// If weather is sunny, include sun widget icon
        else if(weather.includes("Cloud") || weather.includes("Rain") || weather.includes("Fog")){
            WeatherImg.src = "img/cloud_" + region + ".png";
        }
// If weather is cloudy, rainy, or misty then include cloud widget icon
        if(weather.includes("Snow")){
            WeatherImg.src = "img/snow_" + region + ".png";
// If weather is snowy, include snowfall widget icon
        }
    })
  })

  .catch((err) => {
    console.log(err);
  })
}
// Shows if there is a certain error


switch(document.getElementById("regionName").innerText){
// Executes eveyrthing associated with regionName
    case "EASTERN":
      getWeather("40.7306", "-73.9352", "eastern");
      break;
// Eastern weather with given coordinates of latitude and longitude
    case "CENTRAL":
      getWeather("39.7456", "-97.0892", "central");
      break;
// Central weather with given coordinates of latitude and longitude  
    case "MOUNTAIN":
      getWeather("39.7420", "-104.9915", "mountain");
      break;
// Mountain weather with given coordinates of latitude and longitude  
    case "PACIFIC":
      getWeather("34.0242", "-118.4964", "pacific");
      break;
// Pacific weather with given coordinates of latitude and longitude  
    case "ALASKA":
      getWeather("66.1605", "-153.3691", "alaska");
      break;
// Alaska weather with given coordinates of latitude and longitude  
    case "HAWAII":
      getWeather("19.7417", "-155.8444", "hawaii");
      break;
// Hawaii weather with given coordinates of latitude and longitude
  }