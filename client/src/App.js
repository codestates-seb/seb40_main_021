import { Reset } from 'styled-reset';
import './assets/font.css';
import Header from './components/common/Header';
import GnbLayout from './components/common/GnbLayout';
import AlarmPage from './pages/user/Alarm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/user/Table';
import Store from './pages/user/Store';
import QrTable from './pages/user/QrTable';
import SetMenu from "./pages/menu/SetMenu";
import Menu from "./pages/menu/Menu";

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
            <Route path="/user/qr" element={<QrTable />} />
            <Route path="/user/menusetting" element={<SetMenu />} />
            <Route path="/user/menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
