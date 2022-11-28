import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuViewList from '../../components/Menu/MenuViewList';
import { menuSaveitemAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';
import * as S from './SetMenu.style';

const MenuLi = ({ activeIndex }) => {
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const menuList = useSelector(store => store.menuSaveItemReducer.data);
   let categoryId;

   if (categoryList.length !== 0) {
      categoryId = categoryList[activeIndex].categoryId;
   }
   const { response, clickFetchFunc } = useAxios({}, false);

   useEffect(() => {
      console.log(categoryId);
      if (categoryId) {
         clickFetchFunc({
            method: 'GET',
            url: `category/read/${categoryId}`
         });
      }
   }, [categoryList, activeIndex]);

   const dispatch = useDispatch();
   // useEffect(() => {
   //     if (!error) { ) }
   // }, [response])
   response && dispatch(menuSaveitemAdd(response));
   console.log(menuList, 'menulist');

   const [, setUpdateState] = useState();
   const forceUpdate = useCallback(() => setUpdateState({}), []);
   useEffect(() => {
      forceUpdate();
   }, [response]);
   // menuSaveitemAdd
   return (
      <>
         {menuList.length !== 0 ? (
            menuList.menus.length === 0 ? (
               <S.NoMenu>
                  {' '}
                  <span>메뉴가 없습니다. 메뉴를 등록해주세요.</span> <S.OrangeBtn>메뉴 등록</S.OrangeBtn>{' '}
               </S.NoMenu>
            ) : (
               menuList.menus.map((el, idx) => <MenuViewList key={idx} idx={idx} el={el} />)
            )
         ) : null}
      </>
   );
};

export default MenuLi;
