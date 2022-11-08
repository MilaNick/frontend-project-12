import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AuthContext } from 'App';
import Button from 'ui/Button';

import './index.scss';

function Header() {
  const { auth, logout } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo__one">🚀 Hexlet Chat</Link>
      </div>
      { auth && <Button onClick={logout} size="md" top="sm">{ t('exit') }</Button> }
    </header>
  );
}

export default Header;
