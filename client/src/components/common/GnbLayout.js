import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
   const isLogin = useSelector(store => store.isLoginReducer.isLogin);
   const navigate = useNavigate();
   const { pathname } = useLocation();
   console.log(isLogin, navigate, pathname);
   useEffect(() => {
      if (!isLogin) {
         alert('로그인을 해주세요.');
         navigate('/login', { state: pathname });
      }
   }, []);
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
