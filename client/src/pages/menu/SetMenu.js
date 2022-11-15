import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryLi from '../../components/Menu/Category/CategoryLi';
import MenuList from '../../components/Menu/MenuList';
import IconAdd from '../../assets/img/icon_add.png';
import IconCategoryAdd from '../../assets/img/icon_category_plus.png';
const SetMenuLayout = styled.div`
width: calc(100% - 300px);
height: calc(100vh - 70px);
margin-left: 300px;
background-color: #F6F6F6;
padding: 50px 80px;
box-sizing: border-box;
@media screen and (max-width: 700px) {
    width: 100%;
    height: calc(100vh - 50px);
    margin-left: 0;
    padding: 0;
}
`
const Head = styled.p`
font-size: 24px;
font-weight: 700;
margin-bottom: 30px;
@media screen and (max-width: 700px) {
    display: none;
}
`

const MenuLayout = styled.div`
width: 100%;
height: auto;
filter: drop-shadow( 0px 2px 4px rgba(0, 0, 0, 0.15));
`
const CategoryWrap = styled.ul`
width: calc(100% - 120px);
overflow-y: scroll;
display: flex;

`

const MenuContainerWarp = styled.div`
background-color: white;
height: 560px;
overflow-x: scroll;
padding: 30px 65px; 
border-radius: 0 3px 3px 3px;
@media screen and (max-width: 700px) {
    box-sizing: border-box;
    min-height: calc(100vh - 187px);
    padding: 24px 15px;
}
`
const SettingHead = styled.p`
font-size: 15px;
font-weight: 700;
margin-bottom: 26px;
`
const MenuListUl = styled.ul`

`
const AddBtn = styled.button`
display: flex;
align-items: center;
padding: 12px 40px;
cursor: pointer;
border-radius: 10px;
border: 2px solid #FF6C01;
background-color: transparent;
font-size: 15px;
font-weight: 700;
margin: 0 auto;
& img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
}
`
const BtnWrap = styled.div`
margin-left: auto;
display: block;
position: absolute;
bottom: 46px;
    right: 80px;
    @media screen and (max-width: 700px) {
        background-color: white;
        box-sizing: border-box;
        padding: 20px 15px;
        width: 100%;
        bottom: 0;
        position: fixed;
        right: 0;
        transform: translate(0);
        display: flex;
    }
`
const WhiteBtn = styled.button`
width: 120px;
align-items: center;
padding: 12px 0px;
cursor: pointer;
border-radius: 10px;
border: 2px solid #FF6C01;
background-color: transparent;
font-size: 15px;
font-weight: 700;
margin-right: 10px ;
filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
@media screen and (max-width: 700px) {
    width: 50%;
}
`
const OrangeBtn = styled.button`
filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
width: 120px;
height: 47px;
align-items: center;
padding: 12px 0px;
border: 2px solid #FF6C01;
cursor: pointer;
color: white;
border-radius: 10px;
border: none;
background-color: #FF6C01;
font-size: 15px;
font-weight: 700;
@media screen and (max-width: 700px) {
    width: 50%;
}
`
const CategoryAddBtn = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
text-decoration: underline;
position: absolute;
top: 14px;
right: 5px;
display: flex;
align-items: center;
& img {
    margin-right: 8px;
}
`
const SetMenu = () => {
    const [menuCount, setMenuCount] = useState(1)
    const [toggleCategoryAdd, setToggleCategoryAdd] = useState(false)

    const menulist = Array(menuCount).fill().map((v, i) => i + 1)

    const menuCountPlus = () => {
        setMenuCount(menuCount + 1)
    }
    return (
        <SetMenuLayout>
            <Head>메뉴판 제작</Head>
            <MenuLayout>
                <CategoryWrap>
                    <CategoryLi active={true} name={'기본 카테고리'} placeholder={'카테고리를 입력해주세요'} />
                    <CategoryLi active={false} name={'카테고리 2'} />
                </CategoryWrap>
                <CategoryAddBtn onClick={() => setToggleCategoryAdd(!toggleCategoryAdd)}>
                    {toggleCategoryAdd ? <><img src={IconCategoryAdd} alt='categoryAdd' />카테고리 추가</> : '취소'}
                </CategoryAddBtn>
                <MenuContainerWarp>

                    <SettingHead>메뉴등록</SettingHead>
                    <MenuListUl>
                        {menulist.map((el, idx) => <MenuList key={idx} idx={idx} />)}
                    </MenuListUl>

                    <AddBtn onClick={menuCountPlus}><img src={IconAdd} alt='add' />추가</AddBtn>
                </MenuContainerWarp>
            </MenuLayout>
            <BtnWrap><WhiteBtn>미리보기</WhiteBtn><OrangeBtn>저장</OrangeBtn></BtnWrap>
        </SetMenuLayout>
    );
};

export default SetMenu;