import React from 'react';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuViewList from '../../components/Menu/MenuViewList';
import * as S from './SetMenu.style'

const Menu = () => {
    const menulist = [
        {
            id: 1,
            menuImg: '',
            menuName: '김치찌개',
            prices: '8000',
            recommend: true,
            about: '맛있는 김치찌개'

        },
        {
            id: 2,
            menuImg: '',
            menuName: '김치찌개',
            prices: '8000',
            recommend: true,
            about: '맛있는 김치찌개'

        }
    ]
    return (
        <S.SetMenuLayout>
            <S.Head>메뉴판 제작</S.Head>
            <S.MenuLayout>
                <S.CategoryWrap className='editFalse'>
                    <CategoryLi active={true} edit={false} name={'기본 카테고리'} placeholder={'카테고리를 입력해주세요'} />
                    <CategoryLi active={false} disabled={false} readOnly={false} name={'카테고리 2'} />
                </S.CategoryWrap>

                <S.MenuContainerWarp>
                    <S.SettingHead>메뉴목록</S.SettingHead>
                    <S.MenuListUl>
                        {menulist.map((el, idx) => <MenuViewList key={idx} idx={idx} el={el} />)}
                    </S.MenuListUl>
                </S.MenuContainerWarp>

                <ButtonWrap name={'메뉴판 수정'} />
            </S.MenuLayout>

        </S.SetMenuLayout>
    );
};

export default Menu;