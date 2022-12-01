import { USER_MEMBER_ID, USER_MEMBER_PASSWORD, USER_MEMBER_BUSINESSNUMBER, IS_LOGIN } from '../action/action';

const initialState = {
   id: '',
   password: '',
   businessNumber: '',
   isLogin: false
};

export const userMemberReducer = (state = initialState, action) => {
   switch (action.type) {
      case USER_MEMBER_ID:
         return {
            ...state,
            id: action.payload
         };

      case USER_MEMBER_PASSWORD:
         return {
            ...state,
            password: action.payload
         };

      case USER_MEMBER_BUSINESSNUMBER:
         return {
            ...state,
            businessNumber: action.payload
         };

      case IS_LOGIN:
         return { ...state, isLogin: action.payload };
      default:
         return state;
   }
};
