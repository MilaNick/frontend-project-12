import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from 'slices/channelsSlice';
import messagesReducer from 'slices/messagesSlice';
import popupReducer from 'slices/activePopupSlice';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
    popupReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
