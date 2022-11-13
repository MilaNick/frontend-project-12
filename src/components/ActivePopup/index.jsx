import React from 'react';
import { useSelector } from 'react-redux';

import CreateChannelPopup from 'components/CreateChannelPopup';
import RemoveChannelPopup from 'components/RemoveChannelPopup';
import RenameChannelPopup from 'components/RenameChannelPopup';

function ActivePopup() {
  const popup = useSelector((state) => state.popupReducer);
  switch (popup.type) {
    case 'rename-channel':
      return <RenameChannelPopup id={popup.props.id} />;
    case 'remove-channel':
      return <RemoveChannelPopup id={popup.props.id} />;
    case 'add-channel':
      return <CreateChannelPopup onAddChannel={popup.props.onAddChannel} />;
    default:
      return null;
  }
}

export default ActivePopup;
