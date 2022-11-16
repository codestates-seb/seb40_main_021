import React from 'react';
import styled from 'styled-components';
const QrInfo = ({ data, idx }) => {
   console.log(idx);
   return (
      <QrInfoBox>
         <div className="qrInfos">
            <input type="checkbox" className="qrInfo"></input>
            <div>{idx}</div>
            <div>{data.tableNum}</div>
            <div>{data.date}</div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;

   .qrInfos {
      display: grid;
      height: 100%;
      flex-direction: column;
      grid-template-columns: repeat(4, 120px);
      width: 50%;
      align-items: center;
      justify-items: center;
   }
   @media screen and (max-width: 1100px) {
      .qrInfos {
         grid-template-columns: repeat(4, 50%);
      }
   }
   @media screen and (max-width: 700px) {
      .qrInfos {
         grid-template-columns: repeat(4, 80px);
      }
   }
`;
export default QrInfo;
