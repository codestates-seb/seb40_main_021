import { IS_LOGIN } from '../action/action';

const initialState = {
   isLogin: false
};
export const isLoginReducer = (state = initialState, action) => {
   switch (action.type) {
      case IS_LOGIN:
         return { ...state, isLogin: action.payload };
      default:
         return state;
   }
};
