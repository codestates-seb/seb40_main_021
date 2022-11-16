import React from 'react';
import styled from 'styled-components';

const BtnWrap = styled.div`
   display: flex;
   width: 95%;
   justify-content: end;
   margin-top: 20px;
   @media screen and (max-width: 700px) {
      margin-top: 0px;
      width: 100%;
   }
`;
const WhiteBtn = styled.button`
   width: 120px;
   align-items: center;
   padding: 12px 0px;
   cursor: pointer;
   border-radius: 10px;
   border: 2px solid #ff6c01;
   background-color: white;
   font-size: 15px;
   font-weight: 700;
   margin-right: 10px;
   @media screen and (max-width: 700px) {
      width: 50%;
   }
`;
const OrangeBtn = styled.button`
   width: 120px;
   height: 47px;
   align-items: center;
   padding: 12px 0px;
   border: 2px solid #ff6c01;
   cursor: pointer;
   color: white;
   border-radius: 10px;
   border: none;
   background-color: #ff6c01;
   font-size: 15px;
   font-weight: 700;
   @media screen and (max-width: 700px) {
      width: 50%;
   }
`;
const ButtonWrap = ({ bottom }) => {
   return (
      <BtnWrap bottom={bottom}>
         <WhiteBtn>미리보기</WhiteBtn>
         <OrangeBtn>메뉴판 수정</OrangeBtn>
      </BtnWrap>
   );
};

export default ButtonWrap;
