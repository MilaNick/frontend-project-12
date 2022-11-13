import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from 'App';
import Button from 'ui/Button';

import './index.scss';

function Layout() {
  const { auth, logout } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo__one">🚀 Hexlet Chat</Link>
        </div>
        { auth && <Button onClick={logout} size="md" top="sm">{ t('exit') }</Button> }
      </header>
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">
        <div className="created-by">
          <span>created by</span>
          <a
            href="https://github.com/MilaNick/frontend-project-12"
            target="_blank"
            rel="noreferrer"
          >
            MilaNick
          </a>
        </div>
        {auth && <Button onClick={logout} size="md" top="sm">{t('exit')}</Button>}
      </footer>
    </div>
  );
}

export default Layout;
