import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import QrInfo from './QrInfo';
const QrList = () => {
   const qrData = useSelector(state => state.adminReducer.qrDate);
   return (
      <QrListBox>
         {qrData.length === 0 ? (
            <div className="emptyList">저장된 QR이 없습니다.</div>
         ) : (
            qrData.map((data, idx) => {
               return <QrInfo key={idx} data={data} idx={idx}></QrInfo>;
            })
         )}
      </QrListBox>
   );
};
const QrListBox = styled.div`
   border: 1px solid lightgray;
   width: 100%;
   height: 70%;
   box-shadow: 0 4px 2px 0px lightgray;
   overflow-y: scroll;

   .emptyList {
      display: flex;
      font-size: 16px;
      height: 100%;
      justify-content: center;
      align-items: center;
   }
   ::-webkit-scrollbar {
      width: 8px;
   }
   ::-webkit-scrollbar-thumb {
      background: #a9a9a9;
   }
   > :nth-child(even) {
      background-color: rgb(246, 246, 246);
   }
`;
export default QrList;
