import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { savedTableListCheckBoxArr } from '../../../redux/action/action';
const QrInfo = ({ data, idx }) => {
   const modifyingSavedTableNumState = useSelector(state => state.modifyingSavedTableNum);
   const savedTableListCheckBoxArrState = useSelector(state => state.savedTableListCheckBoxArr);
   const isIncludes = savedTableListCheckBoxArrState.includes(idx);
   const dispatch = useDispatch();
   const handleClickCheckBox = idx => {
      dispatch(savedTableListCheckBoxArr(idx));
   };

   return (
      <QrInfoBox isIncludes={isIncludes}>
         <div className="qrInfos">
            <div>
               <input onClick={() => handleClickCheckBox(idx)} type="checkbox"></input>
            </div>
            <div>{idx + 1}</div>
            <div className="tableNumBox">
               <div className={modifyingSavedTableNumState && isIncludes ? 'displayNone' : 'none'}>{data.tableNum}</div>
               <input
                  defaultValue={data.tableNum}
                  className={modifyingSavedTableNumState && isIncludes ? 'tableNuminput' : 'displayNone'}
                  type="text"></input>
            </div>
            <div>{data.date}</div>
            <div></div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;
   border: ${({ isIncludes }) => (isIncludes ? '1px solid rgb(255, 107, 0);' : 'none')};
   .tableNuminput {
      border: 0;
      height: 30px;
      width: 50px;
      background-color: rgb(244, 244, 244);
   }
   .displayNone {
      display: none;
   }
   .tableNumBox {
      color: rgb(255, 107, 0);
   }

   .qrInfos {
      display: grid;
      height: 100%;
      flex-direction: column;
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
      align-items: center;
      justify-items: center;
   }
   @media screen and (max-width: 700px) {
      .qrInfos {
      }
   }
`;
export default QrInfo;
