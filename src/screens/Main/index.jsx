import {useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

import {AuthContext} from "App";
import Channels from "components/Channels";
import Messages from "components/Messages";

import './index.scss';
import {setChannels} from "../../components/Channels/channelsSlice";

const messages = [
  {
    id: 1,
    body: 'Lorem ipsum dolor sit amet',
    username: 'HotCat',
    channelId: 1,
  },
  {
    id: 2,
    body: 'Lorem ipsum dolor sit amet, consectetur  est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'Mila',
    channelId: 2,
  },
  {
    id: 3,
    body: 'Lorem ipsum dolor sit amet, consectetur gnam minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'HotCat',
    channelId: 1,
  },
  {
    id: 4,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  optio perspiciatis placeat',
    username: 'Антон',
    channelId: 2,
  },
  {
    id: 5,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'HotCat',
    channelId: 1,
  },
  {
    id: 6,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'Антон',
    channelId: 2,
  },
  {
    id: 7,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'Kirill',
    channelId: 1,
  },
  {
    id: 8,
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat',
    username: 'Mila',
    channelId: 1,
  },
]

const Main = () => {
  const {auth} = useContext(AuthContext);
  const [data, setData] = useState(null); // TODO удалить
  const dispatch = useDispatch();

  useEffect(() => {
        if (auth) {
          axios.get('/api/v1/data', {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          }).then((response) => {
            const channelsAction = setChannels(response.data.channels); // { type: 'xxx', payload: [] }
            console.log('channelsAction>>>', channelsAction);
            dispatch(channelsAction);
            setData(response.data)
          });
        }

  }, [])

  return (
    <div className="chat-container">
      {data && ( // TODO ??
        <div className="main__wrap shadow">
          <Channels />
          <Messages messages={messages} channelName='general' countMessages='1 сообщение'/>
        </div>
      )}
    </div>
  )
}

export default Main;
