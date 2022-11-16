import React from 'react';
import styled from 'styled-components';
import CreateQR from '../../components/AdminComponents/QrTable/CreateQR';

const QrTable = () => {
   return (
      <QrTableContainer>
         <CreateQR></CreateQR>
      </QrTableContainer>
   );
};
const QrTableContainer = styled.div`
   width: calc(100% - 300px);
   padding-left: 300px;
   background-color: rgb(246, 246, 246);
   @media screen and (max-width: 700px) {
      padding-left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
   }
`;
export default QrTable;
