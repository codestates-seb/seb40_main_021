import { MENU_VIEW_ITEM_ADD, DELETE_CATEGORY_RESTE_MENU_MENU } from '../action/action';

const initialState = {
   data: []
};

const menuSaveItemReducer = (state = initialState, action) => {
   switch (action.type) {
      case MENU_VIEW_ITEM_ADD:
         // eslint-disable-next-line no-case-declarations
         const dataSet = action.payload.res.data;
         state.data = dataSet;
         return state;
      case DELETE_CATEGORY_RESTE_MENU_MENU:
         state.data = [];
         return Object.assign({}, state);
      default:
         return state;
   }
};

export default menuSaveItemReducer;
