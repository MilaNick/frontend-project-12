import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels(state, { payload }) {
      const newState = state;
      newState.channels = payload;
    },
    addChannel(state, { payload }) {
      const { id, name, removable } = payload;
      state.channels.push({ id, name, removable });
    },
    removeChannel(state, { payload: removeId }) {
      const newState = state;
      newState.channels = state.channels.filter(({ id }) => id !== removeId);
    },
    renameChannel(state, { payload }) {
      const { id, name } = payload;
      const channel = state.channels.find((channel1) => channel1.id === id);
      channel.name = name;
    },
  },
});

export const { actions, reducer } = channelsSlice;
export const {
  setChannels, addChannel, removeChannel, renameChannel,
} = actions;
export default reducer;
