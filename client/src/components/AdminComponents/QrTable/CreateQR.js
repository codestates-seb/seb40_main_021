import React from 'react';
import styled from 'styled-components';
import InputTables from './InputTable';
import QrList from './QrList';

const CreateQR = () => {
   return (
      <MainContants>
         <div className="title">
            <h1>QR Table</h1>
            <label>* 메뉴판을 등록완료 하시면 테이블 수 별로 QR 코드를 제작하실 수 있습니다.</label>
         </div>
         <main className="mainContant">
            <InputTables></InputTables>
            <div className="QrTable">
               <label>생성 QR Table</label>
            </div>
            <div className="flex">
               <div className="th">
                  <div>선택</div>
                  <div>No.</div>
                  <div>테이블 번호</div>
                  <div>생성날짜</div>
               </div>
               <div className="print">
                  <div>선택 인쇄</div>
                  <div>전체 인쇄</div>
               </div>
            </div>
            <QrList></QrList>
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
   .print {
      display: flex;

      justify-content: end;
      flex-grow: 1;
      > :first-child {
         border-bottom: 1px solid gray;
         cursor: pointer;
      }
      > :last-child {
         margin-left: 30px;
         border-bottom: 1px solid gray;
         cursor: pointer;
      }
   }
   .flex {
      display: flex;
      min-width: 630px;
      margin-bottom: 10px;
   }
   .th {
      width: 50%;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(4, 120px);
      font-weight: bold;
   }
   .QrTable {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 20px;
   }
   .title {
      display: flex;
      width: 90%;
      justify-content: start;
      align-items: center;
      margin-bottom: 20px;
      label {
         font-size: 1rem;
      }
      > :first-child {
         //title
         font-size: 2rem;
         font-weight: bold;
         margin-right: 20px;
      }
   }
   .mainContant {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 90%;
      height: 90%;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
      overflow: hidden;
   }
   @media screen and (max-width: 1100px) {
      .th {
         margin-top: 20px;
         grid-template-columns: repeat(4, 50%);
      }
      .flex {
         min-width: auto;
         flex-direction: column-reverse;
      }
   }
   @media screen and (max-width: 700px) {
      .th {
         grid-template-columns: repeat(4, 80px);
      }
      .flex {
         min-width: auto;
         flex-direction: column-reverse;
      }
   }
`;
export default CreateQR;
