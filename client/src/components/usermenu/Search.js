import axios from 'axios';
import { useRef, useState } from 'react';
import { activate, setMenu } from '../../redux/actions/menuAction';
import { useDispatch, useSelector } from 'react-redux';
import IconSearch from './../../assets/image/search.svg';

export const Search = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   const wrapperRef = useRef();
   const [searchTxt, setSearchTxt] = useState('');
   const userId = useSelector(store => store.stateReducer.params[0]);

   // 검색하기
   const searchHandeler = () => {
      dispatch(activate(false));

      if (searchTxt) {
         axios({
            method: 'GET',
            url: `${API_BASE_URL}/menu/search/${userId}?keyword=${searchTxt}`
         })
            .then(res => {
               if (res.data.data.length === 0) {
                  return alert('검색한 메뉴가 없습니다.');
               }
               dispatch(setMenu(res.data.data));
            })
            .catch(err => err);

         setSearchTxt('');
         wrapperRef.current.classList.remove('active');
      } else {
         wrapperRef.current.classList.toggle('active');
      }
   };

   return (
      <div className="search-wrapper" ref={wrapperRef}>
         <input
            type="text"
            name="search"
            placeholder="메뉴를 입력해주세요."
            value={searchTxt}
            onChange={e => setSearchTxt(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && searchHandeler()}
         />
         <button className="search-btn" onClick={searchHandeler}>
            <img src={IconSearch} alt="search" />
         </button>
      </div>
   );
};
