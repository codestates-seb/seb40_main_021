import { useState } from 'react';
import { Order, OrderListBox } from './OderAlarmStyle';
import { MdExpandMore } from 'react-icons/md';
import { useSelector } from 'react-redux';
const OrderAlram = ({ menu, idx }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [menuViewDetails, setMenuViewDetails] = useState(false);
   const orderAlarmList = useSelector(state => state.adminReducer.alarmData.orderAlarmReverse);
   const handleClickOrderCheck = () => {
      if (confirm('정말 삭제 하시겠습니까?')) {
         const orderId = menu.orderId;
         fetch(`${API_BASE_URL}/order/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ checkBox: false })
         })
            .then(() => {
               sessionStorage.setItem('order', orderAlarmList.length);
            })
            .catch(err => err);
      }
   };
   return (
      <Order
         menuViewDetails={menuViewDetails}
         idx={idx}
         onClick={() => {
            setMenuViewDetails(!menuViewDetails);
         }}>
         <button className="deleteBtn" onClick={handleClickOrderCheck}>
            X
         </button>
         <div id="oderInfo">
            <b>No. {menu.tableNumber}</b>
            <div>
               주문 메뉴 : <b>{menu.orderMenuList.length}</b>개
            </div>
            <div id="orderTime">{menu.createdAt}</div>

            <div className="detailedMenu">
               <MdExpandMore className="detailedMenuIcon" />
            </div>
         </div>
         <OrderListBox menuViewDetails={menuViewDetails}>
            {menu.orderMenuList.map(order => {
               return (
                  <div className="orderList" key={order.menuId}>
                     <div> {order.menuName}</div>
                     <div> {order.quantity}개</div>
                     <div> {order.price}원</div>
                  </div>
               );
            })}
         </OrderListBox>
      </Order>
   );
};

export default OrderAlram;
