import React, { useState } from 'react';
// import Input from '../../Input';  보류
import styled from 'styled-components';
import Button from './Button';

const InputTable = () => {
   const [tableValue, setTableValue] = useState('');
   const hadleClickCreateQR = e => {
      setTableValue(e.target.value);
   };
   return (
      <InputTableBox>
         <div className="createQrBox">
            <h2 className="label">메뉴판</h2>
            <div className="noMenu">현재 메뉴판이 없습니다.</div>
            <a href="/">메뉴판 등록하러 가기{' >'}</a>
         </div>
         <div className="createQrBox">
            <h2 className="label">테이블 수</h2>
            <input
               type="text"
               placeholder="테이블 수를 입력하세요"
               onChange={e => {
                  hadleClickCreateQR(e);
               }}></input>
            <Button text={'QR 등록'} num={tableValue}></Button>
         </div>
      </InputTableBox>
   );
};
const InputTableBox = styled.div`
   .createQrBox {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-bottom: 20px;
      .label {
         width: 150px;
         font-weight: bold;
         font-size: 1.5rem;
      }
      .noMenu {
         font-size: 1.3rem;
         color: gray;
         margin-right: 40px;
      }

      a {
         color: rgb(255, 107, 0);
      }
   }
`;
export default InputTable;
