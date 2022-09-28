import {NavLink} from "react-router-dom";

import './index.scss';

export const links = [
  {link: '/', label: 'Главная'},
  {link: '/login', label: 'Регистрация/ Вход'},
  {link: '*', label: '404'},
];

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <nav>
            {links.map(({link, label}) => <NavLink key={link} to={link} className="nav__item">{label}</NavLink>)}
          </nav>
        </Col>
        <Col><Button variant="outline-light" size="lg">Выйти</Button>{' '}</Col>
      </Row>
    </Container>
  );
}

export default Header;
