import { useState } from 'react';
import styled from 'styled-components';
import Qrimg from './Qrimg';
import { useDispatch, useSelector } from 'react-redux';
import { printModal } from '../../../redux/action/action';
import { AiOutlinePrinter } from 'react-icons/ai';

const Printe = () => {
   const [clickPrintBtn, setClickPrintBtn] = useState(false);
   const [pageNum, setPageNum] = useState(0);
   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);
   const qrData = useSelector(state => state.adminReducer.qrDate);
   const filterQrList = qrData.filter((qr, idx) => savedTableListCheckBoxArrState.includes(idx));
   function divideQrList(data = [], size = 1) {
      const arr = [];

      for (let i = 0; i < data.length; i += size) {
         arr.push(data.slice(i, i + size));
      }

      return arr;
   }
   const dividedQrList = divideQrList(filterQrList, 12);
   console.log('dividedQrList', dividedQrList);
   const dispatch = useDispatch();
   const print = async () => {
      await setClickPrintBtn(true);
      await window.print();
      await setClickPrintBtn(false);
   };

   const exit = () => {
      dispatch(printModal(false));
   };
   return (
      <PrintContainer>
         <div className="print">
            <div className="btn">
               {clickPrintBtn ? null : (
                  <div className="btnBox">
                     <button className="printBtn" onClick={print}>
                        <AiOutlinePrinter size={30}></AiOutlinePrinter>
                     </button>
                     <button
                        className="optionBtn"
                        onClick={() => {
                           if (pageNum === 0) {
                              alert('첫 페이지 입니다.');
                              return;
                           }
                           setPageNum(pageNum - 1);
                        }}>
                        이전
                     </button>
                     <button
                        className="optionBtn"
                        onClick={() => {
                           if (pageNum === dividedQrList.length - 1) {
                              alert('마지막 페이지 입니다.');
                              return;
                           }
                           setPageNum(pageNum + 1);
                        }}>
                        다음
                     </button>

                     <button onClick={exit} className="optionBtn">
                        나가기
                     </button>
                     <div>{`${pageNum + 1}/${dividedQrList.length}`}</div>
                  </div>
               )}
            </div>
            <div className="imgs">
               <div className="qrImg">
                  {dividedQrList[pageNum].map(Qr => {
                     return <Qrimg key={Qr.tableId} data={Qr}></Qrimg>;
                  })}
               </div>
            </div>
         </div>
      </PrintContainer>
   );
};

const PrintContainer = styled.main`
   display: flex;
   height: 100vh;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: white;
   .btn {
      width: 300px;
      height: 30px;
      left: 250px;
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translate(-50%, -50%);
      .btnBox {
         padding: 5px;
         margin-bottom: 10px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         .printBtn {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
         }
         .optionBtn {
            font-weight: bold;
            width: 50px;
            height: 20px;
            text-align: center;
            background-color: black;
            color: white;
            margin-right: 20px;
            border-radius: 5px;
            border: 0;
            cursor: pointer;
         }
      }
   }
   .print {
      box-sizing: border-box;
      width: 706.25px;
      height: 1000px;
      background-color: white;
      overflow: hidden;
   }

   .qrImg {
      display: grid;
      height: 100%;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
      justify-content: center;
   }

   @media screen and (max-width: 900px) {
      padding-left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
   }
`;

export default Printe;
