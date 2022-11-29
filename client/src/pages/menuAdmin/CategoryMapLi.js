import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import { setGetUserCategory } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';
import * as S from './SetMenu.style';

const CategoryMapLi = ({ activeIndex, setActiveIndex, setSubmit, toggleCategoryAdd, setToggleCategoryAdd }) => {
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);

   //get
   const { response, error } = useAxios({
      method: 'GET',
      url: `category/${sessionStorage.getItem('userId')}`
   });
   //  const { clickFetchFunc } = useAxios({}, false);
   // response && console.log(response)
   const dispatch = useDispatch();
   useEffect(() => {
      response && dispatch(setGetUserCategory(response));
   }, [response]);
   return (
      <>
         {error ? (
            <p>{error.message}</p>
         ) : (
            <S.CategoryWrap>
               {response &&
                  Array.isArray(categoryList) &&
                  categoryList.map((el, idx) => {
                     const active = idx === activeIndex;
                     return (
                        <CategoryLi
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
         )}
      </>
   );
};

export default CategoryMapLi;
