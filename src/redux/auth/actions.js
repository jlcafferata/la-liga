import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../actions";

export const loginUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});
