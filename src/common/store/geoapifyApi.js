import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// paste your key here
const API_KEY = '';
const BASE_URL = 'https://api.geoapify.com/v1/geocode/';
const COORDINATE_ENDPOINT = 'search?';

const geoapifyApi = createApi({
  reducerPath: 'geoapifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getDataByName: builder.query({
      query: (request) => ({
        url: COORDINATE_ENDPOINT,
        params: { apiKey: API_KEY, text: request },
      }),
      transformResponse: (response) => {
        const localData = response?.features[0]?.properties;
        if (!localData) return ({ error: 'We can\'t find this settlement, try again' });
        const timezone = localData.timezone.offset_STD_seconds / 3600;
        const address = `${localData.city ? `${localData.city}, ` : ''}${localData.country}`;
        const latitude = localData.lat;
        const longitude = localData.lon;
        return ({
          timezone, address, coords: { latitude, longitude },
        });
      },
    }),
  }),
});

export default geoapifyApi;
export const { useGetDataByNameQuery, useLazyGetDataByNameQuery } = geoapifyApi;
