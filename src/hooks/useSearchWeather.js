import { useEffect, useState } from 'react';
import { useLazyGetDataByNameQuery } from '../common/store/geoapifyApi';
import { useGetWeatherDataQuery } from '../common/store/seventimerApi';
import prettifyWeatherData from '../common/utils/prettifyWeatherData';

const useSearchWeather = () => {
  const [weathers, setWeather] = useState([]);

  const [getDataByName, {
    data: localData,
    isFetching: isFetchingGeoapify,
    error: errorGeoapify,
  }] = useLazyGetDataByNameQuery();

  const {
    data: weatherData,
    isFetching: isFetchingSeventimer,
    error: errorSeventimer,
  } = useGetWeatherDataQuery(localData?.coords, { skip: !localData?.address });

  useEffect(() => {
    if (!weatherData) return;
    const newWeather = {
      ...weatherData,
      id: Date.now(),
      address: localData?.address,
      timezone: localData?.timezone,
    };
    setWeather((prevState) => [prettifyWeatherData(newWeather), ...prevState]);
  }, [weatherData]);

  return [getDataByName, {
    errors: JSON.stringify(errorGeoapify) || JSON.stringify(errorSeventimer) || localData?.error,
    data: weathers,
    isFetching: isFetchingGeoapify || isFetchingSeventimer,
  }];
};

export default useSearchWeather;
