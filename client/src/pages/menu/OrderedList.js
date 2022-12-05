import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { OrderedItem } from '../../components/usermenu/OrderedItem';
import { orderedList } from '../../redux/actions/menuAction';

export const OrderedList = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   // const [total, setTotal] = useState(0);
   const ordered = useSelector(store => store.menuReducer.ordered);
   const priceArr = ordered.map(menu => menu.price * menu.quantity);
   const totalPrice = priceArr.reduce((prev, cur) => prev + cur, 0);
   const userId = useParams().userId;
   const tableNumber = useParams().tableNumber;
   useEffect(() => {
      // 주문목록 불러오기
      axios
         .get(`${API_BASE_URL}/order/${userId}/${tableNumber}`)
         .then(res => {
            const data = res.data.data;
            dispatch(orderedList(data));
         })
         .catch(err => err);
   }, []);

   return (
      <div className="menu-container">
         <h1>총 주문 메뉴: {ordered.length}개</h1>
         <ul>
            {ordered.map(menu => (
               <OrderedItem key={menu.menuId} data={menu} />
            ))}
         </ul>
         <p className="total-price fixed">
            총 주문 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
         </p>
      </div>
   );
};
