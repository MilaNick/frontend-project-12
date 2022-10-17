import cn from 'classnames';
import {useContext} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {AuthContext} from "App";

import './index.scss';

const Message = ({id, body, username, date}) => {
  const {auth} = useContext(AuthContext);

  const isAuthor = username === auth.username;
  const classes = cn({
    message: true,
    'message--user': isAuthor,
  });

  return (
    <div key={id} className={classes}>
      <div className="message__username">{username}
        {date &&
        <Tippy
          className='tippy'
          content={
          (new Date(date)).toLocaleString('ru-RU', {
          hour12: false,
          month: 'long',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
            second: '2-digit',
            year: 'numeric',
            weekday: 'short',
        })}>
          <span className='time'>
            {(new Date(date)).toLocaleString('ru-RU', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',

            })}
          </span>
        </Tippy>
      }</div>
      <div className="message__text">{body}</div>
    </div>
  )
};

export default Message;
