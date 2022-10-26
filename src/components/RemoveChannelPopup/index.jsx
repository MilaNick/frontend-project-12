import {socket} from 'index';

import Button from 'ui/Button';
import Popup from 'ui/Popup';
import {useSelector} from 'react-redux';

const RemoveChannelPopup = ({id, close}) => {
  const messages = useSelector((state) => state.messagesReducer.messages);
  {console.log('messages>>>', messages)}
  const handleRemove = () => {
    socket.emit('removeChannel', {id}, () => {
      close();
    });
  }

  return (
    <Popup shown title='Удалить канал'>
      <div className='wrapper'>
        <div className='popup__text'>Вы уверены?</div>
        <Button size='lg' top='lg' left onClick={close}>Отменить</Button>
        <Button size='lg' top='lg' left onClick={handleRemove}>Удалить</Button>
      </div>
    </Popup>
  )
}

export default RemoveChannelPopup;
