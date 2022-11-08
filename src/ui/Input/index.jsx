import cn from 'classnames';
import React from 'react';

import Report from 'components/Report';

import './index.scss';

function Input(props) {
  const { type = 'text', error = '', ...nativeInputProps } = props;
  const classes = cn({
    input: true,
    'input--error': error,
  });

  return (
    <>
      {nativeInputProps.placeholder
        && (
        <label className="hidden" htmlFor={`input-${nativeInputProps.name}`}>
          {nativeInputProps.placeholder}
        </label>
        )}
      <input
        type={type}
        id={`input-${nativeInputProps.name}`}
        className={classes}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...nativeInputProps}
      />
      {error && <Report type="error">{error}</Report>}
    </>
  );
}

export default Input;
