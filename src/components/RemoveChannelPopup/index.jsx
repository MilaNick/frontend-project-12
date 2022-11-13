import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { socket } from 'init';

import { closePopup } from 'slices/activePopupSlice';
import Button from 'ui/Button';
import Popup from 'ui/Popup';

const RemoveChannelPopup = ({ id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const notify = (e) => {
    e.preventDefault();
    toast.info(t('Channel removed'), {
      icon: '🌠',
    });
  };
  const handleRemove = (e) => {
    socket.emit('removeChannel', { id }, () => {
      notify(e);
      dispatch(closePopup());
    });
  };

  return (
    <Popup title={t('Remove channel')} close={() => dispatch(closePopup())}>
      <div className="wrapper">
        <div className="popup__text">{t('Are you sure?')}</div>
        <Button size="lg" top="lg" left onClick={() => dispatch(closePopup())}>{t('cansel')}</Button>
        <Button className="btn-danger" size="lg" top="lg" left onClick={handleRemove}>{t('remove')}</Button>
      </div>
    </Popup>
  );
};

export default RemoveChannelPopup;
