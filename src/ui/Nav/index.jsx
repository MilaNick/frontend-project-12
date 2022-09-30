import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

import './index.scss';

const Nav = ({ links }) => {
  return (
    <nav className="nav">
      {links.map(({href, label}) => <NavLink key={href} to={href} className="nav__item">{label}</NavLink>)}
    </nav>
  )
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Nav;
