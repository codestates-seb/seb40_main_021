import { combineReducers, legacy_createStore as createStore } from 'redux';
import { gnbGuideReducer, gnbReducer } from './gnbReducer';
import { adminReducer } from './adminReducer';
import menuUserItemReducer from './menuUserItemReducer';
import categoryUserItemReducer from './categoryUserItemReducer';
import menuSaveItemReducer from './menuSaveItemReducer';
import { menuReducer } from './menuReducer';
import { stateReducer } from './stateReducer';
import { previewToggleReducer } from './previewToggleReducer';
import setmenuStateChangeReducer from './setMenuStateChangeReducer';
import { userMemberReducer } from './userMemberReducer';
import { globalTokenReducer } from './globalTokenReducer';
import { isLoginReducer } from './isLoginReducer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['globalTokenReducer', 'isLoginReducer']
};

export const rootReducer = combineReducers({
   menuReducer,
   stateReducer,
   gnbReducer,
   adminReducer,
   menuUserItemReducer,
   categoryUserItemReducer,
   menuSaveItemReducer,
   previewToggleReducer,
   userMemberReducer,
   setmenuStateChangeReducer,
   globalTokenReducer,
   isLoginReducer,
   gnbGuideReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
   const store = createStore(persistedReducer);
   const persistor = persistStore(store);
   return { store, persistor };
}
