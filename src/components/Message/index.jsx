import cn from 'classnames';

import './index.scss';

const Message = ({id, body, username}) => {
  const login = 'Mila';
  const isAuthor = username === login;
  const classes = cn({
    message: true,
    'message--right': isAuthor,
    'message--bg-color': isAuthor,
  });
  return (
    <div key={id} className={classes}>
      <div className="message__username">{username}</div>
      <div className="message__text">{body}</div>
    </div>
  )
};

export default Message;

// TODO если username === login, то надо добавить классы к message message--right message--bg-color
// TODO куда вставить channelId
