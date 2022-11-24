import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddCategory, setUserCategoryNaming } from '../../../redux/action/action';
import * as S from './CategoryLi.style';
import { useAxios } from '../../../util/useAxios';

const CategoryAdd = ({ placeholder, active, setToggleCategoryAdd, userId }) => {
   const dispatch = useDispatch();
   const state = useSelector(store => store.categoryUserItemReducer);
   const { categoryName } = state.input;

   const CategoryInputChange = e => {
      const value = e.target.value;
      dispatch(setUserCategoryNaming(value));
   };
   //post
   const { clickFetchFunc } = useAxios({}, false);

   const CategoryNameSave = () => {
      if (!categoryName || !categoryName.trim()) {
         return alert('카테고리 이름을 작성하세요.');
      }
      dispatch(
         setUserAddCategory({
            categoryName: categoryName
         })
      );
      // clickFetchFunc({
      //     method: 'POST',
      //     url: `/member/join`,
      //     data: {
      //         loginId: 'hello', password: '1234', businessNumber: '123412341234', about: 'hello', address: '주소', contactNumber: '01012345678',
      //         businessHours: '1~1'
      //     }
      // })
      clickFetchFunc({
         method: 'POST',
         url: `category/write`,
         // header: {
         //     // "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
         //     // "Access-Control-Allow-Methods": 'POST', // this states the allowed methods
         //     "Content-Type": "application/json" // this shows the expected content type

         // },
         data: {
            memberId: userId,
            categoryName: categoryName
         }
      });

      dispatch(setUserCategoryNaming(''));
      setToggleCategoryAdd(false);
   };
   let categoryvalue;
   useEffect(() => {
      categoryvalue = categoryName;
   }, [categoryName]);
   return (
      <S.CategoryLiSTyle active={active}>
         <S.CategorySettingWarp>
            <input
               type="text"
               className="add"
               value={categoryvalue}
               readOnly={false}
               disabled={false}
               placeholder={placeholder}
               onChange={e => CategoryInputChange(e)}
               id="category"
            />
         </S.CategorySettingWarp>
         <S.DeleteBtn onClick={CategoryNameSave} className="add">
            저장
         </S.DeleteBtn>
      </S.CategoryLiSTyle>
   );
};

export default CategoryAdd;
