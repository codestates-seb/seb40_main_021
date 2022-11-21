import { GNB_MOBILE } from '../action/action';

export const gnbReducer = (state = false, action) => {
    switch (action.type) {
        case GNB_MOBILE:
            return action.payload;
        default:
            return state;
    }
};

