import { combineReducers } from 'redux';
import {
  menuReducer,
  menuIdReducer,
  activeReducer,
  categoryReducer,
} from './rootReducer';

export const rootReducer = combineReducers({
  menuReducer,
  menuIdReducer,
  activeReducer,
  categoryReducer,
});
