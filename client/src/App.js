/* eslint-disable import/namespace */
import { Reset } from 'styled-reset';
import './assets/font.css';
import Header from './components/common/Header';
import GnbLayout from './components/common/GnbLayout';
import AlarmPage from './pages/user/AlarmsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/user/TablePage';
import Store from './pages/user/StorePage';
import CreateTable from './pages/user/CreateTablePage';
import QrTable from './pages/user/QrTablePage';
import SetMenu from './pages/menuAdmin/SetMenu';
import Menu from './pages/menuAdmin/Menu';
import SignupTos from './pages/Signup/SignupTos';
import MemberInfo from './pages/Signup/MemberInfo';
import StoreInfo from './pages/Signup/StoreInfo';
import Complete from './pages/Signup/Complete';
import Login from './pages/Signup/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedRoutes } from './components/usermenu/AnimatedRoutes';
import { Home } from './pages';
import { useEffect } from 'react';
import { setLoginStatus } from './redux/action/action';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   const printModalState = useSelector(state => state.adminReducer.printModal);
   const noHeader = useSelector(store => store.stateReducer.header);
   const token = sessionStorage.getItem('access token');
   const dispatch = useDispatch();

   useEffect(() => {
      AOS.init({ duration: 600 });
      // 토큰이 있을시 로그인 유지
      if (token) {
         dispatch(setLoginStatus(true));
      }
   }, []);

   return (
      <div className="App">
         <Reset />
         <BrowserRouter>
            {printModalState || noHeader ? null : <Header />}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/user" element={<GnbLayout />}>
                  <Route path="/user" element={<AlarmPage />} />
                  <Route path="/user/table" element={<Table />} />
                  <Route path="/user/store" element={<Store />} />
                  <Route path="/user/create" element={<CreateTable />} />
                  <Route path="/user/qr" element={<QrTable />} />
                  <Route path="/user/menusetting" element={<SetMenu />} />
                  <Route path="/user/menu" element={<Menu />} />
               </Route>
               <Route path="/signup" element={<SignupTos />} />
               <Route path="/signup/1" element={<MemberInfo />} />
               <Route path="/signup/2" element={<StoreInfo />} />
               <Route path="/signup/complete" element={<Complete />} />
               <Route path="/login" element={<Login />} />

               <Route path="/usermenu/*" element={<AnimatedRoutes />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
