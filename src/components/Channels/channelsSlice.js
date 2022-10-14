import {createSlice} from  '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channel',
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channels.map(channel => channel === action.payload)
    },
    addChannel(state, action) {
      state.channels.push({
        id: action.payload.id,
        name: action.payload.name,
        removable: action.payload.removable,
      })
    },
    removeChannel(state, action) {
      state.channels.filter(channel => channel.id !== action.payload.id)
      // state.messages.filter(id => action.payload.channelId === id)
    },
    renameChannel(state, action) {
      state.channels.map(channel => channel.name === action.payload.name)
    },
  }
})

export const { actions, reducer } = channelsSlice;
export const {setChannels, addChannel, renameChannel, removeChannel} = actions;
export default  reducer;
