import React from "react";
import {useTranslation} from "react-i18next";

function ErrorDisplay({ error, resetError }) {
  const { t } = useTranslation();
  return (
    <div>
      {t('Something went wrong')}:
      {' '}
      {error.message}
      <br />
      <button type="button" onClick={() => resetError()}>Сброс</button>
    </div>
  );
}

export default ErrorDisplay;