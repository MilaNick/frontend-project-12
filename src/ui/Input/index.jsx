import {useEffect, useRef} from "react";

import Report from "components/Report";

import './index.scss';

const Input = (props) => {
  const emailInputRef = useRef(null);
  const {type = 'text', className = '', error = '', ...nativeInputProps} = props;
  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <>
      <input
        type={type}
        className={['input', className, error ? 'input--error' : ''].filter(Boolean).join(' ')}
        {...nativeInputProps}
        ref={emailInputRef}
      />
      {error && <Report type='error'>{error}</Report>}
    </>
  )
}

export default Input;
