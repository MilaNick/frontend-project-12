import {useContext, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import {socket} from 'utils/init';

import {AuthContext} from 'App';
import Message from 'components/Message';
import Button from 'ui/Button';
import Form from 'ui/Form';
import Icon from 'ui/Icon';
import Textarea from 'ui/Textarea';

import './index.scss';

const Messages = ({activeChannelId}) => {
    const channel = useSelector((state) => state.channelsReducer.channels.find((channel) => channel.id === activeChannelId));
    const messages = useSelector((state) => {
        return state.messagesReducer.messages.filter(message => message.channelId === activeChannelId);
    });
    // реализация скролла до последнего сообщения
    const lastMessageContainer = useRef(null);
    const prevMessageCount = useRef(0);
    useEffect(() => {
        const messageCount = messages.length;
        if (messageCount > prevMessageCount.current && lastMessageContainer.current) {
            lastMessageContainer.current.scrollIntoView();
        }
        prevMessageCount.current = messageCount;
    }, [messages])
    const [value, setValue] = useState('');
    const {auth} = useContext(AuthContext);

    const {t} = useTranslation();

    if (!channel) {
        return null;
    }
    const sendMessage = () => {
        if (!value.trim()) {
            return;
        }
        socket.emit('newMessage', {
            body: value,
            channelId: activeChannelId,
            username: auth.username
        }, (response) => {
            console.log(response.status); // TODO как обработать этот статус, куда вывести?
        });
        setValue('');
    }
    const messageСounter = () => {
        if (messages.length === 1) {
            return `${messages.length} ${t('messages for 1')}`
        } else if (messages.length > 1 && messages.length < 5) {
            return `${messages.length} ${t('messages for 2-4')}`
        } else {
            return `${messages.length} ${t('messages')}`
        }
    }

    return (
        <div className='main-message'>
            <div className='main-message__header'>
                <h3 className='main-message__title'>{channel.name}</h3>
                <div className='main-message__count'>{messageСounter()}</div>
            </div>
            <div className='main-message__container'>
                {messages.map(({id, body, username, date}, index) => {
                    const isLastMessage = (messages.length - 1) === index;
                    return (
                        // Check null
                        <Message key={id} ref={isLastMessage ? lastMessageContainer : null} id={id} body={body}
                                 username={username} date={date}/>
                    )
                })}
            </div>
            <div className='main-message__wrap-input'>
                <Form className='form' onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                    // throw new Error('ошибочка вышла!')
                }}>
                    <Textarea
                        autoFocus
                        placeholder={t('Enter message')}
                        value={value}
                        onKeyPress={(e) => {
                            if (e.charCode === 13 && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button type='submit' size='sm' absolute><Icon icon='ArrowRight'/></Button>
                </Form>
            </div>
        </div>
    )
};

export default Messages;
