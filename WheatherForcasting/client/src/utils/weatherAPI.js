import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY ; // Replace with your OpenWeatherMap API Key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to get current weather
export const getCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',  // Change to 'imperial' for Fahrenheit
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        return null;
    }
};

// Function to get 5-day forecast
export const getForecast = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',  // Change to 'imperial' for Fahrenheit
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return null;
    }
};
