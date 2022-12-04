import { useState } from 'react';
import { Order, OrderListBox } from './OderAlarmStyle';
import { MdExpandMore } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
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
            .catch(err => console.log(err));
      }
   };

   const today = new Date();
   const hours = today.getHours();
   const minutes = today.getMinutes();
   const findHourIndex = menu.createdAt.indexOf('시');
   const findMinuteIndex = menu.createdAt.indexOf('분');
   const findHour = menu.createdAt.slice(0, findHourIndex);
   const findMinute = menu.createdAt.slice(findHourIndex + 2, findMinuteIndex);
   const hourCalculation = hours - findHour;
   const minuteCalculation = minutes - findMinute;

   return (
      <Order
         menuViewDetails={menuViewDetails}
         idx={idx}
         onClick={() => {
            setMenuViewDetails(!menuViewDetails);
         }}>
         <div className="deleteBtn">
            <button onClick={handleClickOrderCheck}>
               <RiDeleteBinLine size="15"></RiDeleteBinLine>
            </button>
         </div>
         <div id="oderInfo">
            <b>No. {menu.tableNumber}</b>
            <div>
               주문 메뉴 : <b>{menu.orderMenuList.length}</b>개
            </div>
            <div id="orderTime">
               {hourCalculation === 0
                  ? `${minuteCalculation}분 전`
                  : `${hourCalculation}시간 ${minuteCalculation}분 전`}
            </div>

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
