import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
   width: 120px;
   height: 47px;
   border: 2px solid #ff6c01;
   cursor: pointer;
   color: white;
   border-radius: 10px;
   margin-left: 30px;
   background-color: #ff6c01;
   font-size: 15px;
   font-weight: 700;
   @media screen and (max-width: 700px) {
   }
`;
const ButtonWrap = () => {
   return <Btn>QR 생성</Btn>;
};

export default ButtonWrap;
