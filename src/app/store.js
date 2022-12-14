import { configureStore } from '@reduxjs/toolkit';
//1.
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    //2.
    auth: authReducer
    //3.tinggal Dispatch  actionnya di komponen login.jsx
  },
});
