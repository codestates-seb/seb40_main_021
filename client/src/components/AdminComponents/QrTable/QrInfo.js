import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { savedTableListCheckBoxArr, registUpdateTableNumber } from '../../../redux/action/action';
const QrInfo = ({ data, idx, dummyState }) => {
   const modifyingSavedTableNumState = useSelector(state => state.adminReducer.modifyingSavedTableNum);
   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);
   const isIncludes = savedTableListCheckBoxArrState.includes(idx);
   const dispatch = useDispatch();
   const handleClickCheckBox = idx => {
      dispatch(savedTableListCheckBoxArr(idx));
   };
   const qrListAllCheckState = useSelector(state => state.adminReducer.qrListAllCheck);
   const checkBoxRef = useRef(null);
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.value = data.tableNumber;
   }, [dummyState]);
   useEffect(() => {
      if (qrListAllCheckState) {
         checkBoxRef.current.checked = true;
      } else {
         checkBoxRef.current.checked = false;
      }
   }, [qrListAllCheckState]);
   const handleChangeInput = e => {
      if (isNaN(e.target.value)) {
         alert('숫자를 입력해주세요.');
         inputRef.current.value = '';
      } else {
         dispatch(registUpdateTableNumber(idx, e.target.value));
      }
   };
   return (
      <QrInfoBox isIncludes={isIncludes}>
         <div className="qrInfos">
            <div>
               <input ref={checkBoxRef} onClick={() => handleClickCheckBox(idx)} type="checkbox"></input>
            </div>
            <div>{idx + 1}</div>
            <div className="tableNumBox">
               <div className={modifyingSavedTableNumState && isIncludes ? 'displayNone' : 'none'}>
                  {data.tableNumber}
               </div>
               <input
                  ref={inputRef}
                  onChange={handleChangeInput}
                  className={modifyingSavedTableNumState && isIncludes ? 'tableNuminput' : 'displayNone'}
                  type="text"></input>
            </div>
            <div>{data.createdAt}</div>
            <div></div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;
   background-color: ${({ isIncludes }) => (isIncludes ? '#FFEBDD' : 'white')};
   border-bottom: 1px solid #ffebdd;
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
      font-weight: 900;
      input {
         width: 80px;
         padding: 0 15px;
         text-align: center;
         background-color: rgb(244, 244, 244);
         border-bottom: 2px solid #b6b6b6;
      }
      input:focus {
         outline: none;
         border-bottom: 2px solid #666666;
      }
   }

   .qrInfos {
      display: grid;
      font-size: 14px;
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
