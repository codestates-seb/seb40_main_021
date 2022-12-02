import axios from 'axios';
export const GET_USER_POST_SUCCESS = 'GET_USER_POST_SUCCESS';

export const getCataegoryData = userId => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   return async dispatch => {
      const response = await axios(`${API_BASE_URL}/category/${userId}`, {
         method: 'GET'
      });

      if (!response.ok) {
         throw new Error('무언가가 잘못되었습니다!');
      }
      dispatch({
         type: GET_USER_POST_SUCCESS,
         payload: response
      });
   };
};
