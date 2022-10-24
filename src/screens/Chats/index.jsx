import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import {setChannels} from 'components/Channels/channelsSlice';
import {setMessages} from 'components/Messages/messagesSlice';

import {AuthContext} from 'App'; //TODO создать хук useAuth и вынести туда контекст
import Channels from 'components/Channels';
import Messages from 'components/Messages';

import './index.scss';

const Chats = () => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  const {auth} = useContext(AuthContext);
  const dispatch = useDispatch();
  const params = useParams();
  const channelId = params.channelId ? Number(params.channelId) : null;
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      const isChannelExisted = channels.some(channel => channel.id === channelId);
      if (!isChannelExisted && channels.length > 0) {
        navigate(`/chats/${channels[0].id}`);
      }
    }
  }, [isReady, channels]);

  useEffect(() => {
    if (auth) {
      axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      }).then((response) => {
        const channelsAction = setChannels(response.data.channels);
        dispatch(channelsAction);
        if (channelId === null) {
          const firstChannel = response.data.channels[0];
          navigate(`/chats/${firstChannel.id}`);
        }
        const messages = setMessages(response.data.messages);
        dispatch(messages);
        setIsReady(true);
      }).catch((e) => {
        console.log('Перезагрузите страницу, ошибка:', e)
      })
    }
  }, [])

  return (
    <div className='chat-container'>
      <div className='main__wrap shadow'>
        {isReady && (
          <>
            <Channels activeChannelId={channelId}/>
            <Messages activeChannelId={channelId}/>
          </>
        )}
      </div>
    </div>
  )
}

export default Chats;
