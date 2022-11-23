import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderedItem } from '../../components/menu/OrderedItem';
import { orderedList } from '../../redux/actions/menuAction';

export const OrderedList = () => {
   const dispatch = useDispatch();
   const [total, setTotal] = useState(0);
   const ordered = useSelector(store => store.menuReducer.ordered);
   let temp = 0;

   useEffect(() => {
      // 주문목록 불러오기
      axios
         .get(`/order/1/12`)
         .then(res => {
            const data = res.data.data;
            dispatch(orderedList(data));
            ordered.map(menu => (temp += menu.price * menu.quantity));
            setTotal(temp);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <div className="menu-container">
         <h1>총 주문 메뉴: {ordered.length}개</h1>
         <ul>
            {ordered.map(menu => (
               <OrderedItem key={menu.menuId} data={menu} />
            ))}
         </ul>
         <p className="total-price">총 주문 금액 : {total}원</p>
      </div>
   );
};
