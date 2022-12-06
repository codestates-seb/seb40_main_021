import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuUserAdd, menuUserErrorMessageSubmit, setMenuUpdate } from '../../redux/action/action';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import * as S from './SetMenu.style';
import SetMenuLi from './SetMenuLi';
import CategoryMapLi from './CategoryMapLi';
import PreviewModal from '../../components/Preview/PreviewModal';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../util/useAxios';
import { v4 as uuidv4 } from 'uuid';
import CategoryAlert from '../../components/Menu/Category/CategoryAlert';

const SetMenu = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false);
   const dispatch = useDispatch();
   const state = useSelector(store => store.menuUserItemReducer);
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const menuListState = useSelector(store => store.menuUserItemReducer.data);
   const [noCategory, setNoCategory] = useState(false);
   // const setmenuChangeState = useSelector(store => store.setmenuStateChangeReducer);

   useEffect(() => {
      if (categoryList.length === 0) {
         setNoCategory(true);
      } else {
         setNoCategory(false);
      }
   }, [categoryList]);

   const menuCountPlus = () => {
      dispatch(setMenuUpdate(true));
      if (categoryList.length === 0) {
         alert('카테고리를 먼저 추가해주세요.');
      } else {
         dispatch(
            menuUserAdd({
               menuImage: '',
               price: '',
               menuName: '',
               menuContent: '',
               recommendedMenu: false,
               uuid: uuidv4(),
               errorMessage: {
                  menuName: '',
                  menuContent: '',
                  price: '',
                  menuImage: ''
               }
            })
         );
      }
   };

   const [isalertFloat, setIsalertFloat] = useState(true);
   const [toggleIsalertFloat, setToggleIsalertFloat] = useState(true);
   const [activeIndex, setActiveIndex] = useState(0);
   const [submit, setSubmit] = useState(false);
   const { clickFetchFunc } = useAxios({}, false);
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
               //
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
            let menuList = [...menuListState];

            // menuList = menuList.map(el => delete el.errorMessage);
            for (let i = 0; i < menuList.length; i++) {
               menuList[i] = {
                  ...menuList[i],
                  categoryId: categoryList[activeIndex].categoryId,
                  memberId: sessionStorage.getItem('userId')
               };
               delete menuList[i].errorMessage;
               delete menuList[i].uuid;
            }
            clickFetchFunc({
               method: 'PATCH',
               url: `${API_BASE_URL}/menu/${categoryList[activeIndex].categoryId}`,
               data: {
                  menuList: menuList
               },
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: sessionStorage.getItem('access token')
               }
            });
            dispatch(setMenuUpdate(false));
            alert('저장이 완료되었습니다.');
         }
      }
   };
   const viewPreview = useSelector(state => state.previewToggleReducer);
   return (
      <S.SetMenuLayout className={viewPreview ? 'modalOpen' : null}>
         {viewPreview ? <PreviewModal now={'menu'} /> : null}
         <S.Head>메뉴판 제작</S.Head>
         <S.MenuLayout>
            {categoryList.length === 0 && isalertFloat && toggleIsalertFloat ? (
               <CategoryAlert setIsalertFloat={setIsalertFloat} />
            ) : null}

            <CategoryMapLi
               activeIndex={activeIndex}
               toggleCategoryAdd={toggleCategoryAdd}
               setActiveIndex={setActiveIndex}
               setToggleCategoryAdd={setToggleCategoryAdd}
               setSubmit={setSubmit}
               setIsalertFloat={setToggleIsalertFloat}
            />
            <S.CategoryAddBtn
               onClick={() => {
                  setToggleCategoryAdd(!toggleCategoryAdd);
                  setToggleIsalertFloat(!toggleIsalertFloat);
               }}>
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
               {/* <S.ButtonWarp> */}
               {/* <S.NonePlace /> */}
               <S.AddBtn className={noCategory ? 'noCategory' : null} onClick={menuCountPlus}>
                  <img src={IconAdd} alt="add" />
                  메뉴 추가
               </S.AddBtn>
               {/* <S.SaveBtn onClick={() => menuClickSave(false)}>저장</S.SaveBtn> */}
               {/* </S.ButtonWarp> */}
            </S.MenuContainerWarp>
         </S.MenuLayout>
         <ButtonWrap save={() => menuClickSave(false)} name={'완료'} />
      </S.SetMenuLayout>
   );
};

export default SetMenu;
