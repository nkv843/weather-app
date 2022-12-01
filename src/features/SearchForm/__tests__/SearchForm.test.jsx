/* eslint-disable react/jsx-boolean-value */
import { fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import SearchForm from '../SearchForm';
import renderWithProviders from '../../../common/utils/customRender';

const correctInput = 'Some City';
describe('SearchForm', () => {
  describe('Incorrect input handling', () => {
    it('should show error message when request only consist of spaces', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: '   ' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(getByTestId('validationFail')).toBeInTheDocument();
      });
    });
    it('should show error message when request is shorted than 2 chars', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: 'q' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(getByTestId('validationFail')).toBeInTheDocument();
      });
    });
    it('should show error message when request is empty string', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: '' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(getByTestId('validationFail')).toBeInTheDocument();
      });
    });
    it('should show error message when request only consist of numbers', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: '123131' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(getByTestId('validationFail')).toBeInTheDocument();
      });
    });
    it('should not to call function on submit', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: '   ' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(mockHandleClick).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe('Correct input handling', () => {
    it('should handle submit with correct value of request ', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: correctInput } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(mockHandleClick).toHaveBeenCalledWith(correctInput);
      });
    });
    it('should reset validation errors after correction of input', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={false} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmit');
      act(() => {
        fireEvent.change(input, { target: { value: '   ' } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(getByTestId('validationFail')).toBeInTheDocument();
      });
      act(() => {
        fireEvent.change(input, { target: { value: correctInput } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(() => getByTestId('validationFail')).toThrow();
      });
    });
    it('should disabel submit button while liadong is true', async () => {
      const mockHandleClick = jest.fn();
      const { getByTestId } = renderWithProviders(
        <SearchForm loading={true} onSearch={mockHandleClick} />,
      );
      const input = getByTestId('mainInput');
      const btn = getByTestId('searchSubmitdisabled');
      act(() => {
        fireEvent.change(input, { target: { value: correctInput } });
      });
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(mockHandleClick).toHaveBeenCalledTimes(0);
      });
    });
  });
});
