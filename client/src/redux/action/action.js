export const CLICK_TO_StoreInfoUpdate = 'CLICK_TO_StoreInfoUpdate';
export const CREATE_QR = 'CREATE_QR';
export const REGISTER_TABLE_NUM = 'REGISTER_TABLE_NUM';
export const SET_OVERLAP_NUM_STATE = 'SET_OVERLAP_NUM_STATE';
export const SET_SEVED_TABLE_NUM = 'SET_SEVED_TABLE_NUM';

export const storeInfoUpdate = () => {
   return {
      type: CLICK_TO_StoreInfoUpdate,
   };
};

export const createQr = QrList => {
   return {
      type: CREATE_QR,
      playload: {
         QrList,
      },
   };
};

export const registerTableNum = (tableNum, idx) => {
   return {
      type: REGISTER_TABLE_NUM,
      playload: {
         tableNum,
         idx,
      },
   };
};
export const setOverlapNumState = chack => {
   return {
      type: SET_OVERLAP_NUM_STATE,
      playload: {
         chack,
      },
   };
};
export const setSavedTebleNum = chack => {
   return {
      type: SET_SEVED_TABLE_NUM,
      playload: {
         chack,
      },
   };
};
