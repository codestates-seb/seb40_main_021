import { useState } from 'react';
import { Order, OrderListBox } from './OderAlarmStyle';
import { MdExpandMore } from 'react-icons/md';
const OrderAlram = ({ menu, idx }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [menuViewDetails, setMenuViewDetails] = useState(false);
   const handleClickOrderCheck = () => {
      alert('확인');
      const orderId = menu.orderId;
      fetch(`${API_BASE_URL}/order/${orderId}`, {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ checkBox: false })
      }).catch(err => console.log(err));
   };
   return (
      <Order
         menuViewDetails={menuViewDetails}
         idx={idx}
         onClick={() => {
            setMenuViewDetails(!menuViewDetails);
         }}>
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
            <div className="reqText">
               <b>{`요청사항 : ${menu.message}`}</b>
               <button onClick={handleClickOrderCheck}>확인</button>
            </div>
         </OrderListBox>
      </Order>
   );
};

export default OrderAlram;
