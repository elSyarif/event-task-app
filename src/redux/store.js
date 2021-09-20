import { configureStore } from '@reduxjs/toolkit';
import UiSlice from './slices/ui-slice';

const store = configureStore({
   reducer: {
      customization: UiSlice.reducer
   }
});

export default store;
