import {createSlice} from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels(state, {payload}) {
      state.channels = payload;
    },
    addChannel(state, {payload}) {
      const {id, name, removable} = payload;
      state.channels.push({id, name, removable});
    },
    removeChannel(state, {payload: removeId}) {
      state.channels = state.channels.filter(({id}) => id !== removeId)
    },
    renameChannel(state, {id}) {
      state.channels.find(channel => channel.id = id)
    },
  }
})

export const {actions, reducer} = channelsSlice;
export const {setChannels, addChannel, removeChannel, renameChannel} = actions;
export default reducer;
