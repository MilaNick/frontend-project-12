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
        {nativeInputProps.placeholder && <label htmlFor={name} hidden>{nativeInputProps.placeholder}</label>}
        <input
        name={nativeInputProps.name}
        type={type}
        className={classes}
        {...nativeInputProps}
      />
      {error && <Report type='error'>{error}</Report>}
    </>
  )
}

export default Input;
