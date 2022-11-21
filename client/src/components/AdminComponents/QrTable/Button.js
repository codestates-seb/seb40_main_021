import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { printModal } from '../../../redux/action/action';
import Printe from '../Print/Printe';

const ButtonWrap = () => {
   const dispatch = useDispatch();

   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);

   const printModalState = useSelector(state => state.adminReducer.printModal);

   const handleClickPrintBtn = () => {
      savedTableListCheckBoxArrState.length === 0 ? alert('선택된 QR Table이 없습니다.') : dispatch(printModal(true));
   };
   return (
      <Btns>
         <button onClick={handleClickPrintBtn} className="PrintBtn">
            인쇄
         </button>
         {printModalState ? <Printe /> : null}
      </Btns>
   );
};

const Btns = styled.div`
   display: flex;
   justify-content: end;
   width: 100%;
   .PrintBtn {
      width: 120px;
      height: 47px;
      border: 2px solid #ff6c01;
      cursor: pointer;
      color: white;
      border-radius: 10px;
      margin-left: 30px;
      background-color: #ff6c01;
      font-size: 15px;
      font-weight: 700;
      @media screen and (max-width: 700px) {
         margin-left: 0px;
         width: 50%;
      }
   }
`;
export default ButtonWrap;
