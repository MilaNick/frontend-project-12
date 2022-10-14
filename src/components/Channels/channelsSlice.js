import {createSlice} from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels1',
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels(state, {payload}) { // { type: 'xxx', payload: [] }
      state.channels = payload;
    },
    addChannel(state, action) {
      state.channels.push({
        id: action.payload.id,
        name: action.payload.name,
        removable: action.payload.removable,
      })
    },
    removeChannel(state, { payload }) {
      state.channels = state.channels.filter(({id}) => id !== payload)
      // state.messages.filter(id => action.payload.channelId === id)
    },
    // renameChannel(state, action) {
    //   state.channels.map(channel => channel.name === action.payload.name)
    // },
  }
})

export const {actions, reducer} = channelsSlice;
export const {setChannels, addChannel, removeChannel} = actions;
export default reducer;
// TODO проверить, дописать, неверно
