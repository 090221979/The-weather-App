const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherApp(cityName) {
  if (!cityName || cityName.trim() === '') return null;

  const response = await fetch(
    `${API_URL}?q=${cityName}&appid=${apiKey}&units=imperial`
  );

  if (!response.ok) {
    throw new Error('City not found. Check spelling');
  }

  return response.json();
}
