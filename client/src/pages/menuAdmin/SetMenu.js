import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuUserAdd, menuUserErrorMessageSubmit } from '../../redux/action/action';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import * as S from './SetMenu.style';
import { v4 as uuidv4 } from 'uuid';
// import { useAxios } from '../../util/useAxios';
import SetMenuLi from './SetMenuLi';
import CategoryMapLi from './CategoryMapLi';

const SetMenu = () => {
   // const userId = 1;

   const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false);
   const dispatch = useDispatch();
   const state = useSelector(store => store.menuUserItemReducer);
   // const menuList = useSelector(store => store.menuUserItemReducer.data);
   const menuCountPlus = () => {
      dispatch(
         menuUserAdd({
            menuId: uuidv4(),
            menuImg: '',
            price: '',
            menuName: '',
            menuContent: '',
            recommnd: false,
            errorMessage: {
               menuName: '',
               menuContent: '',
               price: '',
               menuImg: ''
            }
         })
      );
   };

   const [activeIndex, setActiveIndex] = useState(0);
   const [submit, setSubmit] = useState(false);
   // const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   // const { response, loading, error, clickFetchFunc } = useAxios(
   //    {
   //    }, false
   // );
   const menuClickSave = () => {
      let noReadInput = false;
      let ErrorInput = false;
      for (let i = 0; i < state.data.length; i++) {
         if (
            state.data[i].errorMessage.menuName === '20자까지 입력 가능합니다.' ||
            state.data[i].errorMessage.menuContent === '50자까지 입력 가능합니다.' ||
            state.data[i].errorMessage.price === '백만자리까지 입력 가능합니다.'
         ) {
            ErrorInput = true;
         }
         if (
            state.data[i].price &&
            (state.data[i].menuName || state.data[i].menuName.trim()) &&
            (state.data[i].menuContent || state.data[i].menuContent.trim())
         ) {
            setSubmit(true);
            //통신진행
            console.log('성공');
            // console.log(
            //    menuList[0].menuName,
            //    menuList[0].menuContent,
            //    menuList[0].price,
            //    menuList[0].recommnd,
            //    categoryList[activeIndex].categoryId
            // );
            // clickFetchFunc({
            //    method: 'POST',
            //    url: `/menu/write`,

            //    data: {
            //       memberId: userId,
            //       menuName: menuList[0].menuName,
            //       menuContent: menuList[0].menuContent,
            //       price: menuList[0].price,
            //       recommendedMenu: menuList[0].recommnd,
            //       categoryId: categoryList[activeIndex].categoryId
            //    }
            // })
         } else {
            // setNoReadInput(true)
            noReadInput = true;
            dispatch(menuUserErrorMessageSubmit(i));
            setSubmit('업데이트');
         }
      }

      if (noReadInput) {
         alert('작성되지 않은 칸이 있습니다.');
      }
      if (ErrorInput) {
         alert('오류 칸을 수정해주세요.');
      }
   };

   return (
      <S.SetMenuLayout>
         <S.Head>메뉴판 제작</S.Head>
         <S.MenuLayout>
            <CategoryMapLi
               activeIndex={activeIndex}
               toggleCategoryAdd={toggleCategoryAdd}
               setActiveIndex={setActiveIndex}
               setToggleCategoryAdd={setToggleCategoryAdd}
               setSubmit={setSubmit}
            />
            <S.CategoryAddBtn onClick={() => setToggleCategoryAdd(!toggleCategoryAdd)}>
               {!toggleCategoryAdd ? (
                  <>
                     <img src={IconCategoryAdd} alt="categoryAdd" />
                     카테고리 추가
                  </>
               ) : (
                  '취소'
               )}
            </S.CategoryAddBtn>

            <S.MenuContainerWarp>
               <S.SettingHead>메뉴등록</S.SettingHead>
               <S.MenuListUl>
                  <SetMenuLi activeIndex={activeIndex} submit={submit} setSubmit={setSubmit} />
               </S.MenuListUl>
               <S.AddBtn onClick={menuCountPlus}>
                  <img src={IconAdd} alt="add" />
                  추가
               </S.AddBtn>
            </S.MenuContainerWarp>

            <ButtonWrap save={menuClickSave} name={'저장'} />
         </S.MenuLayout>
      </S.SetMenuLayout>
   );
};

export default SetMenu;
