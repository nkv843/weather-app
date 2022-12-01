import { configureStore } from '@reduxjs/toolkit';
import geoapifyApi from './geoapifyApi';
import seventimerApi from './seventimerApi';

export const middlewares = [geoapifyApi.middleware, seventimerApi.middleware];

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(middlewares),
  devTools: true,
  reducer: {
    [geoapifyApi.reducerPath]: geoapifyApi.reducer,
    [seventimerApi.reducerPath]: seventimerApi.reducer,
  },
});

export default store;
