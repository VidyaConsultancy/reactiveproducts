import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../services/auth";

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: null,
    user: null,
    loading: false,
    error: null
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
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
})

export const { loginSuccess, logoutSuccess, loginStart, loginFailure } = authSlice.actions;
export const authReducer = authSlice.reducer;

// thunk function creator
export const asyncLogin = (data) => {
  return async (dispatch) => { // thunk function
    try {
      dispatch(loginStart());
      const res = await signin(data);
      localStorage.setItem("accessToken", res.accessToken);
      dispatch(loginSuccess(res));
    } catch (error) {
      console.log(error);
      dispatch(loginFailure({ error: error.response.data}))
    }
  }
}
