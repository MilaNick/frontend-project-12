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
      const { body, channelId, id, username } = payload;
      state.messages.push({
        date: Date.now(),
        body,
        id,
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
