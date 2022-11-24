import { combineReducers } from "redux";
// import { menuReducer, menuIdReducer, activeReducer } from './menuReducer';
import { gnbReducer } from "./gnbReducer";
import { adminReducer } from "./adminReducer";
import menuUserItemReducer from "./menuUserItemReducer";
import categoryUserItemReducer from "./categoryUserItemReducer";
import userMemberReducer from "./userMemberReducer";

export const rootReducer = combineReducers({
  // menuReducer,
  // menuIdReducer,
  // activeReducer,
  gnbReducer,
  adminReducer,
  menuUserItemReducer,
  categoryUserItemReducer,
  userMemberReducer,
});
