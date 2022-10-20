import {NavLink} from 'react-router-dom';

import './index.scss';

const Nav = ({ links }) => {
  return (
    <nav className='nav'>
      {links.map(({href, label}) => <NavLink key={href} to={href} className='nav__item'>{label}</NavLink>)}
    </nav>
  )
}

export default Nav;
