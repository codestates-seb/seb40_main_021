import React from 'react';
import StoreInfo from '../../components/AdminComponents/StoreInfo/StoreInfo';
import styled from 'styled-components';
import Buttons from '../../components/AdminComponents/StoreInfo/Buttons';
const Store = () => {
   return (
      <StoreContainer>
         <StoreInfo></StoreInfo>
         <Buttons></Buttons>
      </StoreContainer>
   );
};
const StoreContainer = styled.div`
   width: calc(100% - 300px);
   padding-left: 300px;
   background-color: rgb(246, 246, 246);
   @media screen and (max-width: 700px) {
      padding-left: 0;
      height: calc(100% - 37px);
      width: 100%;
      background-color: white;
   }
`;
export default Store;
