import React from "react";
import "../styles/WeatherDisplay.css";

const WeatherDisplay = ({ weather, forecast }) => {
  const { name, main, weather: currentWeather, wind } = weather;
  const { temp, humidity } = main;
  const { speed } = wind;
  const { description, icon } = currentWeather[0];

  return (
    <div className="weatherDisplay">
      <h2>Weather</h2>
      <div className="currentWeather">
        <div className="cardContainer">
          <div className="card">
            <p className="city">{name}</p>
            <p className="weather">
              {description[0].toUpperCase() + description.slice(1)}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
              className="weatherIcon"
            />
            <p className="temp">{temp}°</p>
            <div className="humidityWind">
              <div className="humidity">
                <p className="humidityHeading">Humidity</p>
                <p className="humidityValue">{humidity}%</p>
              </div>
              <div className="wind">
                <p className="windHeading">Wind Speed</p>
                <p className="windValue">{speed} m/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <div className="forecastCards">
          {forecast &&
            forecast.list.slice(0, 5).map((item, index) => {
              const { main, weather: forecastWeather } = item;
              const { temp } = main;
              const { description, icon } = forecastWeather[0];

              // Using dynamic className based on the forecast data
              const forecastClassName = `forecastCard ${
                index === 0
                  ? "forecastCardToday"
                  : index % 2 === 0
                  ? "forecastCardEven"
                  : "forecastCardOdd"
              }`;

              return (
                <div key={index} className={forecastClassName}>
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt={description}
                    className="forecastIcon"
                  />
                  <h4>{description[0].toUpperCase() + description.slice(1)}</h4>
                  <p>{temp}°C</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
