import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createQr } from '../../../redux/action/action';
import { useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate();
   // eslint-disable-next-line no-unused-vars
   const url = useSelector(state => state.adminReducer.apiUrl);
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

      if (!setOverlapNumState && !setSavedTebleNum) {
         const body = { tableList: qrData };
         //${url}
         fetch(`${url}/table/${sessionStorage.getItem('userId')}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         })
            .then(res => {
               console.log(res);
               if (res.status === 200) {
                  alert('테이블 등록');
                  navigate('/user/qr');
               } else {
                  alert('통신 에러');
               }
            })
            .catch(err => console.log(err));
      } else {
         //데이터 패치

         alert('중복된 테이블 번호가 입력되었습니다.');
      }
   };

   return <Btn onClick={text === 'QR 등록' ? hadleClickCreateQR : handleClickSaveQr}>{text}</Btn>;
};

export default ButtonWrap;
