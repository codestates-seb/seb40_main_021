import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setOverlapNumState, setSavedTebleNum, registerTableNum } from '../../../redux/action/action';

import axios from 'axios';
const QrInfo = ({ idx }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const inputRef = useRef(null);
   const [savedNumChack, setSavedNumChack] = useState(false);
   const [inputTextLengthCheck, setInputTextLengthCheck] = useState(true);
   const [qrData, setQrData] = useState([]);
   const qrDataList = useSelector(state => state.adminReducer.qrDate);
   const dispatch = useDispatch();
   const onChangeTableNumDispatch = e => {
      let tableNum = e.target.value;
      if (isNaN(tableNum)) {
         alert('숫자를 입력해주세요');
         setSavedNumChack(true);
         inputRef.current.value = '';
      } else {
         if (tableNum) tableNum.length === 0 ? setInputTextLengthCheck(true) : setInputTextLengthCheck(false);
         // tableNumber Input value 중복
         dispatch(registerTableNum(tableNum, idx));
         const inputedTableNums = qrDataList.filter(qrData => qrData.tableNumber).map(qrData => qrData.tableNumber);
         const inputedTableNumsSet = new Set(inputedTableNums);
         if (inputedTableNums.length !== inputedTableNumsSet.size) {
            dispatch(setOverlapNumState(true));
         } else {
            dispatch(setOverlapNumState(false));
         }

         // DB에 저정되어 있는 테이블과 tableNumber Input value 중복
         let savedTableNum = qrData.map(data => {
            return String(data.tableNumber);
         });
         const isIncludes = savedTableNum.includes(tableNum);
         if (isIncludes) {
            dispatch(setSavedTebleNum(true));
            setSavedNumChack(true);
         } else {
            dispatch(setSavedTebleNum(false));
            setSavedNumChack(false);
         }
      }
   };
   useEffect(() => {
      axios
         .get(`${API_BASE_URL}/table/${sessionStorage.getItem('userId')}/qr`, {
            headers: { Authorization: sessionStorage.getItem('Authorization') }
         })
         .then(res => {
            setQrData(res.data.data);
         });
   }, []);
   return (
      <QrInfoBox savedNumChack={savedNumChack}>
         <div className="qrInfos">
            <div>{idx + 1}</div>
            <div className="tableNumBox">
               <input
                  ref={inputRef}
                  className="tableNuminput"
                  type="text"
                  onChange={e => onChangeTableNumDispatch(e)}></input>
            </div>
            <div className="textBox">
               {inputTextLengthCheck
                  ? '번호를 입력해주세요.'
                  : savedNumChack
                  ? '등록된 테이블입니다.'
                  : '사용 가능한 번호 입니다.'}
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
      width: 80px;
      padding: 0 15px;
      text-align: center;
      background-color: rgb(244, 244, 244);
      border-bottom: 2px solid #b6b6b6;
   }
   .tableNuminput:focus {
      outline: none;
      border-bottom: 2px solid #666666;
   }
   .qrInfos {
      font-size: 14px;
      display: grid;
      height: 100%;
      flex-direction: column;
      grid-template-columns: repeat(3, 200px);
      width: 50%;
      align-items: center;
      justify-items: center;
      div:first-child {
         font-size: 16px;
         font-weight: 900;
      }
   }
   @media screen and (max-width: 1250px) {
      .qrInfos {
         grid-template-columns: repeat(3, 50%);
      }
   }
   @media screen and (max-width: 900px) {
      .textBox {
         font-size: 10px;
      }
      .qrInfos {
         grid-template-columns: repeat(3, 100px);
      }
   }
`;
export default QrInfo;
