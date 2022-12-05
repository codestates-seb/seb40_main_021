import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CartItem } from '../../components/usermenu/CartItem';
import { emptyCart } from '../../redux/actions/menuAction';

export const Cart = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const cart = useSelector(store => store.menuReducer.cart);
   const priceArr = cart.map(menu => menu.price * menu.quantity);
   const totalPrice = priceArr.reduce((prev, cur) => prev + cur, 0);
   const dispatch = useDispatch();
   const userId = useParams().userId;
   const tableNumber = useParams().tableNumber;

   // 주문하기
   const orderHandler = async () => {
      if (cart.length === 0) {
         return alert('주문할 메뉴를 선택해주세요!');
      }

      const fetchData = cart.map(el => {
         return { menuId: el.menuId, quantity: el.quantity };
      });

      const data = {
         tableNumber,
         orderMenus: fetchData,
         message: '옵션메시지'
      };

      fetch(`${API_BASE_URL}/order/${userId}`, {
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
         .catch(err => err);
   };

   return (
      <div className="menu-container">
         <h1>총 주문 메뉴: {cart.length}개</h1>
         <ul>
            {cart.map(menu => (
               <CartItem key={menu.menuId} data={menu} />
            ))}
         </ul>
         <div className="fixed">
            <p className="total-price">
               총 주문 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </p>
            <button className="order-btn" onClick={orderHandler}>
               주문하기
            </button>
         </div>
      </div>
   );
};
