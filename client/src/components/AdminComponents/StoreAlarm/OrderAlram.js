import { useState } from 'react';
import { Order, OrderListBox } from './OderAlarmStyle';
import { MdExpandMore } from 'react-icons/md';
const OrderAlram = ({ menu, idx }) => {
   const [menuViewDetails, setMenuViewDetails] = useState(false);

   return (
      <Order
         menuViewDetails={menuViewDetails}
         idx={idx}
         onClick={() => {
            setMenuViewDetails(!menuViewDetails);
         }}>
         <div id="oderInfo">
            <b>{`${menu.tableNumber} 번`}</b>
            <div>
               총 <b>{menu.orderMenuList.length}</b>개
            </div>
            <div id="orderTime">
               <div>{`${menu.createdAt}`}</div>
            </div>
            <div className="detailedMenu">
               <MdExpandMore className="detailedMenuIcon"></MdExpandMore>
            </div>
         </div>
         <OrderListBox menuViewDetails={menuViewDetails}>
            {menu.orderMenuList.map(order => {
               return (
                  <div className="orderList" key={order.menuId}>
                     <div> {order.menuName}</div>
                     <div> {`${order.quantity}개`}</div>
                     <div> {`${order.price}원`}</div>
                  </div>
               );
            })}
            <div className="reqText">
               <b>{`요청사항 : ${menu.message}`}</b>
            </div>
         </OrderListBox>
      </Order>
   );
};

export default OrderAlram;
