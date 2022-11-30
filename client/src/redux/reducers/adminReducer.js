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
   CLEAR_SAVED_TABLE_LIST_CHECKBOX_ARR,
   UPDATE_TABLE_NUMBER,
   REGIST_UPDATE_TABLE_NUMBER,
   GET_QR_DATA,
   STORE_INFO_DATA,
   ALARMDATA_UPDATE
} from '../action/action';
const adminState = {
   apiUrl: 'http://ec2-15-164-244-227.ap-northeast-2.compute.amazonaws.com',
   printModal: false,
   qrListAllCheck: false,
   storeInfoUpdateState: false,
   qrDate: [],
   savedTableListCheckBoxArr: [],
   tableNumInputValueOverlap: false,
   setSavedTebleNum: false,
   modifyingSavedTableNum: false,
   storeInfoData: null,
   updateTableNumber: [],
   alarmData: { orderAlarmReverse: [], callAlarmReverse: [] }
};

export const adminReducer = (state = adminState, action) => {
   switch (action.type) {
      case CLICK_TO_StoreInfoUpdate:
         // eslint-disable-next-line no-case-declarations
         const currenStoreInfoUpdateState = state.storeInfoUpdateState;
         return Object.assign({}, state, { storeInfoUpdateState: !currenStoreInfoUpdateState });

      case CREATE_QR:
         return Object.assign({}, state, { qrDate: action.payload.QrList });

      case REGISTER_TABLE_NUM:
         // eslint-disable-next-line no-case-declarations
         const url = `${window.location.protocol}//${window.location.host}`;
         state.qrDate[action.payload.idx].tableNumber = action.payload.tableNum;
         state.qrDate[
            action.payload.idx
         ].qrUrl = `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${url}/usermenu/${sessionStorage.getItem(
            'userId'
         )}/${action.payload.tableNum}`;
         return Object.assign({}, state, { state });

      case SET_OVERLAP_NUM_STATE:
         return Object.assign({}, state, { tableNumInputValueOverlap: action.payload.chack });
      case SET_SEVED_TABLE_NUM:
         return Object.assign({}, state, { setSavedTebleNum: action.payload.chack });
      case MODIFYING_SAVED_TABLE_NUM:
         return Object.assign({}, state, { modifyingSavedTableNum: action.payload.chack });
      case SAVED_TABLE_LIST_CHECKBOX_ARR:
         // eslint-disable-next-line no-case-declarations
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
      case CLEAR_SAVED_TABLE_LIST_CHECKBOX_ARR:
         return Object.assign({}, state, { savedTableListCheckBoxArr: [] });
      case UPDATE_TABLE_NUMBER:
         // eslint-disable-next-line no-case-declarations
         const newArr = state.updateTableNumber;

         for (let i = 0; i < state.savedTableListCheckBoxArr.length; i++) {
            const body = { idx: state.savedTableListCheckBoxArr[i], newTableNum: null };
            // const body = { idx: action.payload.idx, newTableNum: action.payload.newNum };
            newArr.push(body);
         }
         return Object.assign({}, state, { updateTableNumber: newArr });
      case REGIST_UPDATE_TABLE_NUMBER:
         // eslint-disable-next-line no-case-declarations
         const newUpateArr = state.updateTableNumber;
         newUpateArr.forEach(data => {
            if (data.idx === action.payload.idx) {
               data.newTableNum = action.payload.num;
            }
         });
         // newUpateArr[action.payload.idx].newTableNum = action.payload.num;
         console.log(newUpateArr);
         return Object.assign({}, state, { updateTableNumber: newUpateArr });
      case GET_QR_DATA:
         return Object.assign({}, state, { qrDate: action.payload.data });
      case STORE_INFO_DATA:
         return Object.assign({}, state, { storeInfoData: action.payload });
      case ALARMDATA_UPDATE:
         console.log(state.alarmData);
         return Object.assign({}, state, { alarmData: action.payload });
      default:
         return state;
   }
};
