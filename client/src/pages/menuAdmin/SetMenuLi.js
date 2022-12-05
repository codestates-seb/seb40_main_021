import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuList from '../../components/Menu/MenuList';
import { menuSaveAndChangeAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';

const SetMenuLi = ({ submit, setSubmit, activeIndex }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const changeCategoryList = useSelector(store => store.categoryUserItemReducer.data);

   let categoryId;

   if (changeCategoryList.length !== 0) {
      categoryId = changeCategoryList[activeIndex].categoryId;
   }

   const { response, clickFetchFunc } = useAxios({}, false);
   // menuSaveAndChangeAdd
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
   }, [changeCategoryList, activeIndex]);
   const dispatch = useDispatch();
   const [, setUpdateState] = useState();
   const forceUpdate = useCallback(() => setUpdateState({}), []);
   useEffect(() => {
      response && dispatch(menuSaveAndChangeAdd(response));
   }, [response, activeIndex]);
   let menuList = useSelector(store => store.menuUserItemReducer.data);
   useEffect(() => {
      forceUpdate();
   }, [menuList, activeIndex]);
   return (
      <>
         {menuList &&
            menuList.map((el, idx) => (
               <MenuList submit={submit} idx={idx} setSubmit={setSubmit} el={el} key={el.uuid} />
            ))}
      </>
   );
};

export default SetMenuLi;
