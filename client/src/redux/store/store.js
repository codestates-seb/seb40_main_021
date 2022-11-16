import { createStore } from 'redux';
import adminReducer from '../reducers/adminReducer';

const store = createStore(adminReducer);

export default store;
