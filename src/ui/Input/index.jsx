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
    <label>
        {nativeInputProps.placeholder && <span>{nativeInputProps.placeholder}</span>}
        <input
        type={type}
        className={classes}
        {...nativeInputProps}
      />
      {error && <Report type='error'>{error}</Report>}
    </label>
  )
}

export default Input;
