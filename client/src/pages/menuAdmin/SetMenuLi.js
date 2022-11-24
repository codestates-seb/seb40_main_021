import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuList from '../../components/Menu/MenuList';
import { menuSaveAndChangeAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';

const SetMenuLi = ({ submit, setSubmit, activeIndex }) => {
   const changeCategoryList = useSelector(store => store.categoryUserItemReducer.data);
   const menuList = useSelector(store => store.menuUserItemReducer.data);

   let categoryId;

   if (changeCategoryList.length !== 0) {
      categoryId = changeCategoryList[activeIndex].categoryId;
   }

   const { response, clickFetchFunc } = useAxios({}, false);
   // menuSaveAndChangeAdd
   useEffect(() => {
      clickFetchFunc({
         method: 'GET',
         url: `category/read/${categoryId}`
      });
   }, [changeCategoryList, activeIndex]);
   const dispatch = useDispatch();
   const [, setUpdateState] = useState();
   const forceUpdate = useCallback(() => setUpdateState({}), []);
   useEffect(() => {
      response && dispatch(menuSaveAndChangeAdd(response));
   }, [response, activeIndex]);

   useEffect(() => {
      forceUpdate();
   }, [response]);

   return (
      <>
         {menuList.map(el => (
            <MenuList submit={submit} setSubmit={setSubmit} el={el} key={el.id} />
         ))}
      </>
   );
};

export default SetMenuLi;
