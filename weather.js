const apiKey = "340bdb0c580a6f366f012ce4e39d2f60";
const button = $(".button");
const inputValue = $(".inputValue");
const cityEl = $(".city");
const dateEl = $(".date");
const weatherIconEl = $(".weatherIcon");
const temperatureEl = $(".temperature");
const humidityEl = $(".humidity");
const windSpeedEl = $(".windSpeed");
const uvIndexEl = $(".uvIndex");
const cardRow = $(".card-now");


var today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = String(today.getFullYear)
var today = mm + "." + dd +"." +yyyy;


if (JSON.parse(localStorage.getItem("city")) === null) {
    console.log("city not found")
}


function renderWeatherData(city, citytemperature, cityhumidity, citywindSpeed, cityweatherIcon, uvVal) {
    city.text(city);
    dateEl.text(`${today})`);
    temperatureEl.text(`Temperature: ${citytemperature}`);
    humidityEl.text(`Humidity: ${cityhumidity}`);
    windSpeedEl.text(`Wind Speed: ${citywindSpeed}`);
}

function getWeather(desiredCity) {
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=${desiredCity}&APPID=${apiKey}&units=imperial";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(renderWeatherData) {
        let cityObj = {
            city: weatherData.city,
            citytemperature: weatherData.temperature,
            cityhumidity: weatherData.humidity,
            citywindSpeed: weatherData.wind.speed,
        }
    
    })
}

getFiveDayForecast();

function getFiveDayForecast() {
    cardRow.empty();
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${desiredCity}&APPID=${apiKey}&units=imperial`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })

    
    
}






  
 
  