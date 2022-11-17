export const GET_SELECTED_MENU = 'GET_SELECTED_MENU';
export const SAVE_MENUID = 'SAVE_MENUID';
export const MENU_SELECTED = 'MENU_SELECTED';
export const PUT_CARTITEM = 'PUT_CARTITEM';
export const EMPTY_CART = 'EMPTY_CART';
export const ORDER_MENUS = 'ORDER_MENUS';
export const DELETE_MENU = 'DELETE_MENU';
export const MINUS_QUANTITY = 'MINUS_QUANTITY';
export const PLUS_QUANTITY = 'PLUS_QUANTITY';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';

export const getSelectedMenu = (res) => {
  return {
    type: GET_SELECTED_MENU,
    payload: res,
  };
};

export const saveMenuId = (res) => {
  return {
    type: SAVE_MENUID,
    payload: res,
  };
};

export const activate = (res) => {
  return {
    type: MENU_SELECTED,
    payload: res,
  };
};

export const activateCategory = (res) => {
  return {
    type: CATEGORY_SELECTED,
    payload: res,
  };
};

export const putItem = (res) => {
  return {
    type: PUT_CARTITEM,
    payload: res,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const orderMenu = (res) => {
  return {
    type: ORDER_MENUS,
    payload: res,
  };
};

export const deleteMenu = (res) => {
  {
    return {
      type: DELETE_MENU,
      payload: res,
    };
  }
};

export const minusQuantity = (res) => {
  {
    return {
      type: MINUS_QUANTITY,
      payload: res,
    };
  }
};

export const plusQuantity = (res) => {
  {
    return {
      type: PLUS_QUANTITY,
      payload: res,
    };
  }
};
