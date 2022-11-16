import React from 'react';
import styled from 'styled-components';
import QrInfo from './QrInfo';
const QrList = () => {
   const dummyData = {
      data: [
         { id: 0, tableNum: '01', date: '22.11.11' },
         { id: 1, tableNum: '02', date: '22.11.11' },
         { id: 2, tableNum: '03', date: '22.11.11' },
         { id: 3, tableNum: '04', date: '22.11.11' },
         { id: 4, tableNum: '05', date: '22.11.11' },
         { id: 5, tableNum: '06', date: '22.11.11' },
         { id: 6, tableNum: '07', date: '22.11.11' },
         { id: 7, tableNum: '08', date: '22.11.11' },
      ],
   };
   return (
      <QrListBox>
         {dummyData.data.map((data, idx) => {
            return <QrInfo key={data.id} data={data} idx={idx}></QrInfo>;
         })}
      </QrListBox>
   );
};
const QrListBox = styled.div`
   border: 1px solid lightgray;
   width: 100%;
   height: 100%;
   box-shadow: 0 4px 2px 0px lightgray;
   overflow-y: scroll;
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
