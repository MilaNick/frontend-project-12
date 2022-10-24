import {socket} from 'index';

import Button from 'ui/Button';
import Popup from 'ui/Popup';

const RemoveChannelPopup = ({id, shown, setShown}) => {

  const deleteChannel = () => {
    setShown(true);
    socket.emit('removeChannel', {id});
    closePopup();
  }

  const closePopup = () => {
    setShown(false)
  };

  return (
    <Popup shown={shown} close={closePopup} title='Удалить канал'>
      <div className='wrapper'>
        <div>Вы уверены?</div>
        <Button size='lg' top='lg' left onClick={closePopup}>Отменить</Button>
        <Button type='submit' size='lg' top='lg' left onClick={() => deleteChannel(id)}>Удалить</Button>
      </div>
    </Popup>
  )
}

export default RemoveChannelPopup;
