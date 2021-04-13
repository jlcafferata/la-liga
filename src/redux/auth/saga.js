import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { removeToken, setToken } from "../../helpers/auth-header";
import { authService } from "../../services";
import { LOGIN_USER } from "../actions";
import { loginUserError, loginUserSuccess } from "./actions";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) => {
  return await authService
    .login(email, password)
    .then((authUser) => authUser)
    .catch((error) => error);
};

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload;
  try {
    removeToken();
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
    if (!loginUser.message) {
      setToken(loginUser.token);
      yield put(loginUserSuccess(loginUser));
    } else {
      yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
}
