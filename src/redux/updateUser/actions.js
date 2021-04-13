import {
  DELETE_USER,

  DELETE_USER_ERROR, DELETE_USER_SUCCESS,

  RESET_FLAGS, UPDATE_USER,

  UPDATE_USER_ERROR, UPDATE_USER_SUCCESS
} from "../actions";

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    user: payload,
  };
};

export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserError = (message) => ({
  type: UPDATE_USER_ERROR,
  payload: { message },
});

export const deleteUser = (payload) => {
  console.log("deleteUser :>> ", payload);
  return {
    type: DELETE_USER,
    user: payload,
  };
};

export const deleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserError = (message) => ({
  type: DELETE_USER_ERROR,
  payload: { message },
});

export const resetFlags = () => ({
  type: RESET_FLAGS,
});
