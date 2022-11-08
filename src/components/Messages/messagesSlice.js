import { createSlice } from '@reduxjs/toolkit';
import { removeChannel } from 'components/Channels/channelsSlice';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages(state, { payload }) {
      const newState = state;
      newState.messages = payload;
    },
    addMessage(state, { payload }) {
      const {
        body, channelId, id, username,
      } = payload;
      state.messages.push({
        date: Date.now(),
        body,
        id,
        channelId,
        username,
      });
    },
    removeMessage(state, { payload }) {
      const newState = state;
      newState.messages = state.messages.filter(({ id }) => id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeChannel, (state, { payload: channelId }) => {
      const newState = state;
      newState.messages = state.messages.filter((message) => message.channelId !== channelId);
    });
  },
});

export const { actions, reducer } = messagesSlice;
export const { setMessages, addMessage, removeMessage } = actions;
export default reducer;
