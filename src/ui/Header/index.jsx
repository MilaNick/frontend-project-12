import {Link} from "react-router-dom";
import {AuthContext} from "App";
import {useContext} from "react";

import Button from "ui/Button";

import './index.scss';

const Header = () => {
  const { logout} = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo__one">Mila🚀Chat</Link>
      </div>
      <Button onClick={logout} size='sm' top='sm'>Выйти</Button>
    </header>
  );
}

export default Header;
