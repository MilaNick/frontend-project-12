import './index.scss';
import Message from "components/Message";

const Input = (props) => {
  const {type = 'text', className = '', error = '', ...nativeInputProps} = props;
  return (
    <>
      <input
        type={type}
        className={['input', className, error ? 'input--error' : ''].filter(Boolean).join(' ')}
        {...nativeInputProps}
      />
      {error && <Message type='error'>{error}</Message>}
    </>
  )
}

export default Input;
