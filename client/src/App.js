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
function App() {
   return (
      <div className="App">
         <Reset />
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/user" element={<GnbLayout />}>
                  <Route path="/user" element={<AlarmPage />} />
                  <Route path="/user/table" element={<Table />} />
                  <Route path="/user/store" element={<Store />} />
                  <Route path="/user/create" element={<CreateTable />} />
                  <Route path="/user/qr" element={<QrTable />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
