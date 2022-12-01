import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://www.7timer.info/bin/';
const CIVIL_ENDPOINT = 'civil.php?';
const HARD_QUERY = {
  ac: 0, unit: 'metric', output: 'json', tzshift: 0,
};

const seventimerApi = createApi({
  reducerPath: 'seventimerApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (coords) => ({
        url: CIVIL_ENDPOINT,
        params: {
          lon: coords?.longitude.toFixed(1),
          lat: coords?.latitude.toFixed(1),
          ...HARD_QUERY,
        },
      }),
    }),
  }),
});

export default seventimerApi;
export const { useGetWeatherDataQuery, useLazyGetWeatherDataQuery } = seventimerApi;
