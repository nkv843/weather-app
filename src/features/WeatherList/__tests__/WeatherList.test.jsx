import { render } from '@testing-library/react';
import React from 'react';
import WeatherList from '../WeatherList';
import weathers from '../__fixtures__/fixtures';

describe('WeatherList', () => {
  const { baseElement } = render(<WeatherList weathers={weathers} />);
  it('should match snapshot', () => {
    expect(baseElement).toMatchSnapshot();
  });
});
