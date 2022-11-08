import React from 'react';

import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';

function Popup({ children, close, title }) {
  return (
    <div className="popup popup--shown" onClick={close} role="button"
         tabIndex="0">
      <div className="popup__content" onClick={(e) => e.stopPropagation()} role="button"
           tabIndex="0">
        <div className="wrap">
          <h3>{title}</h3>
          <Button size="sm" onClick={close}><Icon icon="Close" /></Button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Popup;
