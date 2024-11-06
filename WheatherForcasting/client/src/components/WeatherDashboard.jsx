import React, { useState, useEffect } from "react";
import { getCurrentWeather, getForecast } from "../utils/weatherAPI";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./SearchBar";
import axios from "axios"; // For API calls to JSON Server
import "../styles/WeatherDashboard.css";

const BACKEND_API = "http://localhost:3001";

const WeatherDashboard = () => {
  const [city, setCity] = useState(""); // City input state
  const [currentWeather, setCurrentWeather] = useState(null); // Current weather data
  const [forecast, setForecast] = useState(null); // 5-day forecast data
  const [favorites, setFavorites] = useState([]); // List of favorite cities

  // Fetch favorite cities on component mount
  useEffect(() => {
    // Fetch favorites from backend (JSON Server)
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`${BACKEND_API}/favorites`);
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();

    // Get last searched city from localStorage
    const lastSearchedCity = localStorage.getItem("lastSearchedCity");
    if (lastSearchedCity) {
      handleSearch(lastSearchedCity);
    }
  }, []);

  // Handle search and set current weather and forecast
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

    // Store the searched city in localStorage
    localStorage.setItem("lastSearchedCity", cityName);
  };

  // Add city to favorites in both state and backend (JSON Server)
  const addToFavorites = async () => {
    if (!currentWeather) return;

    // Check if the city is already in the favorites list
    if (favorites.some((fav) => fav.city === city)) {
      alert("This city is already in your favorites.");
      return;
    }

    // Add the current city to the favorites list
    try {
      const response = await axios.post(`${BACKEND_API}/favorites`, {
        city: currentWeather.name,
      });

      setFavorites([...favorites, response.data]); // Update the local favorites list
      alert(`${currentWeather.name} added to favorites!`);
    } catch (error) {
      console.error("Error adding city to favorites:", error);
    }
  };

  return (
    <div className="weatherDashboard">
      <SearchBar onSearch={handleSearch} />

      {/* Display list of favorite cities */}
      <div className="favorites">
        <h3>Your Favorite Cities</h3>
        <div className="cities">
          {favorites.map((fav, index) => (
            <div
              className="favoritesCity"
              key={index}
              onClick={() => {
                handleSearch(fav.city);
              }}
            >
              {fav.city}
            </div>
          ))}
        </div>
        <div>
          <button className="btn" onClick={addToFavorites}>
            Add to Favorites
          </button>
        </div>
      </div>

      {/* Display current weather and forecast */}
      {currentWeather && (
        <>
          <WeatherDisplay weather={currentWeather} forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
