import React, { useState } from 'react';
import Input from '../../Input';
import styled from 'styled-components';
const InputTable = () => {
   const [tableValue, setTableValue] = useState('');
   return (
      <InputTableBox>
         <div className="createQrBox">
            <h2 className="label">메뉴판</h2>
            <div className="noMenu">현재 메뉴판이 없습니다.</div>
            <a href="/">메뉴판 등록하러 가기{' >'}</a>
         </div>
         <div className="createQrBox">
            <h2 className="label">테이블 수</h2>
            <Input value="테이블 수 를 입력 해주세요." handleValue={setTableValue} width="220px"></Input>
            <button>QR 생성</button>
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
         font-size: 1.3rem;
      }
      .noMenu {
         color: gray;
         margin-right: 40px;
      }

      a {
         color: rgb(255, 107, 0);
      }
   }
`;
export default InputTable;
