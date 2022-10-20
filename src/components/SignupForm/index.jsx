import axios from 'axios';
import {useContext} from 'react';
import * as Yup from 'yup'

import {AuthContext} from 'App';
import EntryForm from 'components/EntryForm';

const SignupForm = () => {
  const {setAuth} = useContext(AuthContext);
  const config = [
    {
      name: 'name',
      placeholder: 'Ваш ник',
      initialValue: '',
      schema: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле')
    },
    {
      name: 'password',
      placeholder: 'Пароль',
      type: 'password',
      schema: Yup.string()
        .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Требуются строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов')
        .required('Обязательное поле'),
    },
    {
      name: 'confirmPassword',
      placeholder: 'Повторите пароль',
      type: 'password',
      schema: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
    }

  ];

  return (
    <EntryForm
      config={config}
      onSubmit={({name, password}) => {
        // setErrorReport('');
        axios.post('/api/v1/signup', { username: name, password: password }).then((response) => {
          setTimeout(() => {
            const { token, username} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            setAuth({token, username})
          }, 500)
        }).catch((error) => {
          console.log(error)
          // setErrorReport(error.message)
        })
      }}
      buttonText='Зарегистрироваться'
    />
  )
}

export default SignupForm;
