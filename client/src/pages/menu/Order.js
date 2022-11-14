import { Route, Routes } from 'react-router-dom';
import { BottomNav } from '../../components/menu/BottomNav';
import { Header } from '../../components/menu/Header';
import { OrderNav } from '../../components/menu/OrderNav';
import { Wrapper } from '../../style/menu.style';
import { Cart } from './Cart';
import { OrderedList } from './OrderedList';

export const Order = () => {
  return (
    <Wrapper>
      <main className="no-padding">
        <Header />
        <OrderNav />
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="list" element={<OrderedList />} />
        </Routes>
        <BottomNav />
      </main>
    </Wrapper>
  );
};
