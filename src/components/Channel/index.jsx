import cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import RemoveChannelPopup from 'components/RemoveChannelPopup';
import Button from 'ui/Button';
import DropdownMenu from 'ui/DropdownMenu';
import Icon from 'ui/Icon';

import './index.scss';

const Channel = ({id, name, isActive, removable}) => {
  const [shownRemovePopup, setShownRemovePopup] = useState(false);

  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });

  const deleteChannel = () => {
    setShownRemovePopup(true);
  }

  return (
      <li className={classes}>
        <Link className='channel-item__link' to={`/chats/${id}`}>#&nbsp;{name}</Link>
        {removable && (
            <DropdownMenu items={[
              {
                label: 'Удалить',
                onClick: () => deleteChannel()
              },
              {
                label: 'Переименовать',
                onClick: () => {}
              }
            ]}>
              <Button size='sm' ><Icon icon='ArrowDown'/></Button>
            </DropdownMenu>)}
        {shownRemovePopup &&  <RemoveChannelPopup id={id} close={() => setShownRemovePopup(false)}/>}
      </li>
  )
};

export default Channel;
