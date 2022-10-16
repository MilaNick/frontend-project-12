import {useContext, useState} from "react";
import axios from "axios";
import * as Yup from 'yup';

import {AuthContext} from "App";
import EntryForm from "components/EntryForm";

const LoginForm = () => {
  const [errorReport, setErrorReport] = useState('');
  const {setAuth} = useContext(AuthContext);
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

  return (
    <EntryForm
      config={config}
      onSubmit={({name, password}) => {
        setErrorReport('');
        axios.post('/api/v1/login', {username: name, password: password}).then((response) => {
          setTimeout(() => {
            const { token ,username} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            setAuth({token, username})
          }, 500)
        }).catch((error) => {
          setErrorReport(error.message)
        });
      }}
      buttonText='Войти'
      errorReport={errorReport}
    />
  )
}

export default LoginForm;
