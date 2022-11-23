import { combineReducers } from 'redux';
import { gnbReducer } from './gnbReducer';
import { adminReducer } from './adminReducer';
import menuUserItemReducer from './menuUserItemReducer';
import categoryUserItemReducer from './categoryUserItemReducer';
import { menuReducer } from './menuReducer';
import { stateReducer } from './stateReducer';
export const rootReducer = combineReducers({
  menuReducer,
  stateReducer,
  gnbReducer,
  adminReducer,
  menuUserItemReducer,
  categoryUserItemReducer
});
