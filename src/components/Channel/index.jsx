import cn from 'classnames';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import RemoveChannelPopup from 'components/RemoveChannelPopup';
import RenameChannelPopup from 'components/RenameChannelPopup';
import Button from 'ui/Button';
import DropdownMenu from 'ui/DropdownMenu';
import Icon from 'ui/Icon';

import './index.scss';

const Channel = ({id, name, isActive, removable}) => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const [shownRemovePopup, setShownRemovePopup] = useState(false);
  const [shownRenamePopup, setShownRenamePopup] = useState(false);

  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });

  const deleteChannel = () => {
    setShownRemovePopup(true);
  }
  const renameChannel = () => {
    setShownRenamePopup(true);
  }

  return (
      <li className={classes}>
        <Link className='channel-item__link' to={`/chats/${id}`}>#&nbsp;{name}</Link>
        {removable && (
            <DropdownMenu items={[
              {
                label: 'Удалить',
                onClick: () => deleteChannel(),
              },
              {
                label: 'Переименовать',
                onClick: () => renameChannel(),
              }
            ]}>
              <Button size='sm' ><Icon icon='ArrowDown'/></Button>
            </DropdownMenu>)}
        {shownRemovePopup &&  <RemoveChannelPopup id={id} close={() => setShownRemovePopup(false)}/>}
        {shownRenamePopup &&  <RenameChannelPopup channels={channels} id={id} close={() => setShownRenamePopup(false)}/>}
      </li>
  )
};

export default Channel;
