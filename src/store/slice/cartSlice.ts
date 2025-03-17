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
      const product = action.payload;
      const exitingProduct = state.cart.find(item => item.id === product.id);
      if (exitingProduct) {
        exitingProduct.quantity += 1; // trendyol 5   1:50
      } else {
        state.cart.push({...product, quantity: 1});
      }
      state.totalPrice += product.price;
      // state.totalPrice = state.cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
    },
    increaseQuantity: (state, action) => {
      //console.log(process)
      const {id} = action.payload;
      const item = state.cart.find(item => item.id === id);
      //console.log(item)
      if (item) item.quantity += 1;

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },

    decreaseQuantity: (state, action) => {
      //console.log(process)
      const {id} = action.payload;
      const item = state.cart.find(item => item.id === id);
      //console.log(item)

      //if(item) item.quantity>0 ? item.quantity -= 1 : null;
      if (item && item.quantity > 0) item.quantity -= 1;
      if (item?.quantity === 0)
        state.cart = state.cart.filter(item => item.id !== id);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.id !== productId);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
  },
});
export const {addCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
