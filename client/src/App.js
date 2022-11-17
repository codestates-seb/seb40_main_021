import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BottomNav } from './components/menu/BottomNav';
import { Header } from './components/menu/Header';
import { Modal } from './components/menu/Modal';
import { Home } from './pages/menu/Home';
import { Order } from './pages/menu/Order';
import { Store } from './pages/menu/Store';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/order/*" element={<Order />} />
        </Routes>

        <BottomNav setIsModalOpen={setIsModalOpen} />
      </BrowserRouter>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default App;
