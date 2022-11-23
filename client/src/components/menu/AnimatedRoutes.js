import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../../pages/menu/Home';
import { Order } from '../../pages/menu/Order';
import { Store } from '../../pages/menu/Store';

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order/*" element={<Order />} />
      </Routes>
    </AnimatePresence>
  );
};
