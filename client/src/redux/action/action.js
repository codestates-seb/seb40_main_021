export const CLICK_TO_StoreInfoUpdate = 'CLICK_TO_StoreInfoUpdate';
export const GNB_MOBILE = 'GNB_MOBILE'
export const MENU_USER_UPDATE = 'MENU_USER_UPDATE'
export const MENU_USER_ADD = 'MENU_USER_ADD'
export const MENU_USER_DELETE = 'MENU_USER_DELETE'
export const ERROR_CASE_HANDLE = 'ERROR_CASE_HANDLE'

export const storeInfoUpdate = () => {
   return {
      type: CLICK_TO_StoreInfoUpdate,
   };
};

export const gnbToggleOpen = (res) => {
   return {
      type: GNB_MOBILE,
      payload: res,
   };
};

export const menuUserAdd = (res) => {
   return {
      type: MENU_USER_ADD,
      payload: { res }
   }
}
export const menuUserUpdate = (id, menuAboutValue, menuNameValue, menuImgValue, pricesValue, checked) => {
   return {
      type: MENU_USER_UPDATE,
      payload: {
         id,
         menuAboutValue,
         menuNameValue,
         menuImgValue,
         pricesValue,
         checked
      }
   }
}

export const menuUserDelete = (id) => {
   return {
      type: MENU_USER_DELETE,
      payload: {
         id
      }
   }
}

export const menuUserErrorMessage = (id, message) => {
   return {
      type: ERROR_CASE_HANDLE,
      payload: {
         id,
         message
      }
   }
}