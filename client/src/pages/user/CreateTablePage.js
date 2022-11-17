import React from 'react';
import styled from 'styled-components';
import CreateTable from '../../components/AdminComponents/createTable/CreateTable';

const QrTable = () => {
   return (
      <QrTableContainer>
         <CreateTable></CreateTable>
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
