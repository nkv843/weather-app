import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ForecastItem.module.css';

const ForecastItem = ({ title, temp, img }) => (
  <div className={classNames.item}>
    <p className={classNames.item__title}>{title}</p>
    <div className={classNames.item__iconWrapper}>
      <img className={classNames.item__icon} src={img} alt="weather" />
    </div>
    <p className={classNames.item__temp}>
      {temp}
      {' '}
      &#176;C
    </p>
  </div>
);

ForecastItem.propTypes = {
  title: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default ForecastItem;
