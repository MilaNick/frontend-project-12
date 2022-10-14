import Message from "components/Message";
import Input from "ui/Input";
import Button from "ui/Button";

import './index.scss';

const arrow = '>';

const Messages = ({messages, channelName, countMessages}) => {
  return (
    <div className="main-message">
      <div className="main-message__header">
        <h3 className="main-message__title">{channelName}</h3>
        <div className="main-message__count">{countMessages}</div>
      </div>
      <div className="main-message__container">
        {messages.map(({id, body, username}) => {
          return (
            <Message key={id} id={id} body={body} username={username}/>
          )
        })}
      </div>
      <div className="main-message__wrap-input">
        <Input placeholder='Введите сообщение'/>
        <Button size={'sm'} absolute>{arrow}</Button>
      </div>
    </div>
  )
};

export default Messages;
// TODO where add channelId: action.payload.channelId?
