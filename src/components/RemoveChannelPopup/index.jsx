import {useTranslation} from 'react-i18next';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {socket} from 'index';

import Button from 'ui/Button';
import Popup from 'ui/Popup';

const RemoveChannelPopup = ({id, close}) => {
  const {t} = useTranslation();
  const notify = (e) => {
    e.preventDefault();
    toast.info(t('Channel removed'), {
      icon: '🌠'
    });
  };

  const handleRemove = (e) => {
    socket.emit('removeChannel', {id}, () => {
      notify(e);
      close();
    });
  }

  return (
    <Popup title={t('Remove channel')} close={close}>
      <div className='wrapper'>
        <div className='popup__text'>{t('Are you sure?')}</div>
        <Button size='lg' top='lg' left onClick={close}>{t('cansel')}</Button>
        <Button size='lg' top='lg' left onClick={handleRemove}>{t('remove')}</Button>
      </div>
    </Popup>
  )
}

export default RemoveChannelPopup;
