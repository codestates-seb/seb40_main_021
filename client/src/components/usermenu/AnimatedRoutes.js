import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../../pages/menu/Home';
import { Order } from '../../pages/menu/Order';
import { Store } from '../../pages/menu/Store';

import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { Modal } from './Modal';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { noHeader } from '../../redux/actions/menuAction';

export const AnimatedRoutes = () => {
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
      <>
         <Routes location={location} key={location.pathname}>
            <Route path=":userId/:tableNumber" element={<Home />} />
            <Route path=":userId/:tableNumber/store" element={<Store />} />
            <Route path=":userId/:tableNumber/order/*" element={<Order />} />
         </Routes>

         <Header />
         <BottomNav setIsModalOpen={setIsModalOpen} />
         {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </>
   );
};
