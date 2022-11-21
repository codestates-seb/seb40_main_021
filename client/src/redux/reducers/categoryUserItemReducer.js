import { SET_USER_ADD_CATEGORY, CHANGE_INPUT, SET_USER_MODIFY_CATEGORY, CHANGE_NOW_INPUT, DELETE_CATEGORY } from '../action/action';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    input: {
        categoryName: ''
    },
    data: [{
        uuid: uuidv4(),
        categoryName: '기본 카테고리',
        active: true
    }]
}
const categoryUserItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ADD_CATEGORY:

            let changeData = [...state.data, action.payload.res]
            return Object.assign({}, state, { data: changeData });
        case SET_USER_MODIFY_CATEGORY:
            console.log('false', state)
            state.data.find(x => x.uuid === action.payload.id).categoryName = action.payload.res
            return state
        case CHANGE_INPUT:
            console.log(state)
            return {
                ...state,
                input: {
                    ...state.input,
                    categoryName: action.payload
                }
            };
        case CHANGE_NOW_INPUT:
            console.log('true', state)
            console.log('true', action.payload.id)

            state.input.categoryName = state.data.find(x => x.uuid === action.payload.id).categoryName
            return state
        case DELETE_CATEGORY:
            const deletMenu = state.data.filter((el) => el.uuid !== action.payload.id)
            return Object.assign({}, state, { data: deletMenu });
        default:
            return state
    }
};

export default categoryUserItemReducer;