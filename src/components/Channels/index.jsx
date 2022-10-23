import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Channel from 'components/Channel';
import CreateChannel from 'components/CreateChannel';
import Button from 'ui/Button';
import Icon from 'ui/Icon';

import './index.scss';

const Channels = ({activeChannelId}) => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const [shown, setShown] = useState(false);
  const navigate = useNavigate();
  const [justCreatedChannelName, setJustCreatedChannelName] = useState(null)
  useEffect(() => {
    if(justCreatedChannelName) {
      const justCreatedChannel = channels.find(channel => channel.name === justCreatedChannelName)
      if (justCreatedChannel) {
        navigate(`/chats/${justCreatedChannel.id}`)
        setJustCreatedChannelName(null)
      }
    }
  }, [channels, justCreatedChannelName])

  return (
    <div className='main-channels'>
      <div className='main-channels__wrap'>
        <h3 className='main-channels__title'>Каналы</h3>
        <Button size='sm' onClick={() => setShown(true)}><Icon icon='Plus'/></Button>
        <CreateChannel onAddChannel={setJustCreatedChannelName} channels={channels} shown={shown} setShown={setShown} />
      </div>
      <ul className='main-channels__names'>
        {channels.map((channel) => {
          return (
            <Channel
              key={channel.id}
              id={channel.id}
              name={channel.name}
              isActive={activeChannelId === channel.id}
              removable={channel.removable}
            />
          )
        })}
      </ul>
    </div>
  )
};

export default Channels;
