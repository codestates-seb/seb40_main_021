import React from 'react';
import styled from 'styled-components';
const Btns = styled.div`
   display: flex;
   justify-content: end;
   width: 100%;
   .AllPrintBtn {
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
         margin-left: 0px;
         width: 50%;
      }
   }
   .SelectPrintBtn {
      width: 120px;
      height: 47px;
      border: 2px solid #ff6c01;
      cursor: pointer;
      color: black;
      border-radius: 10px;
      background-color: white;
      font-size: 15px;
      font-weight: 700;
      @media screen and (max-width: 700px) {
         width: 50%;
      }
   }
`;

const ButtonWrap = ({ text1, text2 }) => {
   return (
      <Btns>
         <button className="SelectPrintBtn">{text2}</button>
         <button className="AllPrintBtn">{text1}</button>
      </Btns>
   );
};

export default ButtonWrap;
