import React from 'react';
import styled from 'styled-components';
import QrTable from '../../components/AdminComponents/QrTable/QrTable';

const QrTablePage = () => {
   return (
      <QrTablePageContainer>
         <QrTable></QrTable>
      </QrTablePageContainer>
   );
};
const QrTablePageContainer = styled.div`
   width: calc(100% - 300px);
   padding-left: 300px;
   height: 100%;
   background-color: rgb(246, 246, 246);
   @media screen and (max-width: 700px) {
      padding-left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
   }
`;
export default QrTablePage;
