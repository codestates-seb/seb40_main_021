import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { menuUserAdd } from "../../redux/action/action";
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuList from '../../components/Menu/MenuList';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import * as S from './SetMenu.style'
import { v4 as uuidv4 } from 'uuid';

const SetMenu = () => {

    const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false)
    const categoryList = useSelector((store) => store.categoryUserItemReducer.data)
    const dispatch = useDispatch()
    const state = useSelector((store) => store.menuUserItemReducer)
    const menuCountPlus = () => {
        dispatch(menuUserAdd({
            id: uuidv4(),
            menuImg: '',
            prices: '',
            menuName: '',
            menuAbout: '',
            recommnd: false,
            errorMessage:
            {
                menuName: '',
                menuAbout: '',
                prices: '',
                menuImg: ''
            }
        }))
    }

    const [activeIndex, setActiveIndex] = useState(0);


    console.log(activeIndex, 'dhodho왜')
    return (
        <S.SetMenuLayout>
            <S.Head>메뉴판 제작</S.Head>
            <S.MenuLayout>
                <S.CategoryWrap>
                    {
                        categoryList.map((el, idx) => {
                            const active = idx === activeIndex;
                            return <CategoryLi key={el.uuid} el={el} active={active} setActiveIndex={setActiveIndex} edit={true} idx={idx} placeholder={'카테고리를 입력해주세요'} />
                        })
                    }

                    {
                        toggleCategoryAdd ? <CategoryAdd setToggleCategoryAdd={setToggleCategoryAdd} active={false} placeholder={'카테고리 입력'} /> : null
                    }
                </S.CategoryWrap>

                <S.CategoryAddBtn onClick={() => setToggleCategoryAdd(!toggleCategoryAdd)}>
                    {!toggleCategoryAdd ? <><img src={IconCategoryAdd} alt='categoryAdd' />카테고리 추가</> : '취소'}
                </S.CategoryAddBtn>

                <S.MenuContainerWarp>
                    <S.SettingHead>메뉴등록</S.SettingHead>
                    <S.MenuListUl>
                        {state.data.map((el, idx) => <MenuList el={el} key={el.id} />)}
                    </S.MenuListUl>
                    <S.AddBtn onClick={menuCountPlus}><img src={IconAdd} alt='add' />추가</S.AddBtn>
                </S.MenuContainerWarp>

                <ButtonWrap name={'저장'} />
            </S.MenuLayout>

        </S.SetMenuLayout>
    );
};

export default SetMenu;