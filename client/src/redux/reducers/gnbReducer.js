import { GNB_MOBILE, GUIDE_MODAL } from '../action/action';

export const gnbReducer = (state = false, action) => {
   switch (action.type) {
      case GNB_MOBILE:
         return action.payload;
      default:
         return state;
   }
};

export const gnbGuideReducer = (state = false, action) => {
   switch (action.type) {
      case GUIDE_MODAL:
         return action.payload;
      default:
         return state;
   }
};
