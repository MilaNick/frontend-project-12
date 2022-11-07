import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';

const Popup = ({ children, close, title }) => {
  return (
    <div className="popup popup--shown" onClick={close}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <div className="wrap">
          <h3>{title}</h3>
          <Button size="sm" onClick={close}><Icon icon="Close"/></Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
