import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuViewList from '../../components/Menu/MenuViewList';
import { menuSaveitemAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';
import * as S from './SetMenu.style';

const MenuLi = ({ activeIndex }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const menuList = useSelector(store => store.menuSaveItemReducer.data);
   let categoryId;

   if (categoryList.length !== 0) {
      categoryId = categoryList[activeIndex].categoryId;
   }
   const { response, clickFetchFunc } = useAxios({}, false);

   useEffect(() => {
      if (categoryId) {
         clickFetchFunc({
            method: 'GET',
            url: `${API_BASE_URL}/category/read/${categoryId}`,
            headers: {
               'Content-Type': 'application/json',
               Authorization: sessionStorage.getItem('access token')
            }
         });
      }
   }, [categoryList, activeIndex]);

   const dispatch = useDispatch();
   // useEffect(() => {
   //     if (!error) { ) }
   // }, [response])
   response && dispatch(menuSaveitemAdd(response));

   const [, setUpdateState] = useState();
   const forceUpdate = useCallback(() => setUpdateState({}), []);
   useEffect(() => {
      forceUpdate();
   }, [response]);
   // menuSaveitemAdd

   const navigation = useNavigate();
   const NavToSetMenu = () => {
      navigation('/user/menusetting');
   };
   return (
      <>
         {menuList.length !== 0 ? (
            menuList.menus.length === 0 ? (
               <S.NoMenu>
                  {' '}
                  <span>메뉴가 없습니다. 메뉴를 등록해주세요.</span>{' '}
                  <S.OrangeBtn onClick={NavToSetMenu}>메뉴 등록</S.OrangeBtn>{' '}
               </S.NoMenu>
            ) : (
               menuList.menus.map((el, idx) => <MenuViewList key={idx} idx={idx} el={el} />)
            )
         ) : (
            <S.NoMenu>
               {' '}
               <span>메뉴가 없습니다. 메뉴를 등록해주세요.</span>{' '}
               <S.OrangeBtn onClick={NavToSetMenu}>메뉴 등록</S.OrangeBtn>{' '}
            </S.NoMenu>
         )}
      </>
   );
};

export default MenuLi;
