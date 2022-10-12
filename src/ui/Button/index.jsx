import cn from 'classnames';

import './index.scss';

import {Link} from "react-router-dom";

const Button = ({children, type = 'button', className = '', href = '', onClick, fluid = false, size, top}) => {
  const classes = cn({
    btn: true,
    [className]: Boolean(className),
    [`btn--size-${size}`]: Boolean(size),
    [`btn--top-${top}`]: Boolean(top),
    'btn--fluid': fluid,
  })

  if (href) {
    return <Link to={href} type={type} className={classes}>{children}</Link>
  }

  return(
    <button onClick={onClick} type={type} className={classes}>{children}</button>
  )
}

export default Button;
