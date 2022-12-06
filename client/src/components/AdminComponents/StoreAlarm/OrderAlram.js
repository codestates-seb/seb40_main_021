import { useEffect, useState } from 'react';
import { Order, OrderListBox } from './OderAlarmStyle';
import { MdExpandMore } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
const OrderAlram = ({ menu, idx }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [menuViewDetails, setMenuViewDetails] = useState(false);
   const orderAlarmList = useSelector(state => state.adminReducer.alarmData.orderAlarmReverse);
   const handleClickOrderCheck = e => {
      e.stopPropagation();
      if (confirm('정말 삭제 하시겠습니까?')) {
         const orderId = menu.orderId;
         fetch(`${API_BASE_URL}/order/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('Authorization') },
            body: JSON.stringify({ checkBox: false })
         })
            .then(() => {
               sessionStorage.setItem('order', orderAlarmList.length);
            })
            .catch(err => err);
      }
   };
   //주문시간 시 분으로 분할
   const findHourIndex = menu.createdAt.indexOf('시');
   const findMinuteIndex = menu.createdAt.indexOf('분');
   const orderHour = menu.createdAt.slice(0, findHourIndex);
   const orderMinute = menu.createdAt.slice(findHourIndex + 2, findMinuteIndex);
   //현재시간
   const today = new Date();
   //현재시간 초로 변환
   const currentTimeToSeconds = today.getHours() * 3600 + today.getMinutes() * 60;
   //주문시간 초로 변환
   const orderTimeToseconds = orderHour * 3600 + orderMinute * 60;
   //시간 계산
   const timeCalculation = currentTimeToSeconds - orderTimeToseconds;
   const resultHour = parseInt(timeCalculation / 3600) - 9;
   const resultMin = parseInt(timeCalculation % 3600) / 60;
   useEffect(() => {
      if (String(resultHour).includes('-')) {
         const orderId = menu.orderId;
         fetch(`${API_BASE_URL}/order/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('Authorization') },
            body: JSON.stringify({ checkBox: false })
         })
            .then(() => {
               sessionStorage.setItem('order', orderAlarmList.length);
            })
            .catch(err => err);
      }
   }, []);
   return (
      <Order
         menuViewDetails={menuViewDetails}
         idx={idx}
         onClick={() => {
            setMenuViewDetails(!menuViewDetails);
         }}>
         <div id="oderInfo">
            <b>No. {menu.tableNumber}</b>
            <div className="orderMenu">
               주문 메뉴 : <b>{menu.orderMenuList.length}</b>개
            </div>
            <div className="orderTime">
               {resultHour === 0 ? `${resultMin}분 전` : `${resultHour}시간 ${resultMin}분 전`}
            </div>

            <button
               className="deleteBtn"
               onClick={e => {
                  handleClickOrderCheck(e);
               }}>
               <RiDeleteBinLine size="15"></RiDeleteBinLine>
               삭제
            </button>

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
                     <div> {order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                  </div>
               );
            })}
         </OrderListBox>
      </Order>
   );
};

export default OrderAlram;
