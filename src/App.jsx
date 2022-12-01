import React from 'react';
import SearchForm from './features/SearchForm';
import PageHeader from './components/PageHeader';
import WeatherList from './features/WeatherList';
import classNames from './App.module.css';
import ErrorMessage from './components/ErrorMessage';
import useSearchWeather from './hooks/useSearchWeather';

const App = () => {
  const [getDataByName, {
    isFetching, errors, data: weathers,
  }] = useSearchWeather();

  return (
    <div className={classNames.app}>
      <PageHeader loading={isFetching}>
        <SearchForm loading={isFetching} onSearch={getDataByName} />
      </PageHeader>
      <ErrorMessage serverError={errors} />
      {Boolean(weathers?.length) && <WeatherList weathers={weathers} />}
      {!weathers?.length && <h1 className={classNames.title}>Let&apos;s start explore</h1>}
    </div>
  );
};

export default App;
