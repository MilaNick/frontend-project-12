import './index.scss';
import Chair from "../../assets/images/chair.jpg";
import {Link} from "react-router-dom";

const SignUp = () => {
  return(
    <>
      <div className="card shadow">
        <div className="card__wrapper">
          <div className="card__image">
            <img src={Chair} alt=""/>
          </div>
          <div className="card__wrap">
            <h1 className="card__title">Регистрация</h1>
            <form className="card__form" action="">
              <input name="username" required="" placeholder="Ваш ник"
                     id="username"
                     type="text"/>
              <input name="password" required="" placeholder="Пароль"
                     id="password" className="form__control"
                     type="password"/>
              <input name="repassword" required="" placeholder="Повторите пароль"
                     id="repassword" className="form__control"
                     type="password"/>
              <button type="submit" className="btn">Зарегистрироваться</button>
            </form>
          </div>
        </div>

        <div className="card__footer">
          <span>Есть аккаунт? </span>
          <Link to='/login' className="card__link">Входи</Link>
        </div>

      </div>
    </>
  )
}

export default SignUp;
