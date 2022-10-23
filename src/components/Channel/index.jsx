import cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';


const Channel = ({id, name, isActive, removable}) => {
  const [shown1, setShown1] = useState(false)
  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });
  const handleClick = () => {
    setShown1(true);
  }
  return (
    <li className={classes}>
      <Link className='channel-item__link' to={`/chats/${id}`}>#&nbsp;{name}</Link>
      {removable && <Button size='sm' relative onClick={handleClick}><Icon icon='ArrowDown'/>
        {shown1 && (
          <div className='channel__drop-down shadow'>
            <span>Удалить</span>
            <span>Переименовать</span>
          </div>
        )}
      </Button>}
    </li>
  )
};
//
// <Tippy className='tippy' content={channel.name}>
//   <h3 className='main-message__title'>{channel.name}</h3>
// </Tippy>

export default Channel;
