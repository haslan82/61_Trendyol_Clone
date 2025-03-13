import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
       state.cart.push(action.payload);
    },
  },
});
export const {addCart} =cartSlice.actions;
export default cartSlice.reducer;
