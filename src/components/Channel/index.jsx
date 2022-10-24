import cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Button from 'ui/Button';
import Icon from 'ui/Icon';
import RemoveChannelPopup from 'components/RemoveChannelPopup';

import './index.scss';

const Channel = ({id, name, isActive, removable}) => {
  const [shownDropdown, setShownDropdown] = useState(false);
  const [shown, setShown] = useState(false);

  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });
  const dropdown = cn({
    shadow: true,
    'channel__drop-down': true,
    'channel__drop-down--shown': shownDropdown,
  });

  const handleClick = () => {
    setShownDropdown(() => !shownDropdown);
  }

  return (
    <>
      <li className={classes}>
        <Link className='channel-item__link' to={`/chats/${id}`}>#&nbsp;{name}</Link>
        {removable && <Button size='sm' relative onClick={handleClick}><Icon icon='ArrowDown'/>
          {shownDropdown && (
            <div className={dropdown}>
              <span className='channel__drop-down--click' onClick={() => setShown(true)}>Удалить</span>
              {/*<span className='channel__drop-down--click' onClick={renameChannel}>Переименовать</span>*/}
            </div>
          )}
        </Button>}
        <RemoveChannelPopup id={id} shown={shown} setShown={setShown}/>
      </li>
    </>

  )
};

export default Channel;
