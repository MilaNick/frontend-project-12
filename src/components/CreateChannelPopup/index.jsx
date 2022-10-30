import {useState} from 'react';
import {useTranslation} from 'react-i18next';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {socket} from 'index';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';

const CreateChannelPopup = ({channels, setShown, onAddChannel}) => {
    const [newChannel, setNewChannel] = useState('');
    const [error, setError] = useState('');
    const {t} = useTranslation();
    // const notify = toast(t('Channel added'));

    const addChannel = (e) => {
        e.preventDefault();
        if (channels.find(channel => channel.name.toLowerCase() === newChannel.toLowerCase())) {
            setError(t('Not unique name'))
            return;
        }
        setError('')
        if (newChannel) {
            socket.emit('newChannel', {name: newChannel}, (response) => {
                console.log(response.status)
            })
            onAddChannel(newChannel);
            setNewChannel('');
            setShown(false);
        } else {
            setError(t('Enter the channel name'))
        }
    };

    const closePopup = () => {
        setNewChannel('');
        setError('')
        setShown(false)
    };

    const handleChange = (e) => {
        setNewChannel(e.target.value);
        setError('')
    };

    return (
        <Popup close={closePopup} title={t('Add channel')}>
            <Form onSubmit={addChannel}>
                <Input autoFocus value={newChannel} onChange={handleChange}/>
                {error && <Report type='error'>{error}</Report>}
                <div className='wrapper'>
                    <Button size='lg' top='lg' left onClick={closePopup}>{t('cansel')}</Button>
                    <Button type='submit' size='lg' top='lg' left>{t('send')}</Button>

                </div>
            </Form>
        </Popup>
    )
}

export default CreateChannelPopup;

