import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderedItem } from '../../components/menu/OrderedItem';

export const OrderedList = () => {
  const [total, setTotal] = useState(0);
  const orderedList = useSelector((store) => store.menuReducer.ordered);
  let temp = 0;

  useEffect(() => {
    // 서버에 요청 -> 주문목록 불러오기
    orderedList.map((menu) => (temp += menu.price * menu.quantity));
    setTotal(temp);
  });

  return (
    <div className="menu-container">
      <h1>총 주문 메뉴: {orderedList.length}개</h1>
      <ul>
        {orderedList.map((menu) => (
          <OrderedItem key={menu.id} data={menu} />
        ))}
      </ul>
      <p className="total-price">총 주문 금액 : {total}원</p>
    </div>
  );
};
