import cn from 'classnames';
import {forwardRef, useContext} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {AuthContext} from 'App';
import {clean} from 'utils/profanity';

import './index.scss';

const Message = ({body, username, date}, ref) => {
  const {auth} = useContext(AuthContext);

  const isAuthor = username === auth.username;
  const classes = cn({
    message: true,
    'message--user': isAuthor,
  });

  return (
    <div className={classes} ref={ref}>
      <div className='message__username'>{username}
        {date &&
        <Tippy
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
            }
          )}>
          <span className='time'>
            {(new Date(date)).toLocaleString('ru-RU', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            }
          )}
          </span>
        </Tippy>
      }</div>
      <div className='message__text'>{clean(body)}</div>
    </div>
  )
};

export default forwardRef(Message);
