import filter from 'leo-profanity';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { socket } from 'init';

import Report from 'components/Report';
import { closePopup } from 'slices/activePopupSlice';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';

function CreateChannelPopup({ onAddChannel }) {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const dispatch = useDispatch();
  const [newChannel, setNewChannel] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const notify = (e) => {
    e.preventDefault();
    toast.info(t('Channel added'), {
      icon: '🌟',
    });
  };
  const notifyError = (e, text) => {
    e.preventDefault();
    toast.error((text), {
      icon: '👽',
    });
  };
  const addChannel = (e) => {
    e.preventDefault();
    if (channels.find((channel) => channel.name.toLowerCase() === newChannel.toLowerCase())) {
      setError(t('Not unique name'));
      notifyError(e, t('Not unique name'));
      return;
    }
    if (filter.check(newChannel)) {
      setError(t('The channel name cannot contain profanity'));
      notifyError(e, t('The channel name cannot contain profanity'));
      return;
    }
    setError('');
    if (newChannel) {
      socket.emit('newChannel', { name: newChannel }, () => {
        notify(e);
      });
      onAddChannel(newChannel);
      setNewChannel('');
      dispatch(closePopup());
    } else {
      setError(t('Enter the channel name'));
      notifyError(e, t('Enter the channel name'));
    }
  };

  const handleChange = (e) => {
    setNewChannel(e.target.value);
    setError('');
  };
  return (
    <Popup close={() => dispatch(closePopup())} title={t('Add channel')}>
      <Form onSubmit={addChannel}>
        <Input
          autoFocus
          name="new-channel"
          placeholder={t('Enter the channel name')}
          value={newChannel}
          onChange={handleChange}
        />
        {error && <Report type="error">{error}</Report>}
        <div className="wrapper">
          <Button size="lg" top="lg" left onClick={() => dispatch(closePopup())}>{t('cansel')}</Button>
          <Button type="submit" size="lg" top="lg" left>{t('send')}</Button>
        </div>
      </Form>
    </Popup>
  );
}

export default CreateChannelPopup;
