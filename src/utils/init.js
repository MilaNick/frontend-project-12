// import {useTranslation} from 'react-i18next';

import { io } from 'socket.io-client';
import store from 'store/store';

import { addChannel, removeChannel, renameChannel } from 'components/Channels/channelsSlice';
import { addMessage } from 'components/Messages/messagesSlice';

// const {t} = useTranslation();
const socket = io();

socket.on('newMessage', ({
  body, channelId, id, username,
}) => {
  store.dispatch(addMessage({
    body, channelId, id, username,
  }));
});
socket.on('newChannel', ({ id, name, removable }) => {
  store.dispatch(addChannel({ id, name, removable }));
});
socket.on('removeChannel', ({ id }) => {
  store.dispatch(removeChannel(id));
});
socket.on('renameChannel', ({ id, name }) => {
  store.dispatch(renameChannel({ id, name }));
});

const rollbarConfig = {
  accessToken: '2509ceefddee48a29de8f8bc9476cb78',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
  },
};

function ErrorDisplay({ error, resetError }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      Что то пошло не так... :
      {' '}
      {error.message}
      <br />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => resetError()}>Сброс</button>
    </div>
  );
}

export { socket, rollbarConfig, ErrorDisplay };
