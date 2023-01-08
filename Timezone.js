const TimeTxt = document.getElementById("time");
// Returns element object time

function getTimezone(region){
  fetch("https://worldtimeapi.org/api/timezone/America/" + region)
  .then(response => {
    return response.json();
  }).then(data => {
    TimeTxt.innerText = data.datetime.slice(11, -16);
  })
// Requests data from American time servers

  .catch((err) => {
    console.log(err);
  })
}
// Code execution if there was an error

switch(document.getElementById("regionName").innerText){
// Evaluates the expression and returns element class to execute statement
  case "EASTERN":
    getTimezone("New_York");
    break;
// Requests to get eastern time from server with associated city or state
  case "CENTRAL":
    getTimezone("Chicago");
    break;
// Requests to get central time from server with associated city or state
  case "MOUNTAIN":
    getTimezone("Denver");
    break;
// Requests to get mountain time from server with associated city or state
  case "PACIFIC":
    getTimezone("Los_Angeles");
    break;
// Requests to get pacific time from server with associated city or state
  case "ALASKA":
    getTimezone("Anchorage");
    break;
// Requests to get alaska time from server with associated city or state
  case "HAWAII":
    getTimezone("Adak");
    break;
// Requests to get hawaii time from server with associated city or state
}


