import cn from 'classnames';

import './index.scss';

const Report = ({ children, type }) => {
  const classes = cn({
    report: true,
    "report__error": type === 'error',
});

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Report;
