import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Door from 'assets/images/door.jpg';
import LoginForm from 'components/LoginForm';

import './index.scss';

function Login() {
  const { t } = useTranslation();
  return (
    <div className="card-wrap">
      <div className="card shadow">
        <div className="card__wrapper">
          <div className="card__image">
            <img src={Door} alt="" />
          </div>
          <div className="card__wrap">
            <h1 className="card__title">{t('login')}</h1>
            <LoginForm />
          </div>
        </div>
        <div className="card__footer">
          <span>{t('No account?')}</span>
          <Link to="/signup" className="card__link">{t('registration')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
