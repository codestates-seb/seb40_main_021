import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuUserAdd, menuUserErrorMessageSubmit } from '../../redux/action/action';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import * as S from './SetMenu.style';
import { v4 as uuidv4 } from 'uuid';
import SetMenuLi from './SetMenuLi';
import CategoryMapLi from './CategoryMapLi';
import PreviewModal from '../../components/Preview/PreviewModal';
import { useNavigate } from 'react-router-dom';

const SetMenu = () => {
   const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false);
   const dispatch = useDispatch();
   const state = useSelector(store => store.menuUserItemReducer);
   const saveState = useSelector(store => store.menuSaveItemReducer.data.menus);
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   // const menuList = useSelector(store => store.menuUserItemReducer.data);
   const menuCountPlus = () => {
      if (categoryList.length === 0) {
         alert('카테고리를 먼저 추가해주세요.');
      } else {
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
      }
   };

   const [activeIndex, setActiveIndex] = useState(0);
   const [submit, setSubmit] = useState(false);
   // const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   // const { response, loading, error, clickFetchFunc } = useAxios(
   //    {
   //    }, false
   // );

   console.log(state, 'state');
   console.log(saveState, 'saveState');
   const navigate = useNavigate();
   const menuClickSave = saveAll => {
      if (saveAll) {
         // if (state.data.length === saveState.length) {
         //    navigate('/user/menu');
         // } else
         if (confirm('저장되지 않은 수정사항이 있을경우 삭제될 수 있습니다. 메뉴판으로 이동하시겠습니까?')) {
            navigate('/user/menu');
         }
      } else {
         let noReadInput = false;
         let ErrorInput = false;
         let stateData = false;
         for (let i = 0; i < state.data.length; i++) {
            if (
               state.data[i].errorMessage.menuName === '20자까지 입력 가능합니다.' ||
               state.data[i].errorMessage.menuContent === '50자까지 입력 가능합니다.' ||
               state.data[i].errorMessage.price === '백만자리까지 입력 가능합니다.'
            ) {
               ErrorInput = true;
            }
            if (
               state.data[i].price !== '' &&
               (state.data[i].menuName.trim() !== '' || state.data[i].menuName !== '') &&
               (state.data[i].menuContent.trim() !== '' || state.data[i].menuContent !== '')
            ) {
               // setSubmit(true);
               //통신진행
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
         stateData = state.data.length === 0 ? false : true;

         if (!stateData) {
            return alert('메뉴를 1개 이상 등록해주세요.');
         }
         if (noReadInput) {
            return alert('작성되지 않은 칸이 있습니다.');
         }
         if (ErrorInput) {
            return alert('오류 칸을 수정해주세요.');
         }
         if (!noReadInput && !ErrorInput && stateData) {
            console.log('성공');
            alert('저장이 완료되었습니다.');
         }
      }
   };

   const viewPreview = useSelector(state => state.previewToggleReducer);
   return (
      <S.SetMenuLayout>
         {viewPreview ? <PreviewModal /> : null}
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
               <S.ButtonWarp>
                  <S.NonePlace />
                  <S.AddBtn onClick={menuCountPlus}>
                     <img src={IconAdd} alt="add" />
                     메뉴 추가
                  </S.AddBtn>
                  <S.SaveBtn onClick={() => menuClickSave(false)}>저장</S.SaveBtn>
               </S.ButtonWarp>
            </S.MenuContainerWarp>
         </S.MenuLayout>
         <ButtonWrap save={() => menuClickSave(true)} name={'완료'} />
      </S.SetMenuLayout>
   );
};

export default SetMenu;
