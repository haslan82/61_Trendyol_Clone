import {createSlice} from '@reduxjs/toolkit';
import { FavoriteState } from '../../models/data/favoriteState';




const initialState: FavoriteState = {
  favorites: [],
  pending: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: 'favrites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const exitingProduct = state.favorites.find(item => item.id === product.id);
      if (exitingProduct) {
        exitingProduct.isFavorite=false;
        state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
      } else {
        state.favorites.push({...product, isFavorite: true});
      } 
    },
  
   
    /* removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.id !== productId);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    }, */
  },
});
export const {addFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
