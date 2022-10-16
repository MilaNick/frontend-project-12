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
      state.channels.push({id, name, removable,});
    },
    removeChannel(state, { payload }) {
      state.channels = state.channels.filter(({id}) => id !== payload)
    },
    renameChannel(state, { payload }) {
      state.channels.map(channel => channel.name = payload.name)
    },
  }
})

export const {actions, reducer} = channelsSlice;
export const {setChannels, addChannel, removeChannel, renameChannel} = actions;
export default reducer;

// TODO проверить, дописать, неверно
