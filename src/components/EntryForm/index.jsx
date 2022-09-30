import {useFormik} from "formik";
import * as Yup from 'yup';

import Input from "ui/Input";

const EntryForm = (props) => {
  const {config, onSubmit, buttonText} = props

  const validationSchema = Yup.object().shape(
    config.reduce((acc, field) => ({ ...acc, [field.name]: field.schema}), {})
  )
  const formik = useFormik({
    initialValues: config.reduce((acc, field) => ({ ...acc, [field.name]: field.initialValue ?? ''}), {}),
    validationSchema,
    onSubmit,
  })

  return (
    <form className="card__form" onSubmit={formik.handleSubmit}>
      {/* eslint-disable-next-line no-unused-vars */}
      {config.map(({ name, initialValue, schema, ...rest }) => (
        <Input
          key={name}
          error={formik.errors[name] && formik.touched[name] ? formik.errors[name] : ''}
          {...rest}
          {...formik.getFieldProps(name)}
        />
      ))}
      <button type="submit" className="btn">{buttonText}</button>
    </form>
  )
}

export default EntryForm;
