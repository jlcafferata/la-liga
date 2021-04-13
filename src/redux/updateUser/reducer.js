import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  RESET_FLAGS
} from "../actions";

const INIT_STATE = {
  loading: false,
  error: "",
  isUpdated: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, loading: true, error: "", isUpdated: false };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, error: "", isUpdated: true };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        isUpdated: true,
      };
      case DELETE_USER:
        return { ...state, loading: true, error: "", isUpdated: false };
      case DELETE_USER_SUCCESS:
        return { ...state, loading: false, error: "", isUpdated: true };
      case DELETE_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
          isUpdated: true,
        };
      case RESET_FLAGS:
        return {
          ...state,
          ...INIT_STATE
        }
    default:
      return { ...state };
  }
};

export default reducer;
