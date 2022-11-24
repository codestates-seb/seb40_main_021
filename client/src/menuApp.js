import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Menu/Header';
import { BottomNav } from './components/Menu/BottomNav';
import { Modal } from './components/Menu/Modal';
import { useDispatch } from 'react-redux';
import { noHeader } from './redux/actions/menuAction';
import { Home } from './pages/menu/Home';
import { Store } from './pages/menu/Store';
import { Order } from './pages/menu/Order';

import { AnimatePresence } from 'framer-motion';
const MenuApp = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const location = useLocation();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(noHeader(true));

      return () => {
         dispatch(noHeader(false));
      };
   }, []);

   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/order/*" element={<Order />} />
         </Routes>

         <Header />
         <BottomNav setIsModalOpen={setIsModalOpen} />
         {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </AnimatePresence>
   );
};

export default MenuApp;
