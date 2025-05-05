import {createSlice} from '@reduxjs/toolkit';
import { NotificationState } from '../../models/data/notificationState';

const initialState: NotificationState = {
  notifications: [],
  pending: false,
  error: null,
};


export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    
  },
});

export default notificationSlice.reducer;
