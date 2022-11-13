import cn from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { openPopup } from 'slices/activePopupSlice';
import Button from 'ui/Button';
import DropdownMenu from 'components/DropdownMenu';
import Icon from 'ui/Icon';

import './index.scss';

function Channel({
  id, name, isActive, removable,
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const classes = cn({
    'channel-item': true,
    'channel-item--active': isActive,
  });

  const deleteChannel = () => {
    dispatch(openPopup({ type: 'remove-channel', props: { id } }));
  };
  const renameChannel = () => {
    dispatch(openPopup({ type: 'rename-channel', props: { id } }));
  };
  return (
    <li className={classes}>
      <Link className="channel-item__link" to={`/chats/${id}`}>
        #&nbsp;
        {name}
      </Link>
      {removable && (
        <DropdownMenu items={[
          {
            label: t('remove'),
            onClick: () => deleteChannel(),
          },
          {
            label: t('rename'),
            onClick: () => renameChannel(),
          },
        ]}
        >
          <Button size="sm">
            <Icon icon="ArrowDown" />
            <span className="hidden">{t('Channel management')}</span>
          </Button>
        </DropdownMenu>
      )}
    </li>
  );
}

export default Channel;
