import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = '/';
export const useAxios = (axiosParams, auto = true) => {
   const [response, setResponse] = useState(undefined);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(true);
   const fetchData = async params => {
      try {
         const result = await axios.request(params);
         setResponse(result.data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   };
   const clickFetchFunc = config => {
      fetchData(config);
   };

   useEffect(() => {
      if (auto) {
         fetchData(axiosParams);
      }
   }, []);

   return { response, error, loading, clickFetchFunc };
};

// 기본 사용하실 때 이렇게 사용해주시면 됩니당
// const { response, loading, error} = useAxios(
//     {
//       method: 'POST',
//       url: 'tasks.json',
//       headers: {
//       },
//       data: JSON.stringify(loginList),
//     },
//   );

// clickFetchFunc 사용하실때
// 두번째 인자 false 반환 후 함수에서 clickFetchFunc() 호출하셔서 사용하시면 클릭시에 useAxios 사용 가능합니다
// const { response, loading, error, clickFetchFunc } = useAxios(
//     {},
//     false
//   );

// const ClickFunc = () => {
//     clickFetchFunc(
//         {
//                   method: 'POST',
//                   url: 'tasks.json',
//                   headers: {
//                   },
//                   data: JSON.stringify(loginList),
//                 }
//     )
// }
