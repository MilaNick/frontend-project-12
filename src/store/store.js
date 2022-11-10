import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from 'slices/channelsSlice';
import messagesReducer from 'slices/messagesSlice';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
