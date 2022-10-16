import axios from "axios";
import {useContext, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {setChannels} from "components/Channels/channelsSlice";
import {setMessages} from "components/Messages/messagesSlice";

import {AuthContext} from "App"; //TODO создать хук useAuth и вынести туда контекст
import Channels from "components/Channels";
import Messages from "components/Messages";

import './index.scss';

const Chats = () => {
  const {auth} = useContext(AuthContext);
  const dispatch = useDispatch();
  const params = useParams();
  const channelId = params.channelId ? Number(params.channelId) : null;
  const navigate = useNavigate();

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
        const messages = setMessages([...response.data.messages, {
          id: 100,
          body: 'Lorem ipsum dolor sit amet channelId: 1',
          username: 'HotCat',
          channelId: 1,
        },
          {
            id: 200,
            body: 'Lorem ipsum dolor sit amet, consectetur  est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat channelId: 2',
            username: 'Mila',
            channelId: 2,
          }]);
        dispatch(messages);
      });
    }
  }, [])

  return (
    <div className="chat-container">
      <div className="main__wrap shadow">
        <Channels activeChannelId={channelId}/>
        <Messages activeChannelId={channelId}/>
      </div>
    </div>
  )
}

export default Chats;
