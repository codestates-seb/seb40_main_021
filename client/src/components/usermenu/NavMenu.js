import { Search } from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from './Category';
import { useEffect } from 'react';
import { setCategory, setMenu } from '../../redux/actions/menuAction';
import axios, { all, spread } from 'axios';

export const NavMenu = () => {
   const dispatch = useDispatch();
   const category = useSelector(store => store.menuReducer.category);

   // 카테고리목록 불러오기
   // 첫번째 카테고리 메뉴목록 불러오기
   useEffect(() => {
      all([axios.get('/category/1'), axios.get('/category/read/1')])
         .then(
            spread((res1, res2) => {
               const categoryList = res1.data;
               const menus = res2.data.data.menus;
               dispatch(setCategory(categoryList));
               dispatch(setMenu(menus));
            })
         )
         .catch(err => console.log(err));
   }, []);

   return (
      <div className="nav-wrapper">
         <Search />
         <ul>{category.length > 0 && category.map((category, idx) => <Category key={idx} data={category} />)}</ul>
      </div>
   );
};
