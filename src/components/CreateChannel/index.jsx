import {useState} from 'react';

import {socket} from 'index';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';

const CreateChannel = ({channels, shown, setShown}) => {
  const [newChannel, setNewChannel] = useState('');
  const [error, setError] = useState('');

  const addChannel = (e) => {
    e.preventDefault();
    if (channels.find(channel => Object.values(channel).includes(newChannel))) {
      setError('Канал с таким названием уже есть')
      setNewChannel('');
      return;
    }
    setError('')
    socket.emit('newChannel', {name: newChannel}, (response) => {
      console.log(response.status); // TODO как обработать этот статус, куда вывести?
    })
    setNewChannel('');
    setShown(false);
  }; // TODO добавить переход на созданный канал

  {/*TODO инкапсуляция попапом логики*/
  }
  return (
    <Popup shown={shown} setShown={setShown}>
      <Form onSubmit={addChannel}>
        <div className='wrap'>
          <h3>Добавить канал</h3>
          <Button size='sm' onClick={() => setShown(false)}>x</Button>
        </div>
        <Input value={newChannel} onChange={(e) => setNewChannel(e.target.value)}/>
        {error && <Report type='error'>{error}</Report>}
        <div className='wrapper'>
          <Button size='lg' top='lg' left onClick={() => setShown(false)}>Отменить</Button>
          <Button type='submit' size='lg' top='lg' left>Отправить</Button>
        </div>
      </Form>
    </Popup>
  )
}

export default CreateChannel;
