import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createQr } from '../../redux/action/action';

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
// const hadleClickCreateQR = () => {
//    const qrURL = 'https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/userid/tableNum';
//    const qrImg = document.createElement('img');
//    qrImg.setAttribute('id', 'qrCodeImg');
//    qrImg.setAttribute('src', qrURL);
// };

const ButtonWrap = ({ text, num }) => {
   const dispatch = useDispatch();
   const hadleClickCreateQR = () => {
      const QrList = [];
      for (let i = 0; i < num; i++) {
         QrList.push({ qrURL: null, tableNum: null, date: new Date().toLocaleDateString().slice(0, -1) });
      }
      dispatch(createQr(QrList));
   };
   const handleClickSaveQr = () => {
      //서버에 post 요청
   };

   return <Btn onClick={text === 'QR 등록' ? hadleClickCreateQR : handleClickSaveQr}>{text}</Btn>;
};

export default ButtonWrap;
