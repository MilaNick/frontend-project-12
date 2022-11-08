import React from 'react';
import { useTranslation } from 'react-i18next';
import Skull from 'assets/images/skull.jpg';

import './index.scss';

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="not-found-page">
      <span className="not-found-page__title">{t('404')}</span>
      <img src={Skull} alt="not-found-page" className="not-found-page__pic" />
    </div>
  );
}

export default NotFoundPage;
