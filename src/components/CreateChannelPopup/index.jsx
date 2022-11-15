import { useFormik } from 'formik';
import filter from 'leo-profanity';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { socket } from 'init';

import Report from 'components/Report';
import { closePopup } from 'slices/activePopupSlice';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';

function CreateChannelPopup() {
  const channelsNames = useSelector((state) => state
    .channelsReducer.channels.map(channel => channel.name));
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .required(t('required'))
      .lowercase()
      .notOneOf(channelsNames.map(channelName => channelName.toLowerCase()), t('Not unique name'))
      .test('cannot contain profanity', t('The channel name cannot contain profanity'), (value) => !filter.check(value))
  });
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: (values) => {
      socket.emit('newChannel', { name: values.name }, () => {
        toast.info(t('Channel added'), {
          icon: '🌟',
        });
        dispatch(closePopup());
      });
    }
  })
  useEffect(() => {
    if (formik.errors.name) {
      toast.error(formik.errors.name, {
        icon: '👽',
      });
    }
  }, [formik.errors.name])

  return (
    <Popup close={() => dispatch(closePopup())} title={t('Add channel')}>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          autoFocus
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder={t('Enter the channel name')}
        />
        {formik.errors.name && <Report type="error">{formik.errors.name}</Report>}
        <div className="wrapper">
          <Button size="lg" top="lg" left onClick={() => dispatch(closePopup())}>{t('cansel')}</Button>
          <Button type="submit" size="lg" top="lg" left>{t('send')}</Button>
        </div>
      </Form>
    </Popup>
  );
}

export default CreateChannelPopup;
