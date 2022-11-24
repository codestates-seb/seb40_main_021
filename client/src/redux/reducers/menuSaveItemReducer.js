import { MENU_VIEW_ITEM_ADD } from "../action/action";

const initialState = {
    data: []
}

const menuSaveItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_VIEW_ITEM_ADD:

            const dataSet = action.payload.res.data
            state.data = dataSet
            return state
        default:
            return state;
    }
};

export default menuSaveItemReducer;