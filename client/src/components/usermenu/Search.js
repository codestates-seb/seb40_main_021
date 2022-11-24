import axios from 'axios';
import { useRef, useState } from 'react';
import { setMenu } from '../../redux/actions/menuAction';
import { useDispatch } from 'react-redux';
import IconSearch from './../../assets/image/search.svg';

export const Search = () => {
   const dispatch = useDispatch();

   const wrapperRef = useRef();
   const [searchTxt, setSearchTxt] = useState('');

   // 검색하기
   const searchHandeler = () => {
      if (searchTxt) {
         axios({
            method: 'GET',
            url: `/menu/search/1?keyword=${searchTxt}`
         })
            .then(res => {
               if (res.data.data.length === 0) {
                  return alert('검색한 메뉴가 없습니다.');
               }
               dispatch(setMenu(res.data.data));
            })
            .catch(err => console.log(err));

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
         />
         <button className="search-btn" onClick={searchHandeler}>
            <img src={IconSearch} alt="search" />
         </button>
      </div>
   );
};
