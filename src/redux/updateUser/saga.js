import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { usersService } from "../../services";
import { UPDATE_USER, DELETE_USER } from "../actions";
import {
  updateUserError,
  updateUserSuccess,
  deleteUserSuccess,
  deleteUserError,
} from "./actions";

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER, deleteUser);
}

const deleteUserAsync = async ({user}) => {
  return await usersService
    ._delete(user.id)
    .then((result) => result)
    .catch((error) => error);
};

function* deleteUser(user) {
  console.log("deleteUser :>> ", user);
  try {
    const result = yield call(deleteUserAsync, user);
    if (!result.message) {
      yield put(deleteUserSuccess());
    } else {
      yield put(deleteUserError(result.message));
    }
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUser);
}

const updateUserAsync = async (user) => {
  return await usersService
    .update(user)
    .then((result) => result)
    .catch((error) => error);
};

function* updateUser(user) {
  try {
    const result = yield call(updateUserAsync, user);
    if (!result.message) {
      yield put(updateUserSuccess());
    } else {
      yield put(updateUserError(result.message));
    }
  } catch (error) {
    yield put(updateUserError(error));
  }
}

export default function* rootSaga() {
  yield all([fork(watchUpdateUser), fork(watchDeleteUser)]);
}
