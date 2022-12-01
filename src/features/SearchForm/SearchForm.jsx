import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from './components/Input';
import Validation from './components/Validation';
import classNames from './SearchForm.module.css';

const schema = yup.object({
  mainInput: yup
    .string('How is it possible????')
    .required('We need something to make a search')
    .trim()
    .min(2, 'Too short request')
    .test({
      message: 'We can\'t handle phone number :)',
      test: (value) => Number.isNaN(Number(value)),
    }),
}).required();

const SearchForm = ({ loading, onSearch }) => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => onSearch(data.mainInput);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
      <div className={classNames.formContent}>
        <Input props={{
          ...register('mainInput'),
          placeholder: 'Some place',
          'data-testid': 'mainInput',
        }}
        />
        {loading
          ? <button data-testid="searchSubmitdisabled" type="submit" disabled className={classNames.submit}>In progress</button>
          : <button data-testid="searchSubmit" type="submit" className={classNames.submit}>Answer!</button>}
      </div>
      {errors.mainInput && <Validation props={{ 'data-testid': 'validationFail' }} error={errors.mainInput.message} />}
    </form>

  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchForm;
