import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Channel from 'components/Channel';
import CreateChannelPopup from 'components/CreateChannelPopup';
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
  const handleClick = () => {
    setShown(true);
    // name.focus();
  }

  return (
    <div className='main-channels'>
      <div className='main-channels__wrap'>
        <h3 className='main-channels__title'>Каналы</h3>
        <Button size='sm' onClick={handleClick}><Icon icon='Plus'/></Button>
        {shown && <CreateChannelPopup onAddChannel={setJustCreatedChannelName} channels={channels} setShown={setShown}/>}
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
