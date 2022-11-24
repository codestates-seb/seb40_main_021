// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/usermenu/CartItem';
import { emptyCart } from '../../redux/actions/menuAction';

export const Cart = () => {
   const [total, setTotal] = useState(0);
   const cart = useSelector(store => store.menuReducer.cart);
   let temp = 0;
   const dispatch = useDispatch();

   useEffect(() => {
      cart.map(menu => (temp += menu.price * menu.quantity));
      setTotal(temp);
   }, [cart]);

   // 주문하기
   const orderHandler = async () => {
      if (cart.length === 0) {
         return alert('주문할 메뉴를 선택해주세요!');
      }

      const fetchData = cart.map(el => {
         return { menuId: el.menuId, quantity: el.quantity };
      });

      const data = {
         tableNumber: '12',
         orderMenus: fetchData,
         message: '옵션메시지'
      };

      fetch('/order/1', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
      })
         .then(res => {
            if (res.status === 201) {
               dispatch(emptyCart());
               return alert('주문이 완료되었습니다.');
            }
         })
         .catch(err => console.log(err));
   };

   return (
      <div className="menu-container">
         <h1>총 주문 메뉴: {cart.length}개</h1>
         <ul>
            {cart.map(menu => (
               <CartItem key={menu.menuId} data={menu} />
            ))}
         </ul>
         <p className="total-price">총 주문 금액 : {total}원</p>
         <button className="order-btn" onClick={orderHandler}>
            주문하기
         </button>
      </div>
   );
};
