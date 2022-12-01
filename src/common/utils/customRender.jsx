/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { middlewares } from '../store/store';
import geoapifyApi from '../store/geoapifyApi';
import seventimerApi from '../store/seventimerApi';

const appStore = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(middlewares),
  devTools: true,
  reducer: {
    [geoapifyApi.reducerPath]: geoapifyApi.reducer,
    [seventimerApi.reducerPath]: seventimerApi.reducer,
  },
});

const Wrapper = ({ children }) => <Provider store={appStore}>{children}</Provider>;

const renderWithProviders = (ui, {
  store = appStore,
  ...renderOptions
} = {}) => ({ store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) });

Wrapper.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default renderWithProviders;
