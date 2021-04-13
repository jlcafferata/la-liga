/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import userSagas from "./updateUser/saga";

export default function* rootSaga() {
  yield all([authSagas(), userSagas()]);
}
