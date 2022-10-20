import cn from 'classnames';

import './index.scss';

const Popup = ({children, shown, setShown}) => {
  const classes = cn({
    'popup--shown': shown,
  })
  return (
    <div className={`popup ${classes}`} onClick={() => setShown(false)}>
      <div className={`popup__content ${classes}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Popup;
