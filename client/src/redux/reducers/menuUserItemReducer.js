import { MENU_USER_ADD, MENU_USER_UPDATE, MENU_USER_DELETE, ERROR_CASE_HANDLE } from '../action/action';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [{
        id: uuidv4(),
        menuImg: '',
        prices: '',
        menuName: '',
        menuAbout: '',
        recommnd: false,
        errorMessage:
        {
            menuName: '',
            menuAbout: '',
            prices: '',
            menuImg: ''
        }
    }]
}

const menuUserItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_USER_ADD:
            console.log('ction.payload.res', action.payload.res)
            let changeData = [...state.data, action.payload.res]
            return Object.assign({}, state, { data: changeData });
        case MENU_USER_UPDATE:

            state.data.find(x => x.id === action.payload.id).menuName = action.payload.menuNameValue
            state.data.find(x => x.id === action.payload.id).menuAbout = action.payload.menuAboutValue
            state.data.find(x => x.id === action.payload.id).menuImg = action.payload.menuImgValue
            state.data.find(x => x.id === action.payload.id).prices = action.payload.pricesValue
            state.data.find(x => x.id === action.payload.id).recommnd = action.payload.checked
            return state
        case MENU_USER_DELETE:
            const deletMenu = state.data.filter((el, idx) => el.id !== action.payload.id)
            return Object.assign({}, state, { data: deletMenu });
        case ERROR_CASE_HANDLE:
            state.data.find(x => x.id === action.payload.id).errorMessage = action.payload.message
            return Object.assign({}, state);
        default:
            return state;
    }

};

export default menuUserItemReducer;