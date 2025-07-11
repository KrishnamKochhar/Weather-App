import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import Forecast from './Forecast.jsx';
import UnitToggle from './UnitToggle.jsx';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');
  const [city, setCity] = useState('');

  const API_KEY = "b1c5b6d4d8c80c47b7a12ac2d0f3c202";


  const fetchWeather = async (location) => {
    setLoading(true);
    setError('');
    try {
      // Current weather
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${unit}`;
      const weatherResponse = await fetch(weatherUrl);
      
      if (!weatherResponse.ok) throw new Error('City not found');
      
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);
      setCity(weatherData.name);

      // 5-day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${unit}`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [unit]);

  const handleSearch = (searchCity) => {
    fetchWeather(searchCity);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-app">
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle unit={unit} onToggle={toggleUnit} />
      
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} unit={unit} />
          {forecastData && <Forecast data={forecastData} unit={unit} />}
        </>
      )}
    </div>
  );
};

export default App;
