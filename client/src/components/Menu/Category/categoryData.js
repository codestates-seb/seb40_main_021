import axios from "axios";
export const GET_USER_POST_SUCCESS = 'GET_USER_POST_SUCCESS';

export const getCataegoryData = (userId) => {

    return async (dispatch) => {
        const response = await axios(
            `https://300c-118-103-212-116.jp.ngrok.io/category/${userId}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error('무언가가 잘못되었습니다!');
        }
        console.log('tlfgod?')
        dispatch({
            type: GET_USER_POST_SUCCESS,
            payload: response
        });
    }
};