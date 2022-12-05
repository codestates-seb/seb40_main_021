import CallAlarms from '../../components/AdminComponents/StoreAlarm/CallAlarms';
import OrderAlarms from '../../components/AdminComponents/StoreAlarm/OrderAlarms';
import styled from 'styled-components';

const Alarms = () => {
   return (
      <Container>
         <CallAlarms />
         <OrderAlarms />
      </Container>
   );
};
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-grow: 1;
   width: calc(100% - 250px);
   margin-left: 250px;
   background-color: rgb(246, 246, 246);
   padding: 30px 50px;

   @media screen and (max-width: 900px) {
      width: 100%;
      margin-left: 0px;
      padding: 30px;
   }
`;
export default Alarms;
