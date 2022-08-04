import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: null,
    user: null,
    loading: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.accessToken = null;
      state.user = null
    },
    loginStart: (state) => {
      state.loading = true;
    }
  }
})

export const { loginSuccess, logoutSuccess, loginStart } = authSlice.actions;
export const authReducer = authSlice.reducer;
