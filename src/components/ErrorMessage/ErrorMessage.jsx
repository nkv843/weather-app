import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ErrorMessage.module.css';

const ErrorMessage = ({ serverError }) => (
  serverError
    ? (
      <div className={classNames.message}>
        <span className={classNames.messageFrame}>Oops, something went wrong 🥲</span>
        <br />
        <span className={classNames.messageFrame}>⚒️</span>
        {serverError}
      </div>
    )
    : null
);

ErrorMessage.propTypes = {
  serverError: PropTypes.string,
};

ErrorMessage.defaultProps = {
  serverError: null,
};

export default ErrorMessage;
