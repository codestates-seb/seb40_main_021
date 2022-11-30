export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_MENU = 'SET_MENU';
export const GET_SELECTED_MENU = 'GET_SELECTED_MENU';
export const PUT_CARTITEM = 'PUT_CARTITEM';
export const MINUS_QUANTITY = 'MINUS_QUANTITY';
export const PLUS_QUANTITY = 'PLUS_QUANTITY';
export const DELETE_MENU = 'DELETE_MENU';
export const EMPTY_CART = 'EMPTY_CART';
export const SET_ORDER_MENUS = 'SET_ORDER_MENUS';

export const SAVE_MENUID = 'SAVE_MENUID';
export const MENU_SELECTED = 'MENU_SELECTED';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const SET_STOREINFO = 'SET_STOREINFO';
export const NO_HEADER = 'NO_HEADER';
export const PARAMS = 'PARAMS';

////////////////////////////////////////////////////
//menuReducer

// 카테고리 저장
export const setCategory = res => {
   return {
      type: SET_CATEGORY,
      payload: res
   };
};
// 메뉴 저장
export const setMenu = res => {
   return {
      type: SET_MENU,
      payload: res
   };
};
// 선택한 메뉴
export const getSelectedMenu = res => {
   return {
      type: GET_SELECTED_MENU,
      payload: res
   };
};

// 장바구니에 담기
export const putItem = res => {
   return {
      type: PUT_CARTITEM,
      payload: res
   };
};
// 장바구니 수량 빼기
export const minusQuantity = res => {
   return {
      type: MINUS_QUANTITY,
      payload: res
   };
};
// 장바구니 수량 더하기
export const plusQuantity = res => {
   return {
      type: PLUS_QUANTITY,
      payload: res
   };
};
// 장바구니 메뉴 삭제
export const deleteMenu = res => {
   return {
      type: DELETE_MENU,
      payload: res
   };
};
// 장바구니 비우기
export const emptyCart = () => {
   return {
      type: EMPTY_CART
   };
};
// 주문한 내역 저장
export const orderedList = res => {
   return {
      type: SET_ORDER_MENUS,
      payload: res
   };
};
// 가게 정보 저장
export const setStoreInfo = res => {
   return {
      type: SET_STOREINFO,
      payload: res
   };
};

//////////////////////////////////////////////////////
//stateReducer

// 선택한 메뉴 아이디 저장
export const saveMenuId = res => {
   return {
      type: SAVE_MENUID,
      payload: res
   };
};
// 메뉴 상세 모달 active
export const activate = res => {
   return {
      type: MENU_SELECTED,
      payload: res
   };
};
// 활성화된 카테고리
export const activateCategory = res => {
   return {
      type: CATEGORY_SELECTED,
      payload: res
   };
};
// admin header 제어
export const noHeader = res => {
   return {
      type: NO_HEADER,
      payload: res
   };
};
// params 저장
export const setParams = res => {
   return {
      type: PARAMS,
      payload: res
   };
};
