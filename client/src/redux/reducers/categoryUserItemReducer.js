import {
   SET_USER_ADD_CATEGORY,
   CHANGE_INPUT,
   SET_USER_MODIFY_CATEGORY,
   CHANGE_NOW_INPUT,
   DELETE_CATEGORY,
   GET_USER_POST_SUCCESS
} from '../action/action';

const initialState = {
   input: {
      categoryName: ''
   },
   data: []
};

const categoryUserItemReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER_POST_SUCCESS:
         if (action.payload.length !== 0) {
            return {
               ...state,
               data: action.payload
            };
         }
         console.log(state);
         return state;

      case SET_USER_ADD_CATEGORY:
         // eslint-disable-next-line no-case-declarations
         let changeData = [...state.data, action.payload.res];
         console.log(changeData, 'changeData');
         return Object.assign({}, state, { data: changeData });
      case SET_USER_MODIFY_CATEGORY:
         state.data[action.payload.idx].categoryName = action.payload.res;
         return state;
      case CHANGE_INPUT:
         return {
            ...state,
            input: {
               ...state.input,
               categoryName: action.payload
            }
         };
      case CHANGE_NOW_INPUT:
         state.input.categoryName = state.data[action.payload.idx].categoryName;
         return state;
      case DELETE_CATEGORY:
         // eslint-disable-next-line no-case-declarations
         const deletMenu = state.data.filter((_el, idx) => idx !== action.payload.idx);
         return Object.assign({}, state, { data: deletMenu });
      default:
         return state;
   }
};

export default categoryUserItemReducer;
