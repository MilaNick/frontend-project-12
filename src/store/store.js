import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from 'components/Channels/channelsSlice';
import messagesReducer from 'components/Messages/messagesSlice';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
