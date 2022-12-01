/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Input.module.css';

const Input = ({ props }) => (
  <input
    {...props}
    className={classNames.input}
    type="text"
  />
);

Input.propTypes = {
  props: PropTypes.shape(),
};

Input.defaultProps = {
  props: {},
};

export default Input;
