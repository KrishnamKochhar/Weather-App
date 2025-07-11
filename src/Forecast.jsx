import React from 'react';
import WeatherCard from './WeatherCard';

const Forecast = ({ data, unit }) => {
  // Group forecast by day
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {Object.values(dailyForecast).slice(0, 5).map((day) => (
          <div key={day.dt} className="forecast-card">
            <div className="forecast-date">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <WeatherCard
              temp={day.main.temp}
              feels_like={day.main.feels_like}
              description={day.weather[0].description}
              icon={day.weather[0].icon}
              humidity={day.main.humidity}
              windSpeed={day.wind.speed}
              unit={unit}
              small
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;