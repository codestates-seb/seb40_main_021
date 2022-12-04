import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';
import HeaderUser from './HeaderUser';

const Container = styled.div`
   width: 100%;
   min-height: calc(100vh - 50px);
   @media screen and (max-width: 700px) {
      width: 100%;
      margin-top: 50px;
   }
   display: flex;
   margin-top: 50px;
`;

const GnbLayout = () => {
   const printModalState = useSelector(state => state.adminReducer.printModal);
   const noHeader = useSelector(store => store.stateReducer.header);
   return (
      <Container>
         {printModalState || noHeader ? null : <HeaderUser />}

         <Gnb />
         <Outlet />
      </Container>
   );
};

export default GnbLayout;
