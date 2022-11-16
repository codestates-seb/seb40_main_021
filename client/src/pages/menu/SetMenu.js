import React, { useState } from 'react';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuList from '../../components/Menu/MenuList';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import * as S from './SetMenu.style'

const SetMenu = () => {
    const [menuCount, setMenuCount] = useState(1)
    const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false)

    const menulist = Array(menuCount).fill().map((v, i) => i + 1)

    const menuCountPlus = () => {
        setMenuCount(menuCount + 1)
    }
    return (
        <S.SetMenuLayout>
            <S.Head>메뉴판 제작</S.Head>
            <S.MenuLayout>
                <S.CategoryWrap>
                    <CategoryLi active={true} edit={true} name={'기본 카테고리'} placeholder={'카테고리를 입력해주세요'} />
                    <CategoryLi active={false} disabled={false} readOnly={false} name={'카테고리 2'} />
                    {
                        toggleCategoryAdd ? <CategoryAdd active={false} placeholder={'카테고리 입력'} /> : null
                    }
                </S.CategoryWrap>

                <S.CategoryAddBtn onClick={() => setToggleCategoryAdd(!toggleCategoryAdd)}>
                    {!toggleCategoryAdd ? <><img src={IconCategoryAdd} alt='categoryAdd' />카테고리 추가</> : '취소'}
                </S.CategoryAddBtn>

                <S.MenuContainerWarp>
                    <S.SettingHead>메뉴등록</S.SettingHead>
                    <S.MenuListUl>
                        {menulist.map((el, idx) => <MenuList key={idx} idx={idx} />)}
                    </S.MenuListUl>
                    <S.AddBtn onClick={menuCountPlus}><img src={IconAdd} alt='add' />추가</S.AddBtn>
                </S.MenuContainerWarp>

                <ButtonWrap name={'저장'} />
            </S.MenuLayout>

        </S.SetMenuLayout>
    );
};

export default SetMenu;