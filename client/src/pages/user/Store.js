import React from 'react';
import StoreInfo from '../../components/AdminComponents/StoreInfo/StoreInfo';
import styled from 'styled-components';
const Store = () => {
   return (
      <StoreContainer>
         <StoreInfo></StoreInfo>
      </StoreContainer>
   );
};
const StoreContainer = styled.div`
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
export default Store;
