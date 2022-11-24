import {
  USER_MEMBER_ID,
  USER_MEMBER_PASSWORD,
  USER_MEMBER_BUSUNESSNUMBER,
} from "../action/action";

const initialState = {
  id: "",
  password: "",
  businessNumber: "",
};

const userMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_MEMBER_ID:
      return {
        ...state,
        id: action.payload,
      };

    case USER_MEMBER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case USER_MEMBER_BUSUNESSNUMBER:
      return {
        ...state,
        businessNumber: action.payload,
      };
    default:
      return state;
  }
};

export default userMemberReducer;
