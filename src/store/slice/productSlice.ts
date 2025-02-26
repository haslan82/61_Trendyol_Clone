import { createSlice } from "@reduxjs/toolkit"
import {  ProductsState } from "../../models/data/productsState"

const initialState: ProductsState = {
    products:[],
  }


export const productSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

    },
  })
  export default productSlice.reducer

export const increment = () => ({ type: 'products/increment' })
export const decrement = () => ({ type: 'products/decrement' })
export const incrementByAmount = (amount: number) => ({ type: 'products/incrementByAmount', payload: amount })
export const decrementByAmount = (amount: number) => ({ type: 'products/decrementByAmount', payload: amount })

export type CounterState = ReturnType<typeof productSlice.reducer>
export type CounterActions = typeof increment | typeof decrement | typeof incrementByAmount | typeof decrementByAmount

