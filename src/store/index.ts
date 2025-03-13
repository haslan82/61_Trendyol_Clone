import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slice/productSlice';
import { categoriesSlice } from './slice/categoiesSlice';
import { cartSlice } from './slice/cartSlice';

export const store = configureStore({
  reducer: {
   products:productSlice.reducer,
   categories:categoriesSlice.reducer,
   cart:cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
