import { useState } from 'react';
import './App.css';
import './weather.css';
import { Data } from './components/weatherApp';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [error, setError] = useState('');

  function data() {
    if (city.trim() !== '') {
      setSearchCity(city);
    }
  }

  return (
    <div className="container">
      <h1>Weather App</h1>
      <Data
        setWeather={setWeather}
        setError={setError}
        cityName={searchCity}
        setCity={setCity}
      />
      <input
        placeholder="City to check the weather"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && data()}
      />
      <button onClick={data}>Check Weather</button>
      {weather ? (
        <div>
          <div className="divider"></div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <span style={{ marginLeft: '5px' }}>
            <strong>{new Date(weather.dt * 1000).toLocaleDateString()}</strong>
          </span>
          <p>
            <b>description</b>: {weather.weather[0].description}
          </p>
          <p>
            <b>Temperature(&deg;F):</b>
            {weather.main.temp}&deg;F
          </p>
          <p>
            <b>Temperature(&deg;C):</b>
            {Math.ceil(`${((weather.main.temp - 32) * 5) / 9}`).toFixed(2)}
            &deg;C
          </p>
          <p>
            <b>Humidity</b>: {weather.main.humidity}%
          </p>
          <p>
            <b>Wind Speed</b>: {weather.wind.speed} mph
          </p>
          <p>
            <b>Pressure</b>: {weather.main.pressure} pascal
          </p>
        </div>
      ) : (
        error
      )}
    </div>
  );
}

export default App;
