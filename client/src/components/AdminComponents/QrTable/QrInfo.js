import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { savedTableListCheckBoxArr, registUpdateTableNumber } from '../../../redux/action/action';

const QrInfo = ({ data, idx, length, allChackBoxRef }) => {
   const modifyingSavedTableNumState = useSelector(state => state.adminReducer.modifyingSavedTableNum);
   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);

   const [isChecked, setIsChecked] = useState(false);
   const isIncludes = savedTableListCheckBoxArrState.includes(idx);
   const dispatch = useDispatch();
   const handleClickCheckBox = idx => {
      setIsChecked(!isChecked);
      dispatch(savedTableListCheckBoxArr(idx));
   };
   const checkBoxRef = useRef(null);
   const inputRef = useRef(null);

   useEffect(() => {
      if (length === savedTableListCheckBoxArrState.length) {
         allChackBoxRef.current.checked = true;
      } else {
         allChackBoxRef.current.checked = false;
      }
   }, [isChecked]);

   const handleChangeInput = e => {
      if (isNaN(e.target.value)) {
         alert('숫자를 입력해주세요.');
         inputRef.current.value = '';
      } else {
         dispatch(registUpdateTableNumber(idx, e.target.value));
      }
   };
   const onChangeCheck = () => {
      setIsChecked(isIncludes);
   };
   return (
      <QrInfoBox isIncludes={isIncludes}>
         <div className="qrInfos">
            <div>
               <input
                  id={`check-input${idx}`}
                  disabled={modifyingSavedTableNumState ? true : false}
                  ref={checkBoxRef}
                  checked={isIncludes}
                  onChange={onChangeCheck}
                  onClick={() => handleClickCheckBox(idx)}
                  type="checkbox"></input>
               <label htmlFor={`check-input${idx}`}> </label>
            </div>
            <div className="number">{idx + 1}</div>
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
            <div className="created-date">{data.createdAt}</div>
            <div></div>
         </div>
      </QrInfoBox>
   );
};
const QrInfoBox = styled.div`
   height: 50px;
   background-color: ${({ isIncludes }) => (isIncludes ? '#FFEBDD' : 'white')};
   border-bottom: 1px solid #ffebdd;
   .number,
   .tableNumBox,
   .created-date {
      font-size: 16px;
   }
   input {
      display: none;
   }
   input:checked + label::after {
      content: '✔';
      font-size: 12px;
      width: 16px;
      height: 16px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #838f94;
      color: white;
   }
   label {
      width: 17px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid gray;
      display: flex;
      position: relative;
      overflow: hidden;
      cursor: pointer;
   }
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
