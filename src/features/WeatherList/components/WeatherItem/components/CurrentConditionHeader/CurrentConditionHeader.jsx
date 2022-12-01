import React from 'react';
import PropTypes from 'prop-types';
import classNames from './CurrentConditionHeader.module.css';

const celciusDegree = ' °C';
const CurrentConditionHeader = ({
  location, time, temp, img, description,
}) => (
  <div className={classNames.header}>
    <div className={classNames.location}>{location}</div>
    <div className={classNames.time}>{time}</div>
    <div className={classNames.temp}>
      {temp}
      {celciusDegree}
    </div>
    <div className={classNames.weather}>
      <div className={classNames.iconWrapper}>
        <img className={classNames.icon} src={img} alt="weather" style={{ height: '100%' }} />
      </div>
      <div className={classNames.descr}>{description}</div>
    </div>
  </div>
);

CurrentConditionHeader.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CurrentConditionHeader;
