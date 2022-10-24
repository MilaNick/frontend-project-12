import cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import {socket} from 'index';

import CreateChannel from 'components/CreateChannel';
import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';
import {useSelector} from 'react-redux';


const Channel = ({id, name, isActive, removable}) => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const [shownDropDown, setShownDropDown] = useState(false)
  const [shown, setShown] = useState(false)
  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });
  const dropdown = cn({
    shadow: true,
    'channel__drop-down': true,
    'channel__drop-down--shown': shownDropDown,
  })
  const handleClick = () => {
    setShownDropDown(() => !shownDropDown);
  }
  const deleteChannel = (payload) => {
    socket.emit('removeChannel', {id: payload.id });
    setShownDropDown(false);
    setShown(true);
    console.log(1)
  }
  const renameChannel = () => {
    // socket.emit('renameChannel', { id: payload.id, name: payload.name});
    console.log(2)
    setShownDropDown(false);
  }
  return (
    <>
      <li className={classes}>
        <Link className='channel-item__link' to={`/chats/${id}`}>#&nbsp;{name}</Link>
        {removable && <Button size='sm' relative onClick={handleClick}><Icon icon='ArrowDown'/>
          {shownDropDown && (
            <div className={dropdown}>
              <span className='channel__drop-down--click' onClick={deleteChannel}>Удалить</span>
              <CreateChannel channels={channels} shown={shown} setShown={setShown} />
              <span className='channel__drop-down--click' onClick={renameChannel}>Переименовать</span>
              <CreateChannel channels={channels} shown={shown} setShown={setShown} />
            </div>
          )}
        </Button>}
      </li>
    </>

  )
};

export default Channel;
// const Popup = ({children, shown, setShown}) => {
//   const classes = cn({
//     'popup--shown': shown,
//   })
//   return (
//     <div className={`popup ${classes}`} onClick={() => setShown(false)}>
//       <div className={`popup__content ${classes}`} onClick={(e) => e.stopPropagation()}>
//         {children}
//       </div>
//     </div>
//   )
// }
