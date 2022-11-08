import cn from 'classnames';
import React from 'react';

import Report from 'components/Report';

import './index.scss';

function Textarea(props) {
  const { error = '', ...nativeProps } = props;
  const classes = cn({
    textarea: true,
    'textarea--error': error,
  });
  return (
    <>
      <textarea
        className={classes}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...nativeProps}
      />
      {error && <Report type="error">{error}</Report>}
    </>
  );
}

export default Textarea;
