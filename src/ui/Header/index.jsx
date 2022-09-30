import {Link} from "react-router-dom";

import Nav from "ui/Nav";

import './index.scss';

const links = [
  {href: '/', label: 'Главная'},
  {href: '/login', label: 'Вход'},
  {href: '/signup', label: 'Регистрация'},
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo__one">Mila🚀Chat</Link>
      </div>
      <Nav links={links} />
      <button>Выйти</button>
    </header>
  );
}

export default Header;
