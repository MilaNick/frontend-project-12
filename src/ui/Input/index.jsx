import './index.scss';

const Input = (props) => {
  const {type = 'text', className = '', error = '', ...nativeInputProps} = props;
  return (
    <>
      <input
        type={type}
        className={['input', className, error ? 'input-error' : ''].filter(Boolean).join(' ')}
        {...nativeInputProps}
      />
      {error && <div className='error-message'>{error}</div>}
    </>
  )
}

export default Input;
