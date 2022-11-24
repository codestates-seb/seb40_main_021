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
import { useSelector } from 'react-redux';
import MenuApp from './menuApp';

function App() {
   const printModalState = useSelector(state => state.adminReducer.printModal);
   const noHeader = useSelector(store => store.stateReducer.header);

   return (
      <div className="App">
         <Reset />
         <BrowserRouter>
            {printModalState || noHeader ? null : <Header />}
            <Routes>
               <Route path="/user" element={<GnbLayout />}>
                  <Route path="/user" element={<AlarmPage />} />
                  <Route path="/user/table" element={<Table />} />
                  <Route path="/user/store" element={<Store />} />
                  <Route path="/user/create" element={<CreateTable />} />
                  <Route path="/user/qr" element={<QrTable />} />
                  <Route path="/user/menusetting" element={<SetMenu />} />
                  <Route path="/user/menu" element={<Menu />} />
               </Route>
               <Route exact path="/" element={<SignupTos />} />
               <Route path="/MemberInfo" element={<MemberInfo />} />
               <Route path="/StoreInfo" element={<StoreInfo />} />
               <Route path="/Complete" element={<Complete />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/usermenu/*" element={<MenuApp />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
