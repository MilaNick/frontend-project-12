import {useFormik} from "formik";
import * as Yup from 'yup'

const SignupForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле'),
    password: Yup.string()
      .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Требуются строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов')
      .required('Обязательное поле'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: values => console.log(JSON.stringify(values, null, 2))
  })
  return (
    <form className="card__form" onSubmit={formik.handleSubmit}>
      <input name="name"
             type="text"
             className={formik.errors.name && formik.touched.name ? 'input-error' : ''}
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             placeholder="Ваш ник"
      />
      {formik.errors.name && formik.touched.name ? <div className='error-message'>{formik.errors.name}</div> : null}
      <input name="password"
             type="password"
             className={formik.errors.password && formik.touched.password ? 'input-error' : ''}
             value={formik.values.password}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             placeholder="Пароль"
      />
      {formik.errors.password && formik.touched.password ? <div className='error-message'>{formik.errors.password}</div> : null}
      <input name="confirmPassword"
             type="password"
             className={formik.errors.confirmPassword && formik.touched.confirmPassword ? 'input-error' : ''}
             value={formik.values.confirmPassword}
             onChange={formik.handleChange}
             placeholder="Повторите пароль"
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className='error-message'>{formik.errors.confirmPassword}</div> : null}
      <button type="submit" className="btn">Зарегистрироваться</button>
    </form>
  )
}

export default SignupForm;
