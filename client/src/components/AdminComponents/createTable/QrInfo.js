import React, { useState } from 'react';
import { registerTableNum } from '../../../redux/action/action';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setOverlapNumState, setSavedTebleNum } from '../../../redux/action/action';
const QrInfo = ({ idx }) => {
   const [savedNumChack, setSavedNumChack] = useState(false);
   const [inputTextLengthCheck, setInputTextLengthCheck] = useState(true);

   const dummyData = [{ tableNum: 1 }, { tableNum: 2 }];
   const qrDataList = useSelector(state => state.adminReducer.qrDate);

   const dispatch = useDispatch();

   const onChangeTableNumDispatch = e => {
      const tableNum = e.target.value;
      tableNum.length === 0 ? setInputTextLengthCheck(true) : setInputTextLengthCheck(false);
      console.log(inputTextLengthCheck);
      // tableNumber Input value 중복
      dispatch(registerTableNum(tableNum, idx));
      const inputedTableNums = qrDataList.filter(qrData => qrData.tableNum).map(qrData => qrData.tableNum);
      const inputedTableNumsSet = new Set(inputedTableNums);
      if (inputedTableNums.length !== inputedTableNumsSet.size) {
         dispatch(setOverlapNumState(true));
      } else {
         dispatch(setOverlapNumState(false));
      }

      // DB에 저정되어 있는 테이블과 tableNumber Input value 중복
      let savedTableNum = dummyData.map(data => {
         return String(data.tableNum);
      });
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
               <input className="tableNuminput" type="text" onChange={e => onChangeTableNumDispatch(e)}></input>
            </div>
            <div className="textBox">
               {inputTextLengthCheck ? '번호를 입력해주세요.' : savedNumChack ? '등록된 테이블입니다.' : 'Y'}
            </div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;

   .tableNumBox {
      display: flex;
   }
   .textBox {
      color: ${({ savedNumChack }) => (savedNumChack ? 'rgb(255,107,0)' : 'black')};
   }

   .tableNuminput {
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
      grid-template-columns: repeat(3, 200px);
      width: 50%;
      align-items: center;
      justify-items: center;
   }
   @media screen and (max-width: 1250px) {
      .qrInfos {
         grid-template-columns: repeat(3, 50%);
      }
   }
   @media screen and (max-width: 700px) {
      .qrInfos {
         grid-template-columns: repeat(3, 100px);
      }
   }
`;
export default QrInfo;
