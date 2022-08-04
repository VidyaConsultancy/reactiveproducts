import { LOGIN_START, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./auth.action";

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, accessToken: action.payload.accessToken, user: action.payload.user };

    case LOGOUT_SUCCESS:
      return { ...state, accessToken: null, user: null };

    default:
      return state;
  }
}
