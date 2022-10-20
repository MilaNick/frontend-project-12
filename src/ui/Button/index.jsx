import cn from 'classnames';
import {Link} from 'react-router-dom';

import './index.scss';

const Button = ({children, type = 'button', className = '', href = '', onClick, fluid = false, size, top, left, absolute = false}) => {
  const classes = cn({
    btn: true,
    [className]: Boolean(className),
    [`btn--size-${size}`]: Boolean(size),
    [`btn--top-${top}`]: Boolean(top),
    'btn--left': left,
    'btn--fluid': fluid,
    'btn--absolute': absolute,
  })

  if (href) {
    return <Link to={href} type={type} className={classes}>{children}</Link>
  }

  return(
    <button onClick={onClick} type={type} className={classes}>{children}</button>
  )
}

export default Button;
