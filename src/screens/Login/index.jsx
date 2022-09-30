import {Link} from "react-router-dom";

import LoginForm from "components/LoginForm";
import Door from 'assets/images/door.jpg';

import './index.scss';

const Login = () => {
  return (
    <div className="card shadow">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={Door} alt=""/>
        </div>
        <div className="card__wrap">
          <h1 className="card__title">Войти</h1>
          <LoginForm/>
        </div>
      </div>
      <div className="card__footer">
        <span>Нет аккаунта? </span>
        <Link to='/signup' className="card__link">Регистрация</Link>
      </div>
    </div>
  )
}

export default Login;
