import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: null,
  fontFamily: `'Poppins', sans-serif`,
  borderRadius: 12,
  opened: true,
};

const UiSlice = createSlice({
  name: '@ui/customization',
  initialState: initialState,
  reducers: {
    setMenu(state, action) {
      state.opened = action.payload;
    },
    menuOpen(state, action) {
      state.isOpen = action.payload;
    },
    setFontFamily(state, action) {
      state.fontFamily = action.payload;
    },
  },
});

export const { setMenu, menuOpen, setFontFamily } = UiSlice.actions;

export default UiSlice;
