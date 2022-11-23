import { MENU_VIEW_ITEM_ADD } from "../action/action";

const initialState = {
    data: []
}

const menuSaveItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_VIEW_ITEM_ADD:
            console.log(action.payload.res)
            return {
                data: action.payload.res.data
            }
        default:
            return state;
    }
};

export default menuSaveItemReducer;