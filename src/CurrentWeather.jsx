import React from 'react';
import WeatherCard from './WeatherCard';

const CurrentWeather = ({ data, unit }) => {
  const { name, main, weather, wind, sys } = data;
  const { temp, humidity, feels_like } = main;
  const { description, icon } = weather[0];
  const { country } = sys;

  return (
    <div className="current-weather">
      <h2>
        {name}, {country}
      </h2>
      <WeatherCard
        temp={temp}
        feels_like={feels_like}
        description={description}
        icon={icon}
        humidity={humidity}
        windSpeed={wind.speed}
        unit={unit}
      />
    </div>
  );
};

export default CurrentWeather;