export const CLICK_TO_StoreInfoUpdate = 'CLICK_TO_StoreInfoUpdate';
export const CREATE_QR = 'CREATE_QR';
export const REGISTER_TABLE_NUM = 'REGISTER_TABLE_NUM';
export const SET_OVERLAP_NUM_STATE = 'SET_OVERLAP_NUM_STATE';
export const SET_SEVED_TABLE_NUM = 'SET_SEVED_TABLE_NUM';
export const MODIFYING_SAVED_TABLE_NUM = 'MODIFYING_SAVED_TABLE_NUM';
export const SAVED_TABLE_LIST_CHECKBOX_ARR = 'SAVED_TABLE_LIST_CHECKBOX_ARR';
export const QR_LIST_ALL_CHECK = 'QR_LIST_ALL_CHECK';
export const PRINT_MODAL = 'PRINT_MODAL';
export const CLEAR_SAVED_TABLE_LIST_CHECKBOX_ARR = 'CLEAR_SAVED_TABLE_LIST_CHECKBOX_ARR';

export const storeInfoUpdate = () => {
   return {
      type: CLICK_TO_StoreInfoUpdate,
   };
};

export const createQr = QrList => {
   return {
      type: CREATE_QR,
      payload: {
         QrList,
      },
   };
};

export const registerTableNum = (tableNum, idx) => {
   return {
      type: REGISTER_TABLE_NUM,
      payload: {
         tableNum,
         idx,
      },
   };
};
export const setOverlapNumState = chack => {
   return {
      type: SET_OVERLAP_NUM_STATE,
      payload: {
         chack,
      },
   };
};
export const setSavedTebleNum = chack => {
   return {
      type: SET_SEVED_TABLE_NUM,
      payload: {
         chack,
      },
   };
};
export const modifyingSavedTableNum = chack => {
   return {
      type: MODIFYING_SAVED_TABLE_NUM,
      payload: {
         chack,
      },
   };
};
export const savedTableListCheckBoxArr = idx => {
   return {
      type: SAVED_TABLE_LIST_CHECKBOX_ARR,
      payload: {
         idx,
      },
   };
};
export const clearSavedTableListCheckBoxArr = () => {
   return {
      type: CLEAR_SAVED_TABLE_LIST_CHECKBOX_ARR,
   };
};
export const qrListAllCheck = chack => {
   return {
      type: QR_LIST_ALL_CHECK,
      payload: {
         chack,
      },
   };
};
export const printModal = chack => {
   return {
      type: PRINT_MODAL,
      payload: {
         chack,
      },
   };
};
