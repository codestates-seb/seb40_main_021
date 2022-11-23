import styled from 'styled-components';
import QrInfo from './QrInfo';
const QrList = () => {
   const dummyData = {
      data: [
         {
            id: 0,
            tableNum: 1,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/1`
         },
         {
            id: 1,
            tableNum: 2,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/2`
         },
         {
            id: 2,
            tableNum: 3,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/3`
         },
         {
            id: 2,
            tableNum: 4,
            date: new Date().toLocaleDateString().slice(0, -1),
            qrURL: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/menu/1/4`
         }
      ]
   };

   return (
      <QrListBox>
         {dummyData.data.length === 0 ? (
            <div className="emptyList">저장된 QR이 없습니다.</div>
         ) : (
            dummyData.data.map((data, idx) => {
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
