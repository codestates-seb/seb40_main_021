import {
   MENU_USER_ADD,
   MENU_USER_UPDATE,
   MENU_USER_DELETE,
   ERROR_CASE_HANDLE,
   EROOR_TO_SUBMIT,
   MENU_GET_ADD_USER,
   DELETE_CATEGORY_RESTE_MENU
} from '../action/action';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
   data: []
};

const menuUserItemReducer = (state = initialState, action) => {
   switch (action.type) {
      case MENU_GET_ADD_USER:
         // eslint-disable-next-line no-case-declarations
         const dataSet = action.payload.res.data.menus.map(el => {
            return {
               ...el,
               errorMessage: {
                  menuName: '',
                  menuContent: '',
                  price: '',
                  menuImage: ''
               },
               uuid: uuidv4()
            };
         });
         // state.data = dataSet;
         return Object.assign({}, state, { data: dataSet });
      case MENU_USER_ADD:
         // eslint-disable-next-line no-case-declarations
         let changeData = [...state.data, action.payload.res];
         return Object.assign({}, state, { data: changeData });
      case MENU_USER_UPDATE:
         state.data.find(x => x.uuid === action.payload.id).menuName = action.payload.menuNameValue;
         state.data.find(x => x.uuid === action.payload.id).menuContent = action.payload.menuAboutValue;
         state.data.find(x => x.uuid === action.payload.id).menuImage = action.payload.menuImgValue;
         state.data.find(x => x.uuid === action.payload.id).price = action.payload.pricesValue;
         state.data.find(x => x.uuid === action.payload.id).recommendedMenu = action.payload.checked;
         return state;
      case MENU_USER_DELETE:
         // eslint-disable-next-line no-case-declarations
         const deletMenu = state.data.filter(el => el.uuid !== action.payload.id);
         return Object.assign({}, state, { data: deletMenu });
      case ERROR_CASE_HANDLE:
         state.data.find(x => x.uuid === action.payload.id).errorMessage = action.payload.message;
         return Object.assign({}, state);
      case EROOR_TO_SUBMIT:
         // eslint-disable-next-line no-case-declarations
         let number = String(state.data[action.payload.idx].price);
         if (state.data[action.payload.idx].menuName.length < 2)
            state.data[action.payload.idx].errorMessage.menuName = '메뉴 명을 작성해주세요.';
         if (number.length < 2) state.data[action.payload.idx].errorMessage.price = '가격을 작성해주세요.';
         if (state.data[action.payload.idx].menuContent.length < 2)
            state.data[action.payload.idx].errorMessage.menuContent = '메뉴 설명을 작성해주세요.';
         return state;
      case DELETE_CATEGORY_RESTE_MENU:
         state = initialState;
         return state;
      default:
         return state;
   }
};

export default menuUserItemReducer;
