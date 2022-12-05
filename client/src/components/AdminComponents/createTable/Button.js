import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createQr } from '../../../redux/action/action';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Btn = styled.button`
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
   }
`;

const ButtonWrap = ({ text, num }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const navigate = useNavigate();
   const setOverlapNumState = useSelector(state => state.adminReducer.tableNumInputValueOverlap);
   const setSavedTebleNum = useSelector(state => state.adminReducer.setSavedTebleNum);
   const qrData = useSelector(state => state.adminReducer.qrDate);
   const dispatch = useDispatch();
   const hadleClickCreateQR = () => {
      if (num > 30) {
         alert('30 이하의 숫자를 입력해주세요.');
      }
      if (isNaN(num)) {
         alert('숫자를 입력해주세요.');
      }
      const QrList = [];
      for (let i = 0; i < num; i++) {
         QrList.push({ qrUrl: null, tableNumber: null, createdAt: new Date().toLocaleDateString().slice(0, -1) });
      }
      dispatch(createQr(QrList));
   };

   const handleClickSaveQr = () => {
      //서버에 post 요청
      for (let i = 0; i < qrData.length; i++) {
         if (!qrData[i].tableNumber) {
            alert('테이블 번호를 전부 입력해주세요');
            return;
         }
      }
      if (!setOverlapNumState && !setSavedTebleNum) {
         const body = { tableList: qrData };
         fetch(`${API_BASE_URL}/table/${sessionStorage.getItem('userId')}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: sessionStorage.getItem('Authorization')
            },

            body: JSON.stringify(body)
         })
            .then(res => {
               if (res.status === 201) {
                  alert('테이블 등록');
                  navigate('/user/qr');
               } else {
                  alert('통신 에러');
               }
            })
            .catch(err => err);
      } else {
         //데이터 패치

         alert('중복된 테이블 번호가 입력되었습니다.');
      }
   };
   useEffect(() => {
      dispatch(createQr([]));
   }, []);
   return <Btn onClick={text === 'QR 등록' ? hadleClickCreateQR : handleClickSaveQr}>{text}</Btn>;
};

export default ButtonWrap;
