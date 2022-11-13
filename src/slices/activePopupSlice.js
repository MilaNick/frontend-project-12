import { createSlice } from '@reduxjs/toolkit';

const activePopupSlice = createSlice({
  name: 'activePopup',
  initialState: {
    type: null,
  },
  reducers: {
    openPopup(state, { payload }) {
      state.type = payload.type;
      if(payload.props) {
        state.props = payload.props;
      } else {
        delete state.props;
      }
    },
    closePopup(state) {
      state.type = null;
      delete state.props;
    },
  },
});

export const { actions, reducer } = activePopupSlice;
export const {
  openPopup, closePopup,
} = actions;
export default reducer;
