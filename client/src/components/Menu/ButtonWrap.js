import React from 'react';
import styled from 'styled-components';

const BtnWrap = styled.div`
margin-left: auto;
display: block;
position: absolute;
bottom: -68px;
    right: 0px;
    @media screen and (max-width: 700px) {
        background-color: white;
        box-sizing: border-box;
        padding: 20px 15px;
        width: 100%;
        bottom: -87px;
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
background-color: white;
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
const ButtonWrap = ({ name, save }) => {
    return (

        <BtnWrap><WhiteBtn>미리보기</WhiteBtn><OrangeBtn onClick={save}>{name}</OrangeBtn></BtnWrap>

    );
};

export default ButtonWrap;