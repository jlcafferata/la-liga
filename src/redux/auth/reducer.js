import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../actions";

const INIT_STATE = {
  user: localStorage.getItem("user_id"),
  loading: false,
  error: "",
  isAutenticated:false
};

const reducer =(state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: "", isAutenticated:true };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
        isAutenticated:false
      };
    default:
      return { ...state };
  }
};

export default reducer;