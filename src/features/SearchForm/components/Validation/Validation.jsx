/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ClassNames from './Validation.module.css';

const Validation = ({ error, props }) => (
  <span {...props} className={ClassNames.validationFail}>{error}</span>
);

Validation.propTypes = {
  props: shape(),
  error: PropTypes.string.isRequired,
};
Validation.defaultProps = {
  props: {},
};

export default Validation;
