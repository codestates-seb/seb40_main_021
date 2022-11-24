import { MENU_USER_ADD, MENU_USER_UPDATE, MENU_USER_DELETE, ERROR_CASE_HANDLE, EROOR_TO_SUBMIT, MENU_GET_ADD_USER } from '../action/action';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: []
}

const menuUserItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_GET_ADD_USER:
            const dataSet = action.payload.res.data.menus.map(el => {
                return {
                    ...el,
                    errorMessage:
                    {
                        menuName: '',
                        menuAbout: '',
                        prices: '',
                        menuImg: ''
                    }
                }
            })
            state.data = dataSet
            return state
        case MENU_USER_ADD:
            let changeData = [...state.data, action.payload.res]
            console.log(changeData)
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
        case EROOR_TO_SUBMIT:
            if (state.data[action.payload.idx].menuName.length < 2) state.data[action.payload.idx].errorMessage.menuName = '메뉴 명을 작성해주세요.'
            if (state.data[action.payload.idx].prices.length < 2) state.data[action.payload.idx].errorMessage.prices = '가격을 작성해주세요.'
            if (state.data[action.payload.idx].menuAbout.length < 2) state.data[action.payload.idx].errorMessage.menuAbout = '메뉴 설명을 작성해주세요.'
            return state
        default:
            return state;
    }

};

export default menuUserItemReducer;