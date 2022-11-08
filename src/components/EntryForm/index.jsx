import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';

function EntryForm(props) {
  const {
    config, onSubmit, buttonText, errorMessage = '',
  } = props;
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape(
    config.reduce((acc, field) => ({ ...acc, [field.name]: field.schema }), {}),
  );
  const formik = useFormik({
    initialValues: config.reduce((acc, field) => ({ ...acc, [field.name]: field.initialValue ?? '' }), {}),
    validationSchema,
    onSubmit,
  });

  return (
    <Form
      className="card__form"
      onSubmit={formik.handleSubmit}
    >
      {config.map(({
        name, ...rest
      }) => (
        <Input
          key={name}
          error={formik.errors[name] && formik.touched[name] ? formik.errors[name] : ''}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...formik.getFieldProps(name)}
        />
      ))}
      <Button type="submit" fluid size="lg" top="lg">{buttonText}</Button>
      {errorMessage && <Report type="error">{t('Request failed with status code 401')}</Report>}
    </Form>
  );
}

export default EntryForm;
