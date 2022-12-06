import { useEffect, useRef, useState } from 'react';
import IconEdit from './../../../assets/img/icon_pencil.png';
import IconDelete from './../../../assets/img/icon_delete.png';
import * as S from './CategoryLi.style';
import { useDispatch, useSelector } from 'react-redux';
import {
   deleteCategoryAndMenu,
   deleteCategoryAndMenumenu,
   setMenuUpdate,
   setUserCategoryNaming,
   setUserCategoryNowNaming,
   setUserDeleteCategory,
   setUserModifyCategory
} from '../../../redux/action/action';
import { useAxios } from '../../../util/useAxios';

const CategoryLi = ({ placeholder, edit, el, active, idx, setActiveIndex, setIsalertFloat }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const { categoryId, categoryName } = el;

   const state = useSelector(store => store.categoryUserItemReducer);
   const categoryAddName = state.input.categoryName;

   const dispatch = useDispatch();

   const { clickFetchFunc } = useAxios({}, false);

   const editCategoryName = e => {
      const value = e.target.value;
      dispatch(setUserCategoryNaming(value));
   };
   const [togglePatchCategory, setTogglePatchCategory] = useState(true);

   const setPatchCategory = () => {
      if (togglePatchCategory) {
         dispatch(setUserCategoryNowNaming(idx));
         setTogglePatchCategory(!togglePatchCategory);
      } else {
         if (!categoryAddName || !categoryAddName.trim()) {
            return alert('카테고리 이름을 작성하세요.');
         } else {
            dispatch(setUserModifyCategory(idx, categoryAddName));
            dispatch(setUserCategoryNaming(''));
            clickFetchFunc({
               method: 'PATCH',
               url: `${API_BASE_URL}/category/update/${categoryId}`,
               data: { categoryName: categoryAddName },
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: sessionStorage.getItem('access token')
               }
            });
            setTogglePatchCategory(!togglePatchCategory);
         }
      }
   };

   const CategorytRef = useRef();
   const CategorytModifyRef = useRef();
   useEffect(() => {
      const handleClickOutside = e => {
         if (
            CategorytRef.current &&
            CategorytModifyRef.current &&
            !CategorytRef.current.contains(e.target) &&
            !CategorytModifyRef.current.contains(e.target)
         ) {
            if (window.confirm('카테고리 수정을 취소하시겠습니까?')) {
               setTogglePatchCategory(true);
            }
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [CategorytRef]);

   const DeleteCategory = e => {
      e.stopPropagation();
      if (window.confirm('카테고리 삭제시 해당하는 메뉴들도 함께 삭제됩니다. 삭제하시겠습니까?')) {
         if (idx !== 0) {
            setActiveIndex(idx - 1);
         }
         clickFetchFunc({
            method: 'DELETE',
            url: `${API_BASE_URL}/category/${categoryId}`,
            headers: {
               'Content-Type': 'application/json',
               Authorization: sessionStorage.getItem('access token')
            }
         });
         setIsalertFloat(true);

         if (state.data.length === 1) {
            dispatch(deleteCategoryAndMenu());
            dispatch(deleteCategoryAndMenumenu());
         }
         return dispatch(setUserDeleteCategory(idx));
      }
   };
   const setmenuChangeState = useSelector(store => store.setmenuStateChangeReducer);
   const onTitleClick = () => {
      if (setmenuChangeState) {
         if (confirm('저장하지 않은 메뉴가 사라질 수 있습니다. 카테고리를 변경하시겠습니까?')) {
            setActiveIndex(idx);
            dispatch(setMenuUpdate(false));
         }
      } else {
         setActiveIndex(idx);
         dispatch(setMenuUpdate(false));
      }
   };
   return (
      <S.CategoryLiSTyle active={active} onClick={onTitleClick}>
         {active ? (
            edit ? (
               <>
                  <S.CategorySettingWarp>
                     {togglePatchCategory ? (
                        categoryName
                     ) : (
                        <input
                           type="text"
                           ref={CategorytRef}
                           value={categoryAddName}
                           id={categoryId}
                           onChange={e => editCategoryName(e)}
                           readOnly={togglePatchCategory}
                           disabled={togglePatchCategory}
                           placeholder={placeholder}
                        />
                     )}
                     <button
                        htmlFor="category"
                        ref={CategorytModifyRef}
                        id={categoryId}
                        value={categoryName}
                        onClick={e => {
                           setPatchCategory(e);
                        }}>
                        <img src={IconEdit} alt="edit" />
                     </button>
                  </S.CategorySettingWarp>
                  <S.DeleteBtn onClick={e => DeleteCategory(e)}>
                     <img src={IconDelete} alt="delete category" />
                  </S.DeleteBtn>
               </>
            ) : (
               <>
                  <S.CategorySettingWarp>{categoryName}</S.CategorySettingWarp>
               </>
            )
         ) : (
            <S.CategorySettingWarp>{categoryName}</S.CategorySettingWarp>
         )}
      </S.CategoryLiSTyle>
   );
};

export default CategoryLi;
