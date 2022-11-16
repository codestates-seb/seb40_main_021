import {
   CLICK_TO_StoreInfoUpdate,
   CREATE_QR,
   REGISTER_TABLE_NUM,
   SET_OVERLAP_NUM_STATE,
   SET_SEVED_TABLE_NUM,
} from '../action/action';
const adminState = {
   storeInfoUpdateState: false,
   qrDate: [],
   tableNumInputValueOverlap: false,
   setSavedTebleNum: false,
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

      default:
         return state;
   }
};

export default adminReducer;
