import { combineReducers } from 'redux';
import { menuReducer, menuIdReducer, activeReducer } from './menuReducer';

export const rootReducer = combineReducers({
  menuReducer,
  menuIdReducer,
  activeReducer,
});
