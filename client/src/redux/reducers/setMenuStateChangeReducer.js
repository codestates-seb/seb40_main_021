import { SET_MENU_UPDATE } from '../action/action';
const initalState = false;
const setmenuStateChangeReducer = (state = initalState, action) => {
   switch (action.type) {
      case SET_MENU_UPDATE:
         state = action.payload;
         return state;
      default:
         return state;
   }
};

export default setmenuStateChangeReducer;
