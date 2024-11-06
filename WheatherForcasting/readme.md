# WeatherForecasting

A weather forecasting application that allows users to search for weather information by city, view current weather conditions, and a 5-day forecast. Users can also add cities to their favorites list, and the app stores the last searched city in the browser's local storage for a seamless user experience.

This project is structured into two parts:
1. **Frontend** (React)
2. **Backend** (JSON Server for managing favorites)

Both the frontend and backend have separate `package.json` files, and their dependencies are installed locally within each respective directory.

## Technologies Used

- **Frontend**: React.js
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: CSS (Custom Styles)
- **API Integration**:
  - OpenWeatherMap API for fetching weather data (current weather and 5-day forecast)
  - JSON Server as a mock backend for storing favorite cities
- **HTTP Requests**: Axios for API calls to the backend and OpenWeatherMap API
- **Local Storage**: For storing the last searched city

## Features

- **City Search**: Users can search for weather information of any city by typing its name in the search bar.
- **Current Weather**: Displays current weather data such as temperature, humidity, wind speed, etc., for the searched city.
- **5-Day Forecast**: Shows a 5-day weather forecast with temperatures and conditions.
- **Favorites**: Users can add cities to their favorite list. The favorite cities are stored in a mock backend (JSON Server) and displayed in the UI.
- **Persistent Search**: The last searched city is saved in the browser’s local storage, allowing the user to pick up right where they left off when the app is reloaded or reopened.

## Project Structure

This project consists of two main parts:
1. **Frontend**: React-based user interface
2. **Backend**: A mock backend using JSON Server

Each part has its own directory and `package.json` for managing dependencies separately.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) comes bundled with Node.js.

### Steps to Run the App

#### 1. **Download and Extract the ZIP File**

   - After downloading the ZIP file, extract it to your desired folder location.

#### 2. **Install Dependencies for Frontend**

   - Open your terminal and navigate to the `client` folder.
   - Run the following command to install the required dependencies for the frontend:
     ```bash
     npm install
     ```

#### 3. **Install Dependencies for Backend**

   - Open your terminal and navigate to the `server` folder.
   - Run the following command to install the required dependencies for the backend:
     ```bash
     npm install
     ```

#### 4. **Set Up the Backend (JSON Server)**

   - After installing dependencies for the backend, start the JSON Server:
     ```bash
     npm run dev
     ```
     - This will start the mock backend server on `http://localhost:3001`.

   - Make sure the `db.json` file exists in the `server` directory with the following structure:
     ```json
     {
       "favorites": []
     }
     ```

#### 5. **Start the Frontend App**

   - After setting up the backend, navigate to the `client` directory and run the following command to start the React app:
     ```bash
     npm start
     ```
     - This will start the React development server, and the app will be available at `http://localhost:3000`.

#### 6. **Use the App**

   - After completing the above steps, you should be able to open the app in your browser. 
   - You can search for cities, view current weather, check the 5-day forecast, and add/remove cities from your favorites list.

### Notes

- **Local Storage**: The last searched city is stored in the browser's local storage. If the user searches for a city and then reloads the app, the app will automatically search and display the weather for that city.
- **Favorite Cities**: Users can add cities to their favorites list, and those cities will be stored in the mock backend (`json-server`). You can view and manage your favorite cities from the UI.

## License

This project is open-source and available under the MIT License.
