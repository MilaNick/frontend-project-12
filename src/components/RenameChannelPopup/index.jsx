import {useState} from 'react';

import {socket} from 'index';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';


const RenameChannelPopup = ({channels, id, close}) => {
    const [newNameChannel, setNewNameChannel] = useState('');
    const [error, setError] = useState('');

    const renameChannel = (e) => {
        e.preventDefault();
        if (channels.find(channel => channel.name.toLowerCase() === newNameChannel.toLowerCase())) {
            setError('Канал с таким названием уже есть')
            return;
        }
        setError('');
        if (newNameChannel) {
            socket.emit('renameChannel', {id, name: newNameChannel}, (response) => {
                console.log(response.status);
                close();
            })
            setNewNameChannel('')
        } else {
            setError('Введите имя канала')
        }
    };

    const handleChange = (e) => {
        setNewNameChannel(e.target.value);
        setError('')
    };

    return (
        <Popup close={close} title='Переименовать канал'>
            <Form onSubmit={renameChannel}>
                <Input autoFocus value={newNameChannel} onChange={handleChange}/>
                {error && <Report type='error'>{error}</Report>}
                <div className='wrapper'>
                    <Button size='lg' top='lg' left onClick={close}>Отменить</Button>
                    <Button type='submit' size='lg' top='lg' left>Переименовать</Button>
                </div>
            </Form>
        </Popup>
    )
}

export default RenameChannelPopup;
