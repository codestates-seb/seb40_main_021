import { SET_USER_ADD_CATEGORY, CHANGE_INPUT, SET_USER_MODIFY_CATEGORY, CHANGE_NOW_INPUT, DELETE_CATEGORY, GET_USER_POST_SUCCESS } from '../action/action';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
    input: {
        categoryName: ''
    },
    data: []
}

const categoryUserItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_POST_SUCCESS:
            // console.log(action.payload)
            if (action.payload.length !== 0) {
                return {
                    ...state,
                    data: action.payload
                }
            }
            return state

        case SET_USER_ADD_CATEGORY:
            let changeData = [...state.data, action.payload.res]
            return Object.assign({}, state, { data: changeData });
        case SET_USER_MODIFY_CATEGORY:
            console.log('false', state)
            state.data[action.payload.idx].categoryName = action.payload.res
            return state
        case CHANGE_INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    categoryName: action.payload
                }
            };
        case CHANGE_NOW_INPUT:
            console.log('true', state)
            console.log('true', action.payload.idx)

            state.input.categoryName = state.data[action.payload.idx].categoryName
            return state
        case DELETE_CATEGORY:
            console.log(state, 'state')
            const deletMenu = state.data.filter((el, idx) => idx !== action.payload.idx)
            return Object.assign({}, state, { data: deletMenu });
        default:

            return state
    }
};

export default categoryUserItemReducer;