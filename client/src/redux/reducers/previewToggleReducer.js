import { PREVIEW_TOGGLE } from '../action/action';

export const previewToggleReducer = (state = false, action) => {
   switch (action.type) {
      case PREVIEW_TOGGLE:
         return action.payload;
      default:
         return state;
   }
};
