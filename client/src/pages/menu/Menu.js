import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuViewList from '../../components/Menu/MenuViewList';
import { setGetUserCategory } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';
import MenuLi from './MenuLi';
import * as S from './SetMenu.style'

const Menu = () => {
   const categoryList = useSelector((store) => store.categoryUserItemReducer.data)
   const [activeIndex, setActiveIndex] = useState(0);

   const dispatch = useDispatch()
   //get
   let userId = 1
   const { response, getloading, error } = useAxios(
      {
         method: 'GET',
         url: `category/${userId}`,
         header: {
            "ngrok-skip-browser-warning": "skip"
         }
      },
   );
   // const { response, error, clickFetchFunc } = useAxios(
   //     {
   //     }, false
   // );
   // if (categoryList.length === 0) {
   //     clickFetchFunc({
   //         method: 'GET',
   //         url: `category/${userId}`,
   //         header: {
   //             "ngrok-skip-browser-warning": "skip"
   //         }
   //     })

   // }
   useEffect(() => {
      response && dispatch(setGetUserCategory(response))
   }, [response])
   return (
      <S.SetMenuLayout>
         <S.Head>메뉴판 제작</S.Head>
         <S.MenuLayout>
            {
               error ? <p>{error.message}</p> :
                  response ?
                     <>
                        <S.CategoryWrap className='editFalse'>
                           {
                              categoryList.map((el, idx) => {
                                 const active = idx === activeIndex;
                                 return <CategoryLi key={el.uuid} el={el} idx={idx} setActiveIndex={setActiveIndex} edit={false} active={active} name={'기본 카테고리'} placeholder={'카테고리를 입력해주세요'} />
                              })
                           }
                        </S.CategoryWrap>

                        <S.MenuContainerWarp>
                           <S.SettingHead>메뉴목록</S.SettingHead>
                           <S.MenuListUl>

                              <MenuLi activeIndex={activeIndex} />
                           </S.MenuListUl>
                        </S.MenuContainerWarp>

                        <ButtonWrap name={'메뉴판 수정'} />
                     </>
                     : null
            }

         </S.MenuLayout>

      </S.SetMenuLayout>
   );
};

export default Menu;