import React from 'react';
import PropTypes from 'prop-types';
import classNames from './CurrentConditionFooter.module.css';

const CurrentConditionFooter = ({
  speed, direction, cloudiness, humidity, pressure,
}) => (
  <div className={classNames.currentCondition}>
    <div className={classNames.wind}>
      <div className={classNames.windSpeed}>{speed}</div>
      <div className={classNames.windDirection}>{direction}</div>
    </div>
    <div className={classNames.cloudiness}>{cloudiness}</div>
    <div className={classNames.humidity}>{humidity}</div>
    <div className={classNames.pressure}>
      {pressure}
      {' '}
      mm Hg
    </div>
  </div>
);

CurrentConditionFooter.propTypes = {
  speed: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  cloudiness: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default CurrentConditionFooter;
