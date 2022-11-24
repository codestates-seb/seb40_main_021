import { Route, Routes } from 'react-router-dom';
import { OrderNav } from '../../components/menu/OrderNav';
import { Wrapper } from '../../style/menu.style';
import { Cart } from './Cart';
import { OrderedList } from './OrderedList';
import { motion } from 'framer-motion';

export const Order = () => {
   return (
      <Wrapper>
         <motion.main
            className="no-padding"
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1,
               transition: { duration: 0.3 }
            }}>
            <OrderNav />
            <Routes>
               <Route path="/" element={<Cart />} />
               <Route path="list" element={<OrderedList />} />
            </Routes>
         </motion.main>
      </Wrapper>
   );
};
