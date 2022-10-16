import cn from 'classnames';
import {useContext} from "react";

import {AuthContext} from "App";

import './index.scss';

const Message = ({id, body, username}) => {
  const {auth} = useContext(AuthContext);

  const isAuthor = username === auth.username;
  const classes = cn({
    message: true,
    'message--user': isAuthor,
  });
  return (
    <div key={id} className={classes}>
      <div className="message__username">{username}</div>
      <div className="message__text">{body}</div>
    </div>
  )
};

export default Message;
