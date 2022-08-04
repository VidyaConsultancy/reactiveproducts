import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from "./auth.slice";
/* 
import { createStore, combineReducer } from "react-redux";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./product/product.reducer";

const rootReducer = combineReducer({ 
  auth: authReducer,
  user: userReducer,
  product: productReducer
})

const store = createStore(rootReducer)
*/


export const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    // product: productReducer
  }
})

// const state = store.getState();
// const dispatch = store.dispatch;
