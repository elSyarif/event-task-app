import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isOpen: [],
   fontFamily: `'Poppins', sans-serif`,
   borderRadius: 12,
   opened: true
};

const UiSlice = createSlice({
   name: '@ui/customization',
   initialState: initialState,
   reducers: {
      setMenu(state, action) {
		  return {
			  ...state,
			  opened: action.opened
		  }
	  },
	  setFontFamily(state, action){
		  return{
			  ...state,
			  fontFamily: action.fontFamily
		  }
	  }
   }
});

export default UiSlice;
