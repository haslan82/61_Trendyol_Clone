import {createAsyncThunk} from '@reduxjs/toolkit';
import {USERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';



const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: object) => {
    const userUrl = `${USERS_URL.USERS}/${params.id}`;

    const response = await getRequest(params, userUrl);
// console.log("==>",response.data);
    return response.data;
  },
);
export {getUserInfo};
