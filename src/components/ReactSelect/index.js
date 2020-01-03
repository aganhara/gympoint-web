import React, { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

export default function ReactSelect({
  name,
  label,
  options,
  defaultValueSelected,
  callback,
  ...rest
}) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue && defaultValue);
  const ref = useRef(null);

  useEffect(() => setValue(defaultValueSelected), [defaultValueSelected]);

  function parseSelectValue(selectRef) {
    return Number.isNaN(selectRef.state.value)
      ? selectRef.state.value.value
      : selectRef.state.value;
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
    }, [ref.current, fieldName]); // eslint-disable-line

  function handleChange(e) {
    setValue(e);
    if (callback) {
      callback(e);
    }
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        className="react-select-container"
        name={fieldName}
        aria-label={fieldName}
        options={options}
        defaultValue={defaultValueSelected}
        ref={ref}
        getOptionValue={option => option.value}
        getOptionLabel={option => option.label}
        value={value}
        onChange={handleChange}
        placeholder="select"
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  defaultValueSelected: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

ReactSelect.defaultProps = {
  label: null,
};
