import { createSlice } from "@reduxjs/toolkit"
import {  ProductsState } from "../../models/data/productsState"

const initialState: ProductsState = {
    products:[],
    deneme:'deneme',
  }


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
  })
  export default productSlice.reducer

