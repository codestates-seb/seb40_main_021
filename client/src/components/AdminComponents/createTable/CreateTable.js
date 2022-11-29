import styled from 'styled-components';
import InputTables from './InputTable';
import QrList from './QrList';
import Button from './Button';
import { useSelector } from 'react-redux';

const CreateQR = () => {
   const tableNumInputValueOverlap = useSelector(state => state.adminReducer.tableNumInputValueOverlap);
   return (
      <MainContants>
         <div className="title">
            <h1>테이블 생성</h1>
            <p>* 메뉴판을 등록완료 하시면 테이블 수 별로 QR 코드를 제작하실 수 있습니다.</p>
         </div>
         <main className="mainContant">
            <InputTables />
            <div className="QrTable">
               <p>생성 QR Table</p>
            </div>
            <div className="flex">
               <div className="th">
                  <div>No.</div>
                  <div>테이블 번호</div>
                  <div>가능여부</div>
               </div>
            </div>
            <QrList />
            <div className="QrSaveBtn">
               <div className="overlapNum">
                  {tableNumInputValueOverlap ? '중복된 테이블 번호가 입력되었습니다.' : null}
               </div>
               <Button text={'저장'}></Button>
            </div>
         </main>
      </MainContants>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;
   padding: 30px 50px;
   .overlapNum {
      font-size: 1.3rem;
      color: rgb(255, 107, 0);
      width: 80%;
      height: 40px;
   }
   .QrSaveBtn {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
   }
   .flex {
      display: flex;
      min-width: 630px;
      padding: 12px 0;
      background: #838f94;
      color: white;
      border-radius: 5px 5px 0 0;
   }
   .th {
      font-size: 16px;
      width: 50%;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(3, 200px);
      font-weight: bold;
   }
   .QrTable {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
   }
   .title {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-bottom: 30px;
      p {
         font-size: 14px;
      }
      > :first-child {
         //title
         font-size: 20px;
         font-weight: bold;
         margin-right: 20px;
      }
   }
   .mainContant {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      /* height: 90%; */
      background-color: white;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      border-radius: 5px;
      padding: 30px;
      overflow: hidden;
   }
   @media screen and (max-width: 1250px) {
      .th {
         /* margin-top: 20px; */
         grid-template-columns: repeat(3, 50%);
      }
      .flex {
         min-width: auto;
         flex-direction: column-reverse;
      }
   }
   @media screen and (max-width: 900px) {
      padding: 30px;
      .th {
         font-size: 10px;
         grid-template-columns: repeat(3, 100px);
      }
      .flex {
         min-width: auto;
         flex-direction: column-reverse;
      }
      .title {
         flex-direction: column;
         align-items: flex-start;
         h1 {
            margin-bottom: 15px;
            font-size: 18px !important;
         }
         p {
            font-size: 12px;
         }
      }
      .mainContant {
         padding: 30px 0;
         box-shadow: none;
      }
      .QrTable {
         font-size: 16px;
         font-weight: bold;
         margin-bottom: 15px;
      }
   }
`;
export default CreateQR;
