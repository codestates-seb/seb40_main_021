import React, { useState } from 'react';
import { registerTableNum } from '../../../redux/action/action';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setOverlapNumState, setSavedTebleNum } from '../../../redux/action/action';
const QrInfo = ({ data, idx }) => {
   const [savedNumChack, setSavedNumChack] = useState(false);
   const dummyData = [{ tableNum: 1 }, { tableNum: 2 }, { tableNum: 3 }];

   const qrDataList = useSelector(state => state.qrDate);
   const dispatch = useDispatch();
   const onChangeTableNumDispatch = e => {
      const tableNum = e.target.value;
      // tableNumber Input value 중복
      dispatch(registerTableNum(tableNum, idx));
      const inputedTableNums = qrDataList.filter(qrData => qrData.tableNum).map(qrData => qrData.tableNum);
      const inputedTableNumsSet = new Set(inputedTableNums);
      console.log('inputedTableNums :', inputedTableNums);
      console.log('inputedTableNumsSet :', inputedTableNumsSet);
      if (inputedTableNums.length !== inputedTableNumsSet.size) {
         dispatch(setOverlapNumState(true));
      } else {
         dispatch(setOverlapNumState(false));
      }

      // DB에 저정되어 있는 테이블과 tableNumber Input value 중복
      let savedTableNum = dummyData.map(data => {
         return String(data.tableNum);
      });
      // let savedTableNumSet = new Set([...savedTableNum, ...inputedTableNums]);
      // if (savedTableNum.length !== savedTableNumSet.size) {
      //    setSavedNumChack(false);
      // } else {
      //    setSavedNumChack(true);
      // }
      const isIncludes = savedTableNum.includes(tableNum);
      if (isIncludes) {
         dispatch(setSavedTebleNum(true));
         setSavedNumChack(true);
      } else {
         dispatch(setSavedTebleNum(false));
         setSavedNumChack(false);
      }
   };

   return (
      <QrInfoBox savedNumChack={savedNumChack}>
         <div className="qrInfos">
            <div>{idx + 1}</div>
            <div className="tableNumBox">
               <input className="overNum" type="text" onChange={e => onChangeTableNumDispatch(e)}></input>
               <div>{savedNumChack ? '이미 저장되어 있는 번호입니다.' : ''}</div>
            </div>
            <div>{data.date}</div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;

   .tableNumBox {
      display: flex;
   }

   .overNum {
      border: 0;
      border-bottom: ${({ savedNumChack }) => (savedNumChack ? '3px solid rgb(255,107,0);' : 'none')};
      height: 30px;
      width: 50px;
      background-color: rgb(244, 244, 244);
   }
   .qrInfos {
      display: grid;
      height: 100%;
      flex-direction: column;
      grid-template-columns: repeat(3, 120px);
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
