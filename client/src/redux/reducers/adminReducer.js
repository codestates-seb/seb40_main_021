import { CLICK_TO_StoreInfoUpdate, CREATE_QR, REGISTER_TABLE_NUM } from '../action/action';
const adminState = { storeInfoUpdateState: false, qrDate: [] };

const adminReducer = (state = adminState, action) => {
   switch (action.type) {
      case CLICK_TO_StoreInfoUpdate:
         const currenState = state.storeInfoUpdateState;
         return Object.assign({}, state, { storeInfoUpdateState: !currenState });
      case CREATE_QR:
         return Object.assign({}, state, { qrDate: action.playload.QrList });

      case REGISTER_TABLE_NUM:
         const newTableNumState = state;
         newTableNumState.qrDate[action.playload.idx].tableNum = action.playload.tableNum;
         console.log(state.qrDate);
         return Object.assign({}, state, { newTableNumState });

      default:
         return state;
   }
};

export default adminReducer;
