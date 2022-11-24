import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   @media screen and (max-width: 700px) {
      width: 100%;
      padding-top: 50px;
   }
   display: flex;
   padding-top: 70px;
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
