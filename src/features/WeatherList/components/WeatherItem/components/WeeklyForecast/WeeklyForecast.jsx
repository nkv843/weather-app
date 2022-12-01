import React from 'react';
import PropTypes from 'prop-types';
import classNames from './WeeklyForecast.module.css';
import ForecastItem from '../ForecastItem';

const WeeklyForecast = ({ forecast }) => (
  <div className={classNames.weeklyForecast}>
    {forecast.map((item) => (
      <ForecastItem
        key={item.index}
        temp={item.temp2m}
        title={item.date}
        img={item.weather.img}
      />
    ))}
  </div>
);

WeeklyForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WeeklyForecast;
