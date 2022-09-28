import {NavLink} from "react-router-dom";

import './index.scss';

const links = [
  {link: '/', label: 'Главная'},
  {link: '/login', label: 'Регистрация/ Вход'},
  {link: '*', label: '404'},
];

const Header = () => {
  return (
    <>
      <nav>
        {links.map(({link, label}) => <NavLink key={link} to={link} className="nav__item">{label}</NavLink>)}
      </nav>
    </>
  );
}

export default Header;
