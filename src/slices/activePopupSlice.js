import { createSlice } from '@reduxjs/toolkit';

const activePopupSlice = createSlice({
  name: 'activePopup',
  initialState: {
    type: null,
  },
  reducers: {
    openPopup(state, { payload }) {
      const newState = state;
      newState.type = payload.type;
      if (payload.props) {
        newState.props = payload.props;
      } else {
        delete newState.props;
      }
    },
    closePopup(state) {
      const newState = state;
      newState.type = null;
      delete newState.props;
    },
  },
});

export const { actions, reducer } = activePopupSlice;
export const {
  openPopup, closePopup,
} = actions;
export default reducer;
