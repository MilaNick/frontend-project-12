import React from 'react';

import './index.scss';

function Form({ children, className, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>{children}</form>
  );
}

export default Form;
