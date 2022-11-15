import React from 'react';
import styled from 'styled-components';
import InputTable from './InputTable';

const CreateQR = () => {
   return (
      <MainContants>
         <div className="title">
            <h1>QR Table</h1>
            <label>* 메뉴판을 등록완료 하시면 테이블 수 별로 QR 코드를 제작하실 수 있습니다.</label>
         </div>
         <main className="mainContant">
            <InputTable></InputTable>
         </main>
      </MainContants>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90%;
   width: 100%;
   margin-top: 50px;
   .title {
      display: flex;
      width: 90%;
      justify-content: start;
      align-items: center;
      margin-bottom: 20px;
      > :first-child {
         //title
         font-size: 2rem;
         font-weight: bold;
         margin-right: 20px;
      }
   }
   .mainContant {
      display: flex;
      box-sizing: border-box;
      width: 90%;
      height: 90%;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
      overflow: hidden;
   }
`;
export default CreateQR;
