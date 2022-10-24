import cn from 'classnames';

import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';

const Popup = ({children, shown, close, title}) => {
  const classes = cn({
    popup: true,
    'popup--shown': shown,
  })

  const classesForContent = cn({
    'popup__content': true,
    'popup--shown': shown,
  })

  return (
    <div className={classes} onClick={close}>
      <div className={classesForContent} onClick={(e) => e.stopPropagation()}>
        <div className='wrap'>
          <h3>{title}</h3>
          <Button size='sm' onClick={close}><Icon icon='Close'/></Button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Popup;
