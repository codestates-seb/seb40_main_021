import React from 'react';
import styled from 'styled-components';
import QrList from './QrList';
import Button from './Button';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { modifyingSavedTableNum } from '../../../redux/action/action';
const CreateQR = () => {
   const dispatch = useDispatch();
   const modifyingSavedTableNumState = useSelector(state => state.modifyingSavedTableNum);

   const handleClcikModifyingSavedTableNum = () => {
      dispatch(modifyingSavedTableNum(!modifyingSavedTableNumState));
   };
   const handleClcikSubmitNewTableNum = () => {
      alert('전송');
      handleClcikModifyingSavedTableNum();
   };
   return (
      <MainContants>
         <div className="title">
            <h1>QR Table</h1>
         </div>
         <main className="mainContant">
            <div className="QrTable">
               <label>생성 완료된 QR Table</label>
               <div className="u_d_btnBox">
                  {modifyingSavedTableNumState ? (
                     <button onClick={handleClcikSubmitNewTableNum} className="u_d_btn">
                        확인
                        <CiEdit size="20"></CiEdit>
                     </button>
                  ) : (
                     <button onClick={handleClcikModifyingSavedTableNum} className="u_d_btn">
                        수정
                        <CiEdit size="20"></CiEdit>
                     </button>
                  )}

                  <button className="u_d_btn">
                     삭제
                     <RiDeleteBinLine size="15"></RiDeleteBinLine>
                  </button>
               </div>
            </div>

            <div className="flex">
               <div className="th">
                  <div>선택</div>
                  <div>No.</div>
                  <div>테이블 번호</div>
                  <div>생성 날짜</div>
                  <div></div>
               </div>
            </div>
            <QrList></QrList>
            <div className="printBtn">
               <Button text1={'전체 인쇄'} text2={'선택 인쇄'}></Button>
            </div>
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
   .u_d_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border: 0;
      height: auto;
      width: auto;
      border-radius: 5px;
      :hover {
         background-color: lightgray;
      }
   }
   .u_d_btnBox {
      display: flex;
      width: 100%;
      justify-content: end;
      > :first-child {
         display: flex;
         align-items: center;

         margin-right: 30px;
         cursor: pointer;
         > :first-child {
            margin-bottom: 3px;
            margin-left: 5px;
         }
      }
      > :last-child {
         display: flex;
         align-items: center;
         cursor: pointer;
         > :first-child {
            margin-bottom: 3px;
            margin-left: 5px;
         }
      }
   }

   .printBtn {
      display: flex;
      justify-content: end;
      margin-top: 20px;
   }
   .flex {
      display: flex;
      margin-bottom: 10px;
   }
   .th {
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(5, 1fr);
      font-weight: bold;
   }
   .QrTable {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 50px;
      > label {
         width: 100%;
      }
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
   @media screen and (max-width: 700px) {
      font-size: 13px;
   }
`;
export default CreateQR;
