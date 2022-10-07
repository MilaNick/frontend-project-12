import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import EntryForm from "components/EntryForm";
// import {useEffect} from "react";


// import axios from "axios";

const LoginForm = () => {
  const config = [
    {
      name: 'name',
      placeholder: 'Ваш ник',
      schema: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле')
    },
    {
      name: 'password',
      placeholder: 'Пароль',
      type: "password",
      schema: Yup.string().required('Обязательное поле')
    }
  ]
  const navigate = useNavigate();

  return (
    <EntryForm
      config={config}
      onSubmit={({name, password}) => {
        axios.post('/api/v1/login', {username: name, password: password}).then((response) => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token);
          console.log('отлично')
          setTimeout(() => {
            navigate("/");
          }, 1500)
        }).catch((error) => {
          console.log('ошибка', error)
        });
      }}
      buttonText='Войти'
    />
  )
}

export default LoginForm;
