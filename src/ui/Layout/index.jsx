import { Outlet } from 'react-router-dom';

import Header from 'ui/Header';
import Footer from 'ui/Footer';

import './index.scss';

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
