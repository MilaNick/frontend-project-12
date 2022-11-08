import axios from 'axios';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { AuthContext } from 'App';
import EntryForm from 'components/EntryForm';

function LoginForm() {
  const [errorReport, setErrorReport] = useState('');
  const { setAuth } = useContext(AuthContext);
  const { t } = useTranslation();

  const config = [
    {
      name: 'name',
      placeholder: t('Username login'),
      schema: Yup.string().min(3, t('Minimum number of characters')).required(t('required')),
    },
    {
      name: 'password',
      placeholder: t('password'),
      type: 'password',
      schema: Yup.string().required(t('required')),
    },
  ];

  return (
    <EntryForm
      config={config}
      onSubmit={({ name, password }) => {
        setErrorReport('');
        axios.post('/api/v1/login', { username: name, password }).then((response) => {
          const { token, username } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          setAuth({ token, username });
        }).catch((error) => {
          setErrorReport(error.message);
        });
      }}
      buttonText={t('login')}
      errorMessage={errorReport}
    />
  );
}

export default LoginForm;
