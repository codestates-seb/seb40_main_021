import { useState } from 'react';
import styled from 'styled-components';
import Qrimg from './Qrimg';
import { useDispatch, useSelector } from 'react-redux';
import { printModal } from '../../../redux/action/action';
import { AiOutlinePrinter } from 'react-icons/ai';

const Printe = () => {
   const [clickPrintBtn, setClickPrintBtn] = useState(false);
   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);
   const qrData = useSelector(state => state.adminReducer.qrDate);
   const filterQrList = qrData.filter((qr, idx) => savedTableListCheckBoxArrState.includes(idx));
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
         <div className="btn">
            {clickPrintBtn ? null : (
               <div className="btnBox">
                  <button className="printBtn" onClick={print}>
                     <AiOutlinePrinter size={30}></AiOutlinePrinter>
                  </button>
                  <button onClick={exit} className="exitBtn">
                     X
                  </button>
               </div>
            )}
         </div>
         <div className="imgs">
            <div className="qrImg">
               {filterQrList.map(Qr => {
                  return <Qrimg key={Qr.tableId} data={Qr}></Qrimg>;
               })}
            </div>
         </div>
      </PrintContainer>
   );
};

const PrintContainer = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(204, 204, 204, 0.332);
   .btn {
      width: 565px;
      .btnBox {
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
         .exitBtn {
            background-color: white;
            margin-right: 20px;
            border-radius: 5px;
            border: 0;
            cursor: pointer;
         }
      }
   }
   .imgs {
      width: 565px;
      height: 800px;
      background-color: white;
      border: 1px solid black;
   }

   .qrImg {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      justify-content: center;
   }

   @media screen and (max-width: 700px) {
      padding-left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
   }
`;

export default Printe;
