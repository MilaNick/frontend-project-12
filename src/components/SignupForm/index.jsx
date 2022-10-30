import axios from 'axios';
import {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup'

import {AuthContext} from 'App';
import EntryForm from 'components/EntryForm';

const SignupForm = () => {
  const [errorReport, setErrorReport] = useState('');
  const {setAuth} = useContext(AuthContext);
  const {t} = useTranslation();

  const config = [
    {
      name: 'name',
      placeholder: t('username'),
      initialValue: '',
      schema: Yup
          .string()
          .min(3, t('Minimum number of characters'))
          .max(20, t('Maximum number of characters'))
          .required(t('required'))
    },
    {
      name: 'password',
      placeholder: t('password'),
      type: 'password',
      schema: Yup
          .string()
          .matches(/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, t('Password requirements'))
          .required(t('required')),
    },
    {
      name: 'confirmPassword',
      placeholder: t('Repeat password'),
      type: 'password',
      schema: Yup
          .string()
          .oneOf([Yup.ref('password')], t('Passwords don\'t match'))
          .required(t('required')),
    }

  ];

  return (
    <EntryForm
      config={config}
      onSubmit={({name, password}) => {
        setErrorReport('');
        axios.post('/api/v1/signup', { username: name, password: password }).then((response) => {
          setTimeout(() => {
            const { token, username} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            setAuth({token, username})
          }, 500)
        }).catch((error) => {
          setErrorReport(error.message)
        })
      }}
      buttonText={t('signup')}
      errorMessage={errorReport}
    />
  )
}

export default SignupForm;
