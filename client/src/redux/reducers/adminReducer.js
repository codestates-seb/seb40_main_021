import {
   CLICK_TO_StoreInfoUpdate,
   CREATE_QR,
   REGISTER_TABLE_NUM,
   SET_OVERLAP_NUM_STATE,
   SET_SEVED_TABLE_NUM,
   MODIFYING_SAVED_TABLE_NUM,
   SAVED_TABLE_LIST_CHECKBOX_ARR,
   QR_LIST_ALL_CHECK,
   PRINT_MODAL,
} from '../action/action';
const adminState = {
   printModal: false,
   qrListAllCheck: false,
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
         const currenStoreInfoUpdateState = state.storeInfoUpdateState;
         return Object.assign({}, state, { storeInfoUpdateState: !currenStoreInfoUpdateState });
      case CREATE_QR:
         return Object.assign({}, state, { qrDate: action.payload.QrList });

      case REGISTER_TABLE_NUM:
         state.qrDate[action.payload.idx].tableNum = action.payload.tableNum;
         state.qrDate[
            action.payload.idx
         ].qrURL = `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/${action.payload.tableNum}`;
         return Object.assign({}, state, { state });

      case SET_OVERLAP_NUM_STATE:
         return Object.assign({}, state, { tableNumInputValueOverlap: action.payload.chack });
      case SET_SEVED_TABLE_NUM:
         return Object.assign({}, state, { setSavedTebleNum: action.payload.chack });
      case MODIFYING_SAVED_TABLE_NUM:
         return Object.assign({}, state, { modifyingSavedTableNum: action.payload.chack });
      case SAVED_TABLE_LIST_CHECKBOX_ARR:
         let newSavedTableListCheckBoxArr = [];
         if (state.savedTableListCheckBoxArr.includes(action.payload.idx)) {
            for (let i = 0; i < state.savedTableListCheckBoxArr.length; i++) {
               if (state.savedTableListCheckBoxArr[i] === action.payload.idx) {
                  state.savedTableListCheckBoxArr.splice(i, 1);
                  i--;
               }
            }
            newSavedTableListCheckBoxArr = [...state.savedTableListCheckBoxArr];
         } else {
            newSavedTableListCheckBoxArr = [...state.savedTableListCheckBoxArr, action.payload.idx];
         }
         return Object.assign({}, state, { savedTableListCheckBoxArr: newSavedTableListCheckBoxArr });
      case QR_LIST_ALL_CHECK:
         return Object.assign({}, state, { qrListAllCheck: action.payload.chack });
      case PRINT_MODAL:
         return Object.assign({}, state, { printModal: action.payload.chack });
      default:
         return state;
   }
};

export default adminReducer;
