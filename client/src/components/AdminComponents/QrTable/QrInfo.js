import React from 'react';
import { useDispatch } from 'react-redux';
import { registerTableNum } from '../../../redux/action/action';
import styled from 'styled-components';
const QrInfo = ({ data, idx }) => {
   const dispatch = useDispatch();
   const onChangeTableNumDispatch = e => {
      const tableNum = e.target.value;
      dispatch(registerTableNum(tableNum, idx));
   };
   return (
      <QrInfoBox>
         <div className="qrInfos">
            <div>{idx + 1}</div>
            <div>
               <input type="text" onChange={e => onChangeTableNumDispatch(e)}></input>
            </div>
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
