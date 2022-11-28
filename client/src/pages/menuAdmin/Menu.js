import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import PreviewModal from '../../components/Preview/PreviewModal';
import { setGetUserCategory } from '../../redux/action/action';
// import { useAxios } from '../../util/useAxios';
import MenuLi from './MenuLi';
import * as S from './SetMenu.style';

const Menu = () => {
   const [viewPreview, setViewPreview] = useState(false);

   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const [activeIndex, setActiveIndex] = useState(0);

   const dispatch = useDispatch();
   //get
   let userId = 3;

   let error;
   useEffect(() => {
      axios
         .get(`category/${userId}`)
         .then(res => {
            dispatch(setGetUserCategory(res.data));
         })
         .catch(err => (error = err));
   }, []);

   const navigation = useNavigate();
   const NavToSetMenu = () => {
      navigation('/user/menusetting');
   };
   return (
      <S.SetMenuLayout>
         {viewPreview ? <PreviewModal /> : null}
         <S.Head>메뉴 목록</S.Head>
         <S.MenuLayout>
            {error ? (
               <p>{error.message}</p>
            ) : (
               <>
                  <S.CategoryWrap className="editFalse">
                     {categoryList.map((el, idx) => {
                        const active = idx === activeIndex;
                        return (
                           <CategoryLi
                              key={el.categoryId}
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
                  </S.CategoryWrap>

                  <S.MenuContainerWarp>
                     <S.SettingHead>메뉴목록</S.SettingHead>
                     <S.MenuListUl>
                        <MenuLi activeIndex={activeIndex} />
                     </S.MenuListUl>
                  </S.MenuContainerWarp>
                  <ButtonWrap
                     setViewPreview={setViewPreview}
                     viewPreview={viewPreview}
                     save={NavToSetMenu}
                     name={'메뉴판 수정'}
                  />
               </>
            )}
         </S.MenuLayout>
      </S.SetMenuLayout>
   );
};

export default Menu;
