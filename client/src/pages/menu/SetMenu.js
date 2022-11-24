import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { menuUserAdd, menuUserErrorMessageSubmit, setGetUserCategory } from "../../redux/action/action";
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuList from '../../components/Menu/MenuList';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
import ButtonWrap from '../../components/Menu/ButtonWrap';
import CategoryAdd from '../../components/Menu/Category/CategoryAdd';
import * as S from './SetMenu.style'
import { v4 as uuidv4 } from 'uuid';
import { useAxios } from '../../util/useAxios';
import SetMenuLi from './SetMenuLi';
import CategoryMapLi from './CategoryMapLi';

const SetMenu = () => {

    const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector((store) => store.menuUserItemReducer)
    console.log(state, 'state')
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
    const [submit, setSubmit] = useState(false);

    const menuClickSave = () => {
        let noReadInput = false
        let ErrorInput = false
        for (let i = 0; i < state.data.length; i++) {

            if ((state.data[i].errorMessage.menuName === '20자까지 입력 가능합니다.') || (state.data[i].errorMessage.menuAbout === '50자까지 입력 가능합니다.') || state.data[i].errorMessage.prices === '백만자리까지 입력 가능합니다.') {
                ErrorInput = true
            } else {

            }

            if ((state.data[i].prices || state.data[i].prices.trim()) && (state.data[i].menuName || state.data[i].menuName.trim()) && (state.data[i].menuAbout || state.data[i].menuAbout.trim())) {
                setSubmit(true)
                //통신진행
            } else {
                // setNoReadInput(true)
                noReadInput = true
                dispatch(menuUserErrorMessageSubmit(i))
                setSubmit('업데이트')

            }
        }

        if (noReadInput) {
            alert('작성되지 않은 칸이 있습니다.')
        }
        if (ErrorInput) {
            alert('오류 칸을 수정해주세요.')
        }
    }

    // console.log(error)
    return (
        <S.SetMenuLayout>
            <S.Head>메뉴판 제작</S.Head>
            <S.MenuLayout>

                <CategoryMapLi activeIndex={activeIndex} toggleCategoryAdd={toggleCategoryAdd} setActiveIndex={setActiveIndex} setToggleCategoryAdd={setToggleCategoryAdd} setSubmit={setSubmit} />
                <S.CategoryAddBtn onClick={() => setToggleCategoryAdd(!toggleCategoryAdd)}>
                    {!toggleCategoryAdd ? <><img src={IconCategoryAdd} alt='categoryAdd' />카테고리 추가</> : '취소'}
                </S.CategoryAddBtn>

                <S.MenuContainerWarp>
                    <S.SettingHead>메뉴등록</S.SettingHead>
                    <S.MenuListUl>
                        <SetMenuLi activeIndex={activeIndex} submit={submit} />
                    </S.MenuListUl>
                    <S.AddBtn onClick={menuCountPlus}><img src={IconAdd} alt='add' />추가</S.AddBtn>
                </S.MenuContainerWarp>

                <ButtonWrap save={menuClickSave} name={'저장'} />
            </S.MenuLayout>

        </S.SetMenuLayout>
    );
};

export default SetMenu;