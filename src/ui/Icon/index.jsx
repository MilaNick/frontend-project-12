import React from 'react';
import { ReactComponent as ArrowDown } from 'assets/images/svg/arrow-down.svg';
import { ReactComponent as ArrowRight } from 'assets/images/svg/arrow-right.svg';
import { ReactComponent as Close } from 'assets/images/svg/close.svg';
import { ReactComponent as Plus } from 'assets/images/svg/plus.svg';

import './index.scss';

const icons = {
  ArrowDown, ArrowRight, Close, Plus,
};

function Icon({ icon }) {
  const ConcreteIcon = icons[icon];

  return (
    <ConcreteIcon className="icon" />
  );
}

export default Icon;
