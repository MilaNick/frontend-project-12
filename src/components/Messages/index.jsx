import {useContext, useState} from "react";
import {useSelector} from "react-redux";

import {socket} from "index";

import {AuthContext} from "App";
import Message from "components/Message";
import Input from "ui/Input";
import Button from "ui/Button";

import './index.scss';

const arrow = '>';

const Messages = ({activeChannelId }) => {
  const channel = useSelector((state) => state.channelsReducer.channels.find((channel) => channel.id === activeChannelId));
  const messages = useSelector((state) => {
    return state.messagesReducer.messages.filter(message => message.channelId === activeChannelId);
  });
  const [value, setValue] = useState('');
  const {auth} = useContext(AuthContext);
  if (!channel) {
    return null;
  }

  return (
    <div className="main-message">
      <div className="main-message__header">
        <h3 className="main-message__title">{channel.name}</h3>
        <div className="main-message__count">{messages.length} сообщений</div>
      </div>
      <div className="main-message__container">
        {messages.map(({id, body, username, date}) => {
          return (
            <Message key={id} id={id} body={body} username={username} date={date}/>
          )
        })}
      </div>
      <div className="main-message__wrap-input">
        <form className="form" onSubmit={(e) => {
          e.preventDefault();
          if(!value.trim()){
            return;
          }
          socket.emit('newMessage', { body: value, channelId: activeChannelId, username: auth.username }, (response) => {
            console.log(response.status); // TODO как обработать этот статус, куда вывести?
          });
          setValue('');
        }} >
          <Input autoFocus placeholder='Введите сообщение' value={value} onChange={(e) => setValue(e.target.value)}/>
          <Button type='submit' size='sm' absolute>{arrow}</Button>
        </form>
      </div>
    </div>
  )
};

export default Messages;
