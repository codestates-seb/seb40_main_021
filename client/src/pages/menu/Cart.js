import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/menu/CartItem';
import { emptyCart, orderMenu } from '../../redux/actions/menuAction';

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const cart = useSelector((store) => store.menuReducer.cart);
  let temp = 0;
  const dispatch = useDispatch();
  useEffect(() => {
    // 서버에 요청 -> 카트에 담긴 목록 불러오기
    cart.map((menu) => (temp += menu.price * menu.quantity));
    setTotal(temp);
  });

  const orderHandler = () => {
    // 서버에 요청 -> cart 데이터 보내기
    if (cart.length === 0) {
      return alert('주문할 메뉴를 선택해주세요!');
    }
    dispatch(orderMenu(cart));
    dispatch(emptyCart());
    return alert('주문이 완료되었습니다.');
  };

  return (
    <div className="menu-container">
      <h1>총 주문 메뉴: {cart.length}개</h1>
      <ul>
        {cart.map((menu) => (
          <CartItem key={menu.id} data={menu} />
        ))}
      </ul>
      <p className="total-price">총 주문 금액 : {total}원</p>
      <button className="order-btn" onClick={orderHandler}>
        주문하기
      </button>
    </div>
  );
};
