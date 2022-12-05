import { CATEGORY_SELECTED, MENU_SELECTED, NO_HEADER, PARAMS, SAVE_MENUID } from '../actions/menuAction';

const nonFuncState = {
   menuId: null,
   bottomModal: false,
   category: 1,
   header: false,
   params: []
};

// 사용자페이지(메뉴판)에서 기타 상태관리를 위한 리듀서
export const stateReducer = (state = nonFuncState, action) => {
   switch (action.type) {
      // 선택한 메뉴 아이디 저장
      case SAVE_MENUID:
         return { ...state, menuId: action.payload };
      // 메뉴 상세 모달 active
      case MENU_SELECTED:
         return { ...state, bottomModal: action.payload };
      //  선택한 카테고리
      case CATEGORY_SELECTED:
         return { ...state, category: action.payload };
      case NO_HEADER:
         return { ...state, header: action.payload };
      case PARAMS:
         return { ...state, params: action.payload };

      default:
         return state;
   }
};
