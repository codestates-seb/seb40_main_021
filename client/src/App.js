import { useState } from 'react';
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './components/menu/AnimatedRoutes';
import { BottomNav } from './components/menu/BottomNav';
import { Header } from './components/menu/Header';
import { Modal } from './components/menu/Modal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <BottomNav setIsModalOpen={setIsModalOpen} />
      </BrowserRouter>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default App;
