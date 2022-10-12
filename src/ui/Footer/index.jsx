import Nav from "ui/Nav";
import Button from "ui/Button";

import './index.scss';

const links = [
  {href: '/', label: 'Главная'},
  {href: '/login', label: 'Вход'},
  {href: '/signup', label: 'Регистрация'}
];

const Footer = () => {
  return (
    <footer className="footer">
      <Nav links={links} />
      <div>created by <a href="https://github.com/MilaNick/frontend-project-12"
                                                 target="_blank" rel="noreferrer">MilaNick</a></div>
      <Button size='sm' top='sm'>Выйти</Button>
    </footer>
  )
}

export default Footer;
