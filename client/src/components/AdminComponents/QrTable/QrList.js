import { useSelector } from 'react-redux';
import styled from 'styled-components';
import QrInfo from './QrInfo';
const QrList = ({ dummyState, allChackBoxRef }) => {
   const qrData = useSelector(state => state.adminReducer.qrDate);

   qrData.sort((a, b) => {
      if (a.tableNumber > b.tableNumber) return 1;
      if (a.tableNumber < b.tableNumber) return -1;
      return 0;
   });

   return (
      <QrListBox>
         {qrData && qrData.length === 0 ? (
            <div className="emptyList">저장된 QR이 없습니다.</div>
         ) : (
            qrData &&
            qrData.map((data, idx) => {
               return (
                  <QrInfo
                     key={idx}
                     data={data}
                     idx={idx}
                     dummyState={dummyState}
                     length={qrData.length}
                     allChackBoxRef={allChackBoxRef}></QrInfo>
               );
            })
         )}
      </QrListBox>
   );
};
const QrListBox = styled.div`
   border: 1px solid lightgray;
   border-radius: 5px;
   width: 100%;
   height: 70%;
   overflow-y: scroll;
   .emptyList {
      display: flex;
      font-size: 16px;
      min-height: 150px;
      justify-content: center;
      align-items: center;
      font-weight: 900;
   }
   ::-webkit-scrollbar {
      width: 8px;
   }
   ::-webkit-scrollbar-thumb {
      background: #a9a9a9;
   }
`;
export default QrList;
