import { Route, Routes } from 'react-router-dom';
import { OrderNav } from '../../components/menu/OrderNav';
import { Wrapper } from '../../style/menu.style';
import { Cart } from './Cart';
import { OrderedList } from './OrderedList';

export const Order = () => {
  return (
    <Wrapper>
      <main className="no-padding">
        <OrderNav />
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="list" element={<OrderedList />} />
        </Routes>
      </main>
    </Wrapper>
  );
};
