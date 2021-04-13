import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import updateUser from "./updateUser/reducer";

const reducers = combineReducers({
  authUser,
  updateUser
});

export default reducers;
