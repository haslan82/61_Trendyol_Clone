import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import { getBestSellerProducts, getPopularProducts } from '../actions/productsActions';


const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      /*  .addCase(getBestSellerProducts.pending, (state, action) => {
         
        }) */

      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload;
      })

    /*  .addCase(getBestSellerProducts.rejected, (state, action) => {
         
        }); */


        .addCase(getPopularProducts.fulfilled, (state, action) => {
          state.popularProducts = action.payload;
        });
  },
});
export default productSlice.reducer;
