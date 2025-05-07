import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  // console.log(params)
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
    // console.log(response.data)
    if (response.data && response.data.token) {
      await AsyncStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    //  console.log('error: ' + JSON.stringify(error))
    //console.log('error: ' + (error))
    return error;
  }
});


const userLogOut = createAsyncThunk('auth/userLogOut', async () => {
  try {
    await AsyncStorage.removeItem('token');
    return null;
  } catch (error) {
    return error;
  }
});

export {userLogin, userLogOut};
