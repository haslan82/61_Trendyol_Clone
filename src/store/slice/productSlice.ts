import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import { getAllProducts, getBestSellerProducts, getPopularProducts, getProductDetail } from '../actions/productsActions';


const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  product:{},
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      /*  .addCase(getBestSellerProducts.pending, (state, action) => {}) */

      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload;
      })

    /*  .addCase(getBestSellerProducts.rejected, (state, action) => {}); */


        .addCase(getPopularProducts.fulfilled, (state, action) => {
          state.popularProducts = action.payload;
        })

        .addCase(getProductDetail.fulfilled, (state, action) => {
          state.product = action.payload;
        });


  },
});
export default productSlice.reducer;
