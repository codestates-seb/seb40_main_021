import { TOKEN } from '../action/action';

const initialState = {
   token: ''
};

export const globalTokenReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOKEN:
         return {
            ...state,
            token: action.payload
         };
      default:
         return state;
   }
};
