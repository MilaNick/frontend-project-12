import {useFormik} from "formik";
import * as Yup from 'yup';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
      name: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле'),
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => console.log(JSON.stringify(values, null, 2)),
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
      <button type="submit" className="btn">Войти</button>
    </form>
  )
}

export default LoginForm;
