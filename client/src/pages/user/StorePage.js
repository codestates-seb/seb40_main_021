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
   width: calc(100% - 250px);
   margin-left: 250px;
   background-color: rgb(246, 246, 246);
   @media screen and (max-width: 700px) {
      margin-left: 0;
      height: calc(100% - 37px);
      width: 100%;
      background-color: white;
   }
`;
export default Store;
