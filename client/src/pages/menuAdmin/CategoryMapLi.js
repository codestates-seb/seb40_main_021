import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import { setGetUserCategory } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';
import * as S from './SetMenu.style';

const CategoryMapLi = ({
   activeIndex,
   setActiveIndex,
   setSubmit,
   toggleCategoryAdd,
   setToggleCategoryAdd,
   setIsalertFloat
}) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);

   //get
   const { response, error } = useAxios({
      method: 'GET',
      url: `${API_BASE_URL}/category/${sessionStorage.getItem('userId')}`,
      headers: {
         'Content-Type': 'application/json',
         Authorization: sessionStorage.getItem('access token')
      }
   });
   //  const { clickFetchFunc } = useAxios({}, false);
   // response && console.log(response)
   const dispatch = useDispatch();
   useEffect(() => {
      response && dispatch(setGetUserCategory(response));
   }, [response]);
   return (
      <>
         <S.CategoryWrap>
            {!error &&
               response &&
               Array.isArray(categoryList) &&
               categoryList.map((el, idx) => {
                  const active = idx === activeIndex;
                  return (
                     <CategoryLi
                        setIsalertFloat={setIsalertFloat}
                        setSubmit={setSubmit}
                        key={idx}
                        el={el}
                        userId={sessionStorage.getItem('userId')}
                        length={categoryList.length}
                        active={active}
                        setActiveIndex={setActiveIndex}
                        edit={true}
                        idx={idx}
                        placeholder={'카테고리를 입력해주세요'}
                     />
                  );
               })}
            {toggleCategoryAdd ? (
               <CategoryAdd
                  userId={sessionStorage.getItem('userId')}
                  setToggleCategoryAdd={setToggleCategoryAdd}
                  active={false}
                  placeholder={'카테고리 입력'}
               />
            ) : null}
         </S.CategoryWrap>
      </>
   );
};

export default CategoryMapLi;
