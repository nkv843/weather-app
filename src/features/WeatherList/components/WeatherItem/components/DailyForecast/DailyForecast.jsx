import React from 'react';
import PropTypes from 'prop-types';
import classNames from './DailyForecast.module.css';
import ForecastItem from '../ForecastItem';

const DailyForecast = ({ forecast }) => {
  const firstHalf = forecast.slice(-4);
  const secondHalf = forecast.slice(0, 4);
  return (
    <div className={classNames.daylyForecast}>
      <div className={classNames.daylyForecastHalf}>
        {firstHalf.map((item) => (
          <ForecastItem
            key={item.index}
            temp={item.temp2m}
            title={item.time}
            img={item.weather.img}
          />
        ))}
      </div>
      <div className={classNames.daylyForecastHalf}>
        {secondHalf.map((item) => (
          <ForecastItem
            key={item.index}
            temp={item.temp2m}
            title={item.time}
            img={item.weather.img}
          />
        ))}
      </div>
    </div>
  );
};
DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default DailyForecast;
