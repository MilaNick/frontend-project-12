import {useContext} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "App";
import Button from "ui/Button";

import './index.scss';

const Header = () => {
  const { logout} = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo__one">Hexlet🚀Chat</Link>
      </div>
      <Button onClick={logout} size='sm' top='sm'>Выйти</Button>
    </header>
  );
}

export default Header;
