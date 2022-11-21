import React, { useState } from 'react';
import styled from 'styled-components';
import Qrimg from './Qrimg';
import { useDispatch, useSelector } from 'react-redux';
import { printModal } from '../../../redux/action/action';

const Printe = () => {
   const [clickPrintBtn, setClickPrintBtn] = useState(false);
   const dummyData = {
      data: [
         {
            id: 0,
            tableNum: 1,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/1`,
         },
         {
            id: 1,
            tableNum: 2,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/2`,
         },
         {
            id: 2,
            tableNum: 3,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/3`,
         },
         {
            id: 3,
            tableNum: 4,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/4`,
         },
      ],
   };
   const dispatch = useDispatch();
   const savedTableListCheckBoxArrState = useSelector(state => state.savedTableListCheckBoxArr);
   const filterQrList = dummyData.data.filter((qr, idx) => savedTableListCheckBoxArrState.includes(idx));
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
         <div className="imgs">
            <div>
               {clickPrintBtn ? null : (
                  <div className="btnBox">
                     <button className="printBtn" onClick={print}>
                        <div>프린트</div>
                     </button>
                     <button onClick={exit} className="exitBtn">
                        X
                     </button>
                  </div>
               )}
            </div>
            <div className="qrImg">
               {filterQrList.map(Qr => {
                  return <Qrimg key={Qr.id} data={Qr}></Qrimg>;
               })}
            </div>
         </div>
      </PrintContainer>
   );
};

const PrintContainer = styled.main`
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(204, 204, 204, 0.332);
   .imgs {
      width: 565px;
      height: 800px;
      background-color: white;
      border: 1px solid black;
   }
   .btnBox {
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .printBtn {
         margin: 0;
         display: flex;
         align-items: center;
         justify-content: center;
         width: 60px;
         height: 25px;
         border: 2px solid #ff6c01;
         cursor: pointer;
         color: black;
         border-radius: 10px;
         margin-left: 30px;
         background-color: #ff6c01;
         font-size: 15px;
         font-weight: 700;
      }
      .exitBtn {
         background-color: white;
         margin-right: 20px;
         border-radius: 5px;
         border: 0;
         cursor: pointer;
      }
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
