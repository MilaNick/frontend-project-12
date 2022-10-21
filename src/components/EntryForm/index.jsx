import {useFormik} from 'formik';
import * as Yup from 'yup';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';

const EntryForm = (props) => {
  const {config, onSubmit, buttonText, errorMessage = ''} = props;

  const validationSchema = Yup.object().shape(
    config.reduce((acc, field) => ({...acc, [field.name]: field.schema}), {})
  )
  const formik = useFormik({
    initialValues: config.reduce((acc, field) => ({...acc, [field.name]: field.initialValue ?? ''}), {}),
    validationSchema,
    onSubmit,
  })

  return (
    <>
      <Form
        className='card__form'
        onSubmit={formik.handleSubmit}>
        {/* eslint-disable-next-line no-unused-vars */}
        {config.map(({name, initialValue, schema, ...rest}) => (
          <Input
            key={name}
            error={formik.errors[name] && formik.touched[name] ? formik.errors[name] : ''}
            {...rest}
            {...formik.getFieldProps(name)}
          />
        ))}
        <Button type='submit' fluid size='lg' top='lg'>{buttonText}</Button>
        {errorMessage && <Report type='error'>{errorMessage}</Report>}
      </Form>
    </>
  )
}

export default EntryForm;
