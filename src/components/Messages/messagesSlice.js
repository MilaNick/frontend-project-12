import {createSlice} from  '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages(state, {payload}) {
      state.messages = payload;
    },
    addMessage(state, {payload}) {
      const { body, channelId, username } = payload;
      state.messages.push({
        id: Math.floor(Math.random() * 1000),
        body,
        channelId,
        username,
      });
    },
    removeMessage(state, action) {
      state.messages = state.messages.filter(id => id !== action.payload.id)
    },
  }
})

export const { actions, reducer } = messagesSlice;
export const {setMessages, addMessage, removeMessage} = actions;
export default  reducer;
