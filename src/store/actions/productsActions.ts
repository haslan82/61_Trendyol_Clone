import { PRODUCTS_URLS } from './../../service/urls';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import { Params } from '../../models/data/productsState';


const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: object) => {
    //console.log(params);

const productUrl = params.category == "Tümü" ? PRODUCTS_URLS.ALL_PRODUCTS : `${PRODUCTS_URLS.CATEGORY_PRODUCTS}/${params.category}`

    // console.log(productUrl)

    const response = await getRequest(
      params,
      productUrl
     
    );
    //console.log(response.data);
    //console.log(response.status)
    // console.log("products",response.data);
    return response.data;
  },
);


const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.BEST_SELLER_PRODUCTS,
    );
    // console.log("products",response.data);
    return response.data;
  },
);
const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URLS.POPULAR_PRODUCTS);
    // console.log("products",response.data);
    return response.data;
  },
);


const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (params: Params) => {
    const productUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, productUrl);
// console.log(productUrl);
// console.log(response.data);
    return response.data;
  },
);



export {getBestSellerProducts, getPopularProducts, getProductDetail,getAllProducts};
