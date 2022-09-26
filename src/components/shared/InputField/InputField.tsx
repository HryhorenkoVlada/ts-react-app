import React, { FunctionComponent } from 'react';
import { ErrorMessage, FieldProps } from 'formik';

import './InputField.scss';

interface FormValues {
  label?: string;
  type?: string;
  disabled?: boolean;
}

const InputField: FunctionComponent<FormValues & FieldProps> = ({
  field,
  form: { touched, errors },
  type = 'text',
  label = '',
  disabled = false,
  ...props
}) => {
  const invalid = touched[field.name] && errors[field.name];

  return (
    <div className="text-input">
      <input
        {...field}
        {...props}
        type={type}
        className={`text-input__input ${
          invalid ? 'text-input__input_invalid' : ''
        }`}
        disabled={disabled}
      />
      <label
        htmlFor={field.name}
        className={`text-input__label ${
          invalid ? 'text-input__label_invalid' : ''
        }`}
      >
        {invalid ? <ErrorMessage name={field.name} /> : label}
      </label>
    </div>
  );
};

export default InputField;
