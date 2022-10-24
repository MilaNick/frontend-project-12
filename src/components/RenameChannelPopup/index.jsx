import {useState} from 'react';

import {socket} from 'index';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';

const RenameChannelPopup = ({channels, setShown, onAddChannel}) => {

  const closePopup = () => {
    setShown(false)
  }

  return (
    <Popup close={closePopup} title='Добавить канал'>
      <Form onSubmit={}>
        <Input value={} onChange={}/>
        {error && <Report type='error'>{error}</Report>}
        <div className='wrapper'>
          <Button size='lg' top='lg' left onClick={closePopup}>Отменить</Button>
          <Button type='submit' size='lg' top='lg' left>Отправить</Button>
        </div>
      </Form>
    </Popup>
  )
}

export default RenameChannelPopup;
