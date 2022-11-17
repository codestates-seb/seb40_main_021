import { Reset } from 'styled-reset';
import './assets/font.css';
import Header from './components/common/Header';
import GnbLayout from './components/common/GnbLayout';
import AlarmPage from './pages/user/Alarm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetMenu from './pages/menu/SetMenu';
import SignupTos from './pages/Signup/SignupTos';
import MemberInfo from './pages/Signup/MemberInfo';
import StoreInfo from './pages/Signup/StoreInfo';
import Complete from './pages/Signup/Complete';
import Login from './pages/Signup/Login';



function App() {
   return (
      <div className="App">
         <Reset />
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/user" element={<GnbLayout />}>
                  <Route path="/user" element={<AlarmPage />} />
                  <Route path="/user/menusetting" element={<SetMenu />} />
               </Route>
               <Route exact path="/" element={<SignupTos />} />
               <Route path="/MemberInfo" element={<MemberInfo />} />
               <Route path="/StoreInfo" element={<StoreInfo />} />
               <Route path="/Complete" element={<Complete />} />
               <Route path="/Login" element={<Login />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
