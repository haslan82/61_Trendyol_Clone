import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload
      const exitingProduct =state.cart.find(item=> item.id === product.id)
      if(exitingProduct){
        exitingProduct.quantity += 1;  // trendyol 5   1:50
      } else  {
        state.cart.push({...product, quantity: 1});
      }
      state.totalPrice += product.price;
   // state.totalPrice = state.cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
    },
  },
});
export const {addCart} =cartSlice.actions;
export default cartSlice.reducer;
