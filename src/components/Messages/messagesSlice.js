import {createSlice} from  '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages(state, {payload}) {
      state.message = payload;
    },
    addMessage(state, action) {
      state.messages.push({
        id: action.payload.id,
        body: action.payload.body,
        channelId: action.payload.channelId,
        username: action.payload.username,
      })
    },
    removeMessage(state, action) {
      state.messages.filter(id => id !== action.payload.id)
    },
  }
})

export const { actions, reducer } = messagesSlice;
export const {setMessages, addMessage, removeMessage} = actions;
export default  reducer;

// TODO проверить, дописать, неверно
