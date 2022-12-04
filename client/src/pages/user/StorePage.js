import StoreInfo from '../../components/AdminComponents/StoreInfo/StoreInfo';
import styled from 'styled-components';
// import Buttons from '../../../components/AdminComponents/StoreInfo/Buttons';
import Buttons from '../../components/AdminComponents/StoreInfo/Buttons';
import { useState } from 'react';
const Store = () => {
   const [isEmptyValue, setIsEmptyValue] = useState(true);
   const [userInfo, setUserInfo] = useState({
      userImage: '',
      about: '',
      address: '',
      businessHours: '',
      businessName: '',
      businessNumber: '',
      contactNumber: ''
   });
   return (
      <StoreContainer>
         <StoreInfo setIsEmptyValue={setIsEmptyValue} userInfo={userInfo}></StoreInfo>
         <Buttons isEmptyValue={isEmptyValue} setUserInfo={setUserInfo} />
      </StoreContainer>
   );
};
const StoreContainer = styled.div`
   width: calc(100% - 250px);
   height: calc(100vh - 97px);
   min-height: 350px;
   margin-left: 250px;
   padding: 30px 50px 0 50px;

   @media screen and (max-width: 900px) {
      margin-left: 0;
      width: 100%;
      padding: 0;
   }
`;
export default Store;
