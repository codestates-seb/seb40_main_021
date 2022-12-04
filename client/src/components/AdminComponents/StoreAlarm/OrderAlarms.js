import OrderAlram from './OrderAlram';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const OrderAlarms = () => {
   const orderAlarmList = useSelector(state => state.adminReducer.alarmData.orderAlarmReverse);
   sessionStorage.setItem('order', orderAlarmList.length);
   return (
      <MainContents>
         <div className="subTitle">주문 알람</div>
         <div className="orderAlrams">
            <>
               {orderAlarmList.length === 0 ? (
                  <div className="orderEmpty">주문 알람이 없습니다.</div>
               ) : (
                  orderAlarmList.map((menu, idx) => {
                     return <OrderAlram key={menu.orderId} menu={menu} idx={idx}></OrderAlram>;
                  })
               )}
            </>
         </div>
      </MainContents>
   );
};

export default OrderAlarms;

const MainContents = styled.main`
   width: 100%;
   .orderEmpty {
      text-align: center;
      color: rgb(255, 107, 0);
      font-size: 20px;
      font-weight: 900;
      margin: 50px 0 30px 20px;
   }
   .orderAlrams {
      width: 100%;
      height: 60vh;
      padding: 10px;
      border-radius: 5px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
         width: 10px;
         background: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
         background: rgba(0, 0, 0, 0.3);
         border-radius: 30px;
      }
   }
   .subTitle {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 20px;
   }
   .reqText {
      display: flex;
      justify-content: space-between;
      button {
         margin-right: 80px;
      }
   }
`;
