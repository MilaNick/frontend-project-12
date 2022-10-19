import Report from "components/Report";

import './index.scss';

const Textarea = (props) => {
  const {className = '', error = '', ...nativeProps} = props;
  return (
    <>
      <textarea
        className={['textarea', className, error ? 'textarea--error' : ''].filter(Boolean).join(' ')}
        {...nativeProps}
      />
      {error && <Report type='error'>{error}</Report>}
    </>
  )
}

export default Textarea;
