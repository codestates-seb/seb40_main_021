import { CLICK_TO_StoreInfoUpdate } from '../action/action';
const initialState = { data: { storeInfoUpdateState: false } };
const adminReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLICK_TO_StoreInfoUpdate:
         const currenState = state.data.storeInfoUpdateState;
         return Object.assign({}, state, { data: { storeInfoUpdateState: !currenState } });

      default:
         return state;
   }
};

export default adminReducer;
