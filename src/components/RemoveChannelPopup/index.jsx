import {socket} from 'index';

import Button from 'ui/Button';
import Popup from 'ui/Popup';


const RemoveChannelPopup = ({id, close}) => {
  const handleRemove = () => {
    socket.emit('removeChannel', {id}, () => {
      close();
    });
  }

  return (
    <Popup title='Удалить канал' close={close}>
      <div className='wrapper'>
        <div className='popup__text'>Вы уверены?</div>
        <Button size='lg' top='lg' left onClick={close}>Отменить</Button>
        <Button size='lg' top='lg' left onClick={handleRemove}>Удалить</Button>
      </div>
    </Popup>
  )
}

export default RemoveChannelPopup;
