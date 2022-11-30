import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddCategory, setUserCategoryNaming } from '../../../redux/action/action';
import * as S from './CategoryLi.style';
// import { useAxios } from '../../../util/useAxios';
import axios from 'axios';

const CategoryAdd = ({ placeholder, active, setToggleCategoryAdd, userId }) => {
   const dispatch = useDispatch();
   const state = useSelector(store => store.categoryUserItemReducer);
   const { categoryName } = state.input;

   const CategoryInputChange = e => {
      const value = e.target.value;
      dispatch(setUserCategoryNaming(value));
   };
   //post
   // const { response, clickFetchFunc } = useAxios({}, false);
   // response && console.log(response);
   const CategoryNameSave = () => {
      if (!categoryName || !categoryName.trim()) {
         return alert('카테고리 이름을 작성하세요.');
      }
      // clickFetchFunc({
      //    method: 'POST',
      //    url: `category/write`,
      //    data: {
      //       memberId: userId,
      //       categoryName: categoryName
      //    }
      // });
      axios({
         method: 'POST',
         url: `http://ec2-15-164-244-227.ap-northeast-2.compute.amazonaws.com/category/write`,
         data: {
            memberId: userId,
            categoryName: categoryName
         }
      }).then(res => {
         dispatch(
            setUserAddCategory({
               categoryId: res.data.categoryId,
               categoryName: res.data.categoryName
            })
         );
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
