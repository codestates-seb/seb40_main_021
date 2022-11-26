import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';

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
   return (
      <Container>
         <Gnb />
         <Outlet />
      </Container>
   );
};

export default GnbLayout;
