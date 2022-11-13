import i18next from 'i18next';
import filter from 'leo-profanity';
import { initReactI18next } from 'react-i18next';
import { io } from 'socket.io-client';
import store from 'store/store';

import { addChannel, removeChannel, renameChannel } from 'slices/channelsSlice';
import ruResources from 'locales/ru';
import { addMessage } from 'slices/messagesSlice';

export const socket = io();
export const i18n = i18next;

function init() {
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

  filter.loadDictionary();
  filter.add(filter.getDictionary('ru', 'en'));

  i18n
    .use(initReactI18next)
    .init({
      lng: 'ru',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        ru: ruResources,
      },
    });
}

export default init;
