import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
   // console.log(params)
   try {
      const response = await postRequest(params, AUTH_URLS.LOGIN);
      //console.log(response.data) 
 return response.data;

   } catch (error) {
  //  console.log('error: ' + JSON.stringify(error))
    //console.log('error: ' + (error))
    return error;
   }


});

export {userLogin};
