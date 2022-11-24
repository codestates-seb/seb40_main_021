import { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuViewList from '../../components/Menu/MenuViewList';
import * as S from './SetMenu.style';

const Menu = () => {
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const [activeIndex, setActiveIndex] = useState(0);
   const menulist = [
      {
         id: 1,
         menuImg: '',
         menuName: '김치찌개',
         prices: '8000',
         recommend: true,
         menuAbout: '맛있는 김치찌개'
      },
      {
         id: 2,
         menuImg: '',
         menuName: '김치찌개',
         prices: '8000',
         recommend: true,
         menuAbout: '맛있는 김치찌개'
      }
   ];
   return (
      <S.SetMenuLayout>
         <S.Head>메뉴판 제작</S.Head>
         <S.MenuLayout>
            <S.CategoryWrap className="editFalse">
               {categoryList.map((el, idx) => {
                  const active = idx === activeIndex;
                  return (
                     <CategoryLi
                        key={el.uuid}
                        el={el}
                        idx={idx}
                        setActiveIndex={setActiveIndex}
                        edit={false}
                        active={active}
                        name={'기본 카테고리'}
                        placeholder={'카테고리를 입력해주세요'}
                     />
                  );
               })}

               {/* <CategoryLi active={false} disabled={false} readOnly={false} name={'카테고리 2'} /> */}
            </S.CategoryWrap>

            <S.MenuContainerWarp>
               <S.SettingHead>메뉴목록</S.SettingHead>
               <S.MenuListUl>
                  {menulist.length === 0 ? (
                     <S.NoMenu>
                        {' '}
                        <span>메뉴가 없습니다. 메뉴를 등록해주세요.</span> <S.OrangeBtn>메뉴 등록</S.OrangeBtn>{' '}
                     </S.NoMenu>
                  ) : (
                     menulist.map((el, idx) => <MenuViewList key={idx} idx={idx} el={el} />)
                  )}
               </S.MenuListUl>
            </S.MenuContainerWarp>

            <ButtonWrap name={'메뉴판 수정'} />
         </S.MenuLayout>
      </S.SetMenuLayout>
   );
};

export default Menu;
