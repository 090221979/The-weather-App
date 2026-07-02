const API_KEY = 'f38be283ee5cb82181d5149e5fb83154';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherApp(cityName) {
  if (!cityName || cityName.trim() === '') return null;

  const response = await fetch(
    `${API_URL}?q=${cityName}&appid=${API_KEY}&units=imperial`
  );

  if (!response.ok) {
    throw new Error('City not found. Check spelling');
  }

  return response.json();
}
