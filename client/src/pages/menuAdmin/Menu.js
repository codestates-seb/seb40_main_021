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
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const [activeIndex, setActiveIndex] = useState(0);

   const dispatch = useDispatch();
   //get

   let error;
   useEffect(() => {
      axios
         .get(`${API_BASE_URL}/category/${sessionStorage.getItem('userId')}`, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: sessionStorage.getItem('access token')
            }
         })
         .then(res => {
            dispatch(setGetUserCategory(res.data));
         })
         .catch(err => (error = err));
   }, []);

   const navigation = useNavigate();
   const NavToSetMenu = () => {
      navigation('/user/menusetting');
   };
   const viewPreview = useSelector(state => state.previewToggleReducer);
   return (
      <S.SetMenuLayout className={viewPreview ? 'modalOpen' : null}>
         {viewPreview ? <PreviewModal now={'menu'} /> : null}
         <S.Head>메뉴 목록</S.Head>
         <S.MenuLayout>
            <S.CategoryWrap className="editFalse">
               {!error &&
                  Array.isArray(categoryList) &&
                  categoryList.map((el, idx) => {
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
            <ButtonWrap save={NavToSetMenu} name={'메뉴판 수정'} />
         </S.MenuLayout>
      </S.SetMenuLayout>
   );
};

export default Menu;
