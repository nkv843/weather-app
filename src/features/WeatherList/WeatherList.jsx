import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './components/WeatherItem';
import classNames from './WeatherList.module.css';

const WeatherList = ({ weathers }) => (
  <div className={classNames.list}>
    {weathers?.map((weather) => (
      <WeatherItem
        weather={weather}
        key={weather.id}
      />
    ))}
  </div>
);

WeatherList.propTypes = {
  weathers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WeatherList;
