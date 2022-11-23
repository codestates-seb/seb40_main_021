import { combineReducers } from 'redux';
import { menuReducer } from './menuReducer';
import { stateReducer } from './stateReducer';

export const rootReducer = combineReducers({
  menuReducer,
  stateReducer
});
