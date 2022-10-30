import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {socket} from 'index';

import Report from 'components/Report';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Input from 'ui/Input';
import Popup from 'ui/Popup';


const RenameChannelPopup = ({channels, id, close}) => {
    const [newNameChannel, setNewNameChannel] = useState('');
    const [error, setError] = useState('');
    const {t} = useTranslation();

    const renameChannel = (e) => {
        e.preventDefault();
        if (channels.find(channel => channel.name.toLowerCase() === newNameChannel.toLowerCase())) {
            setError(t('Not unique name'))
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
            setError(t('Enter the channel name'))
        }
    };

    const handleChange = (e) => {
        setNewNameChannel(e.target.value);
        setError('')
    };

    return (
        <Popup close={close} title={t('Rename channel')}>
            <Form onSubmit={renameChannel}>
                <Input autoFocus value={newNameChannel} onChange={handleChange}/>
                {error && <Report type='error'>{error}</Report>}
                <div className='wrapper'>
                    <Button size='lg' top='lg' left onClick={close}>{t('cansel')}</Button>
                    <Button type='submit' size='lg' top='lg' left>{t('rename')}</Button>
                </div>
            </Form>
        </Popup>
    )
}

export default RenameChannelPopup;
