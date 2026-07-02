import { useEffect } from 'react';
import { fetchWeatherApp } from '../utils/fetchWeatherData';

export function Data({ cityName, setCity, setWeather, setError }) {
  useEffect(() => {
    if (!cityName || cityName.trim() === '') return;
    async function runApp() {
      try {
        setError('');
        const response = await fetchWeatherApp(cityName);
        setWeather(response);
        console.log(response);
        setCity('');
      } catch (err) {
        setError(err.message || 'Unable to contact the Weather Server');
        setWeather(null);
      }
    }
    runApp();
  }, [cityName, setCity, setWeather, setError]);
  return null;
}

// import React, { useEffect } from 'react';

// const API_KEY = 'f38be283ee5cb82181d5149e5fb83154';
// const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// // 1. Fixed: Removed the 'async' keyword from the main component definition
// export function Data({ cityName, setCity, setWeather, setError }) {

//   // 2. Fixed: Wrapped the asynchronous execution securely inside a useEffect hook
//   useEffect(() => {
//     // Stop empty strings from running and throwing unnecessary network errors
//     if (!cityName || cityName.trim() === '') return;

//     async function fetchWeatherData() {
//       try {
//         setError(''); // Clear past errors before running a new check

//         const res = await fetch(
//           `${API_URL}?q=${cityName}&appid=${API_KEY}&units=imperial`
//         );
//         const response = await res.json();

//         // OpenWeatherMap API sends back error statuses as strings or numbers under .cod
//         if (response.cod === 404 || response.cod === '404') {
//           setError('City not found. Please double check your spelling.');
//           setWeather(null);
//         } else {
//           setWeather(response);
//           console.log("Weather payload received:", response);
//           setCity(''); // Clear the input field text value upon a successful search
//         }
//       } catch (err) {
//         // Fixed: Ensure you pass down a readable string description rather than a raw object
//         setError('Network error. Unable to contact the weather server.');
//         setWeather(null);
//       }
//     }

//     fetchWeatherData();
//   }, [cityName, setCity, setWeather, setError]); // 3. Listens for changes to run automatically!

//   return null; // This component handles the data layer only, no visual markup needed here
// }
