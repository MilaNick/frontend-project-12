import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {io} from "socket.io-client";

import store from 'store/store';

import App from 'App';
import {addMessage} from "components/Messages/messagesSlice";

import './assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

export const socket = io();
socket.on('newMessage', ({body, channelId, id, username}) => {
  store.dispatch(addMessage({body, channelId, id, username}));
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
