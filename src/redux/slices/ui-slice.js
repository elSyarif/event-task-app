import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: [],
   fontFamily: `'Poppins', sans-serif`,
   borderRadius: 12,
   opened: true
};

const UiSlice = createSlice({
   name: '@ui/custumaize',
   initialState: initialState,
   reducers: {
      customozation(state, action) {}
   }
});

export default UiSlice;
