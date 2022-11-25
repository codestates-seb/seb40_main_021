import { combineReducers } from 'redux';
import { gnbReducer } from './gnbReducer';
import { adminReducer } from './adminReducer';
import menuUserItemReducer from './menuUserItemReducer';
import categoryUserItemReducer from './categoryUserItemReducer';
import menuSaveItemReducer from './menuSaveItemReducer';
import { menuReducer } from './menuReducer';
import { stateReducer } from './stateReducer';
import userMemberReducer from './userMemberReducer';

export const rootReducer = combineReducers({
   menuReducer,
   stateReducer,
   gnbReducer,
   adminReducer,
   menuUserItemReducer,
   categoryUserItemReducer,
   menuSaveItemReducer,
   userMemberReducer
});
