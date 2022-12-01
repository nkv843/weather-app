import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { geoapifyReturn, seventimerReturn } from '../__fixtures__/fixtures';
import useSearchWeather from '../useSearchWeather';
import store from '../../common/store/store';

describe('useSearchWeather', () => {
  describe('Gibberish input handling', () => {
    const request = 'asadadd';
    it('should indicate when an empty array comes from the geoapify ', async () => {
      const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
      const { result } = renderHook(() => useSearchWeather(), { wrapper });
      const [getDataByName] = result.current;
      fetch.mockResponseOnce(JSON.stringify({ features: [] }));
      act(() => {
        getDataByName(request);
      });
      await waitFor(() => {
        expect(result.current[1].errors).toBe('We can\'t find this settlement, try again');
      });
    });

    it('should not call seventimer while empty array comes from the geoapify ', async () => {
      const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
      const { result } = renderHook(() => useSearchWeather(), { wrapper });
      const [getDataByName] = result.current;
      fetch.mockResponseOnce(JSON.stringify({ features: [] }));
      act(() => {
        getDataByName(request);
      });
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Correct input handling', () => {
    const request = 'Сhisinau';
    it('should call seventimer client with the proper arguments', async () => {
      const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
      const { result } = renderHook(() => useSearchWeather(), { wrapper });
      const [getDataByName] = result.current;
      fetch.mockResponseOnce(JSON.stringify(geoapifyReturn));
      act(() => {
        getDataByName(request);
        fetch.mockResponseOnce(JSON.stringify(seventimerReturn));
      });
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(2);
      });
    });

    it('should set new weathers to weathers list', async () => {
      const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
      const { result } = renderHook(() => useSearchWeather(), { wrapper });
      const [getDataByName] = result.current;
      fetch.mockResponseOnce(JSON.stringify(geoapifyReturn));
      act(() => {
        getDataByName(request);
        fetch.mockResponseOnce(JSON.stringify(seventimerReturn));
      });
      await waitFor(() => {
        expect(result.current[1].data.length).toEqual(1);
      });
      fetch.mockResponseOnce(JSON.stringify(geoapifyReturn));
    });
  });
});
