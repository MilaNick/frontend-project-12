import cn from 'classnames';
// import i18n from 'i18next';
// import resources from 'locales/index.js';

import './index.scss';

const Report = ({children, type}) => {
  const classes = cn({
    message: true,
    'message__error': type === 'error',
  })

  // const i18nextInstance = i18n.createInstance();
  // i18nextInstance.init({
  //   lng: 'ru',
  //   debug: false,
  //   resources,
  // }).
  //   then(() => {
    return(
      <div className={classes} >
        {children}
      </div>
    )
  // })
}

export default Report;
