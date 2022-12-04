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
         <div className="printSize">
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
                     <div className="paging">{`${pageNum + 1}/${dividedQrList.length}`}</div>
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
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(230, 230, 230, 0.5);
   overflow: scroll;
   &::-webkit-scrollbar {
      width: 10px;
      background: rgba(0, 0, 0, 0);
   }
   &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
   }
   .paging {
      color: black;
      font-size: 15px;
      font-weight: bold;
   }
   .imgs {
      height: 1123px;
      background-color: white;
   }
   .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      width: fit-content;
      height: fit-content;
      left: 250px;
      top: 10%;
      left: -5%;
      transform: translate(-50%, -50%);
      .btnBox {
         padding: 5px;
         margin-bottom: 10px;
         display: flex;
         align-items: center;
         flex-direction: column;
         justify-content: center;
         .printBtn {
            margin: 0;
            margin-bottom: 10px;
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
            border-radius: 5px;
            margin-bottom: 10px;
            border: 0;
            cursor: pointer;
         }
      }
   }
   .printSize {
      display: flex;
      width: 794px;
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
