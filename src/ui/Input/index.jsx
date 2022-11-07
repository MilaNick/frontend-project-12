import cn from 'classnames';
import Report from 'components/Report';

import './index.scss';

const Input = (props) => {
  const {type = 'text', error = '', ...nativeInputProps} = props;
  const classes = cn({
    input: true,
    'input--error': error,
  })

  return (
    <>
        {nativeInputProps.placeholder && <label htmlFor={`input-${nativeInputProps.name}`}>{nativeInputProps.placeholder}</label>}
        <input
        type={type}
        id={`input-${nativeInputProps.name}`}
        className={classes}
        {...nativeInputProps}
      />
      {error && <Report type='error'>{error}</Report>}
    </>
  )
}

export default Input;
