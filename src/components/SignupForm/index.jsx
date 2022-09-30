import * as Yup from 'yup'
import EntryForm from "components/EntryForm";

const SignupForm = () => {
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
      type: "password",
      schema: Yup.string()
        .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Требуются строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов')
        .required('Обязательное поле'),
    },
    {
      name: 'confirmPassword',
      placeholder: 'Повторите пароль',
      type: "password",
      schema: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
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

export default SignupForm;
