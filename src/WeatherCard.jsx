import React from 'react';

const WeatherCard = ({ temp, feels_like, description, icon, humidity, windSpeed, unit }) => {
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="weather-card">
      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div className="weather-temp">{Math.round(temp)}{tempUnit}</div>
      </div>
      <div className="weather-description">{description}</div>
      <div className="weather-details">
        <p>Feels like: {Math.round(feels_like)}{tempUnit}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} {windUnit}</p>
      </div>
    </div>
  );
};

export default WeatherCard;