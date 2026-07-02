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


