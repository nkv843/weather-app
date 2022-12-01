import React from 'react';
import ErrorMessage from '../ErrorMessage';
import renderWithProviders from '../../../common/utils/customRender';

describe('ErrorMessage', () => {
  it('should match snapshot', () => {
    const { baseElement } = renderWithProviders(<ErrorMessage serverError="Error: oops" />);
    expect(baseElement).toMatchSnapshot();
  });
});
