import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './index.scss';

function DropdownMenu(props) {
  const { children, items } = props;
  return (
    <Tippy
      interactive
      maxWidth={180}
      placement="right-start"
      arrow={false}
      zIndex={5}
      offset={[0, 1]}
      className="dropdown-menu"
      content={(
        <div className="dropdown-menu-content">
          { items.map((item) => {
            const { label, onClick } = item;
            return (
              <div
                key={label}
                className="dropdown-menu-content__item"
                onClick={onClick}
                role="button"
                tabIndex="0"
              >
                {label}
              </div>
            );
          })}
        </div>
      )}
      trigger="click"
    >
      {children}
    </Tippy>
  );
}

export default DropdownMenu;
