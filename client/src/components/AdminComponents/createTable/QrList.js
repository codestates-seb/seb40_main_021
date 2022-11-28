import styled from 'styled-components';
import QrInfo from './QrInfo';
import { useSelector } from 'react-redux';
const QrList = () => {
   const qrDatas = useSelector(state => state.adminReducer.qrDate);

   return (
      <QrListBox>
         {qrDatas.length === 0 ? (
            <div className="emptyList">저장할 QR이 없습니다.</div>
         ) : (
            qrDatas.map((data, idx) => {
               return <QrInfo key={idx} data={data} idx={idx}></QrInfo>;
            })
         )}
      </QrListBox>
   );
};
const QrListBox = styled.div`
   border: 1px solid lightgray;
   border-radius: 5px;
   width: 100%;
   max-height: 400px;
   /* box-shadow: 0 4px 2px 0px lightgray; */
   overflow-y: scroll;
   .emptyList {
      display: flex;
      font-size: 16px;
      height: 150px;
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
   > :nth-child(even) {
      /* background-color: rgb(246, 246, 246); */
      background-color: rgb(237 237 237);
   }
`;
export default QrList;
