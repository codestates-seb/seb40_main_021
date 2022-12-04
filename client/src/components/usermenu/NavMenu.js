import { Search } from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from './Category';
import { useEffect, useRef } from 'react';
import { activateCategory, setCategory, setMenu } from '../../redux/actions/menuAction';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const NavMenu = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   const category = useSelector(store => store.menuReducer.category);
   const categoryId = useSelector(store => store.menuReducer.category[0].categoryId);
   const userId = useParams().userId;
   const navMenu = useRef();

   const scrollHandler = () => {
      if (window.scrollY === 0) {
         navMenu.current.classList.remove('scrolling');
      } else {
         navMenu.current.classList.add('scrolling');
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
   }, []);

   useEffect(() => {
      // 카테고리목록 불러오기
      axios
         .get(`${API_BASE_URL}/category/${userId}`)
         .then(res => {
            dispatch(setCategory(res.data));
         })
         .then(
            // 첫번째 카테고리 메뉴목록 불러오기
            axios
               .get(`${API_BASE_URL}/category/read/${categoryId}`)
               .then(res => {
                  dispatch(setMenu(res.data.data.menus));
               })
               .then(dispatch(activateCategory(categoryId)))
         )
         .catch(err => err);
   }, [categoryId]);

   return (
      <div className="nav-wrapper">
         <Search />
         <ul ref={navMenu}>
            {category.length > 0 && category.map(category => <Category key={category.categoryId} data={category} />)}
         </ul>
      </div>
   );
};
