import {
   CLICK_TO_StoreInfoUpdate,
   CREATE_QR,
   REGISTER_TABLE_NUM,
   SET_OVERLAP_NUM_STATE,
   SET_SEVED_TABLE_NUM,
   MODIFYING_SAVED_TABLE_NUM,
   SAVED_TABLE_LIST_CHECKBOX_ARR,
} from '../action/action';
const adminState = {
   storeInfoUpdateState: false,
   qrDate: [],
   savedTableListCheckBoxArr: [],
   tableNumInputValueOverlap: false,
   setSavedTebleNum: false,
   modifyingSavedTableNum: false,
};

const adminReducer = (state = adminState, action) => {
   switch (action.type) {
      case CLICK_TO_StoreInfoUpdate:
         const currenState = state.storeInfoUpdateState;
         return Object.assign({}, state, { storeInfoUpdateState: !currenState });
      case CREATE_QR:
         return Object.assign({}, state, { qrDate: action.playload.QrList });

      case REGISTER_TABLE_NUM:
         state.qrDate[action.playload.idx].tableNum = action.playload.tableNum;
         state.qrDate[
            action.playload.idx
         ].qrURL = `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/${action.playload.tableNum}`;
         return Object.assign({}, state, { state });

      case SET_OVERLAP_NUM_STATE:
         return Object.assign({}, state, { tableNumInputValueOverlap: action.playload.chack });
      case SET_SEVED_TABLE_NUM:
         return Object.assign({}, state, { setSavedTebleNum: action.playload.chack });
      case MODIFYING_SAVED_TABLE_NUM:
         return Object.assign({}, state, { modifyingSavedTableNum: action.playload.chack });
      case SAVED_TABLE_LIST_CHECKBOX_ARR:
         let newSavedTableListCheckBoxArr = [];
         if (state.savedTableListCheckBoxArr.includes(action.playload.idx)) {
            for (let i = 0; i < state.savedTableListCheckBoxArr.length; i++) {
               if (state.savedTableListCheckBoxArr[i] === action.playload.idx) {
                  state.savedTableListCheckBoxArr.splice(i, 1);
                  i--;
               }
            }
            newSavedTableListCheckBoxArr = [...state.savedTableListCheckBoxArr];
         } else {
            newSavedTableListCheckBoxArr = [...state.savedTableListCheckBoxArr, action.playload.idx];
         }
         return Object.assign({}, state, { savedTableListCheckBoxArr: newSavedTableListCheckBoxArr });

      default:
         return state;
   }
};

export default adminReducer;
