import * as Yup from 'yup';

import EntryForm from "components/EntryForm";

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
  return (
    <EntryForm
      config={config}
      onSubmit={(values) => console.log('Вы вошли с данными', values)}
      buttonText='Войти'
    />
  )
}

export default LoginForm;
