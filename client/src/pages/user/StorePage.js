import StoreInfo from '../../components/AdminComponents/StoreInfo/StoreInfo';
import styled from 'styled-components';
// import Buttons from '../../../components/AdminComponents/StoreInfo/Buttons';
import Buttons from '../../components/AdminComponents/StoreInfo/Buttons';
import { useState } from 'react';
const Store = () => {
   const [isEmptyValue, setIsEmptyValue] = useState(true);
   return (
      <StoreContainer>
         <StoreInfo setIsEmptyValue={setIsEmptyValue}></StoreInfo>
         <Buttons isEmptyValue={isEmptyValue} />
      </StoreContainer>
   );
};
const StoreContainer = styled.div`
   width: calc(100% - 250px);
   margin-left: 250px;
   background-color: rgb(246, 246, 246);
   padding: 30px 50px 0 50px;
   @media screen and (max-width: 900px) {
      margin-left: 0;
      height: calc(100vh - 97px);
      width: 100%;
      background-color: white;
      padding: 0;
   }
`;
export default Store;
