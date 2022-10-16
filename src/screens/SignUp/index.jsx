import {Link} from "react-router-dom";

import Chair from "assets/images/chair.jpg";
import SignupForm from "components/SignupForm";

import './index.scss';

const SignUp = () => {
  return (
    <div className="card shadow">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={Chair} alt=""/>
        </div>
        <div className="card__wrap">
          <h1 className="card__title">Регистрация</h1>
          <SignupForm/>
        </div>
      </div>
      <div className="card__footer">
        <span>Есть аккаунт? </span>
        <Link to='/login' className="card__link">Входи</Link>
      </div>
    </div>
  )
}

export default SignUp;
