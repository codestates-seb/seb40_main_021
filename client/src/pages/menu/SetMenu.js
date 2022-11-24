import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuUserAdd, menuUserErrorMessageSubmit } from '../../redux/action/action';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuList from '../../components/Menu/MenuList';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import * as S from './SetMenu.style';
import { v4 as uuidv4 } from 'uuid';

const SetMenu = () => {
   const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false);
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const dispatch = useDispatch();
   const state = useSelector(store => store.menuUserItemReducer);
   const menuCountPlus = () => {
      dispatch(
         menuUserAdd({
            id: uuidv4(),
            menuImg: '',
            prices: '',
            menuName: '',
            menuAbout: '',
            recommnd: false,
            errorMessage: {
               menuName: '',
               menuAbout: '',
               prices: '',
               menuImg: ''
            }
         })
      );
   };

   const [activeIndex, setActiveIndex] = useState(0);
   const [submit, setSubmit] = useState(false);

   const menuClickSave = () => {
      let noReadInput = false;
      let ErrorInput = false;
      for (let i = 0; i < state.data.length; i++) {
         if (
            state.data[i].errorMessage.menuName === '20자까지 입력 가능합니다.' ||
            state.data[i].errorMessage.menuAbout === '50자까지 입력 가능합니다.' ||
            state.data[i].errorMessage.prices === '백만자리까지 입력 가능합니다.'
         ) {
            ErrorInput = true;
         }

         if (
            (state.data[i].prices || state.data[i].prices.trim()) &&
            (state.data[i].menuName || state.data[i].menuName.trim()) &&
            (state.data[i].menuAbout || state.data[i].menuAbout.trim())
         ) {
            setSubmit(true);
            //통신진행
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
            <S.CategoryWrap>
               {categoryList.map((el, idx) => {
                  const active = idx === activeIndex;
                  return (
                     <CategoryLi
                        key={el.uuid}
                        el={el}
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
                     setToggleCategoryAdd={setToggleCategoryAdd}
                     active={false}
                     placeholder={'카테고리 입력'}
                  />
               ) : null}
            </S.CategoryWrap>

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
                  {state.data.map(el => (
                     <MenuList submit={submit} el={el} key={el.id} />
                  ))}
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
