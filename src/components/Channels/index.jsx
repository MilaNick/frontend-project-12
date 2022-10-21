import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Channel from 'components/Channel';
import CreateChannel from 'components/CreateChannel';
import Button from 'ui/Button';

import './index.scss';

const plus = '+';

const Channels = ({activeChannelId}) => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const [shown, setShown] = useState(false);
  const navigate = useNavigate();
  const [justCreatedChannelName, setJustCreatedChannelName] = useState(null)
  useEffect(() => {
    if(justCreatedChannelName) {
      const exist = channels.find(channel => channel.name === justCreatedChannelName)
      if (exist) {
        navigate(`/chats/${exist.id}`)
        setJustCreatedChannelName(null)
      }
    }
  }, [channels, justCreatedChannelName])


  return (
    <div className='main-channels'>
      <div className='main-channels__wrap'>
        <h3 className='main-channels__title'>Каналы</h3>
        <Button size='sm' onClick={() => setShown(true)}>{plus}</Button>
        <CreateChannel onAddChannel={setJustCreatedChannelName} channels={channels} shown={shown} setShown={setShown} />
      </div>
      <ul className='main-channels__names'>
        {channels.map((channel) => {
          return (
            <Channel
              key={channel.id}
              id={channel.id}
              name={`# ${channel.name}`}
              isActive={activeChannelId === channel.id}
            />
          )
        })}
      </ul>
    </div>
  )
};

export default Channels;
