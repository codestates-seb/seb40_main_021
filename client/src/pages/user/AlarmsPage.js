import CallAlarms from '../../components/AdminComponents/StoreAlarm/CallAlarms';
import OrderAlarms from '../../components/AdminComponents/StoreAlarm/OrderAlarms';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GuideModal } from '../../components/common/GuideModal';
import { useEffect } from 'react';
import { setGuideModalState } from '../../redux/action/action';

const Alarms = () => {
   const GuideModalState = useSelector(state => state.gnbGuideReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch(setGuideModalState(false));
      };
   }, [GuideModalState]);

   return (
      <Container>
         {GuideModalState && <GuideModal />}
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
