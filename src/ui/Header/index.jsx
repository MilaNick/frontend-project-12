import {Link} from "react-router-dom";

import Nav from "ui/Nav";
import Button from "ui/Button";

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
      <Button size='sm' top='sm'>Выйти</Button>
    </header>
  );
}

export default Header;
