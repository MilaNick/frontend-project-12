import cn from 'classnames';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Button(
  {
    children,
    type = 'button',
    className = '',
    href = '',
    onClick,
    fluid = false,
    size,
    light,
    top,
    left,
    relative,
    absolute,
  },
  forwardedRef,
) {
  const classes = cn({
    btn: true,
    [className]: Boolean(className),
    [`btn--size-${size}`]: Boolean(size),
    [`btn--top-${top}`]: Boolean(top),
    'btn--left': left,
    'btn--fluid': fluid,
    'btn--light': light,
    'btn--absolute': absolute,
    'btn--relative': relative,
  });
  if (href) {
    return <Link ref={forwardedRef} to={href} className={classes}>{children}</Link>;
  }

  return (
    <button ref={forwardedRef} onClick={onClick} type={type === 'button' ? 'button' : 'submit'} className={classes}>{children}</button>
  );
}

export default forwardRef(Button);
