import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Channel from 'components/Channel';
import { openPopup } from 'slices/activePopupSlice';
import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';

function Channels({ activeChannelId }) {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channelsReducer.channels);
  const [justCreatedChannelName, setJustCreatedChannelName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (justCreatedChannelName) {
      const justCreatedChannel = channels
        .find((channel) => channel.name === justCreatedChannelName);
      if (justCreatedChannel) {
        navigate(`/chats/${justCreatedChannel.id}`);
        setJustCreatedChannelName(null);
      }
    }
  }, [channels, justCreatedChannelName, navigate]);

  return (
    <div className="main-channels">
      <div className="main-channels__wrap">
        <h3 className="main-channels__title">Каналы</h3>
        <Button size="sm" onClick={() => dispatch(openPopup({ type: 'add-channel', props: { onAddChannel: setJustCreatedChannelName } }))}>
          <Icon icon="Plus" />
          <span className="hidden">+</span>
        </Button>
      </div>
      <ul className="main-channels__names">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            id={channel.id}
            name={channel.name}
            isActive={activeChannelId === channel.id}
            removable={channel.removable}
          />
        ))}
      </ul>
    </div>
  );
}

export default Channels;
