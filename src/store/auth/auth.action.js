export const LOGIN_START = 'loginStart';
export const LOGIN_SUCCESS = 'loginSuccess';
export const LOGIN_FAILURE = 'loginFailure';
export const LOGOUT_SUCCESS = 'logoutSuccess';

export const loginSuccess = { type: LOGIN_SUCCESS }
export const logoutSuccess = { type: LOGOUT_SUCCESS }

export const userLogin = (data) => { return { ...loginSuccess, payload: data } };
export const userLogout = () => { return logoutSuccess };
