import React, { useState } from "react";
import { getCurrentWeather, getForecast } from "../utils/weatherAPI";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./SearchBar";
import "../styles/WeatherDashboard.css";

const WeatherDashboard = () => {
  const [, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (cityName) => {
    setCity(cityName);

    const currentData = await getCurrentWeather(cityName);
    if (currentData) {
      setCurrentWeather(currentData);
    }

    const forecastData = await getForecast(cityName);
    if (forecastData) {
      setForecast(forecastData);
    }
  };

  return (
    <div className="weather-dashboard">
      <SearchBar onSearch={handleSearch} />
      {currentWeather && (
        <WeatherDisplay weather={currentWeather} forecast={forecast} />
      )}
    </div>
  );
};

export default WeatherDashboard;
