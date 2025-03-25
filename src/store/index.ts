import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoiesSlice';
import {cartSlice} from './slice/cartSlice';
import {authSlice} from './slice/authSlice';
import {favoriteSlice} from './slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
