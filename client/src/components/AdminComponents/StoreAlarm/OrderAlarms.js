import { useEffect, useState } from 'react';
import OrderAlram from './OrderAlram';
import styled from 'styled-components';
import axios from 'axios';
import useInterval from '../../../util/useInterval';
import { useSelector } from 'react-redux';

const OrderAlarms = () => {
   const url = useSelector(state => state.adminReducer.apiUrl);
   const [allOrderList, setAllorderList] = useState([]);
   useEffect(() => {
      axios.get(`${url}/table/${sessionStorage.getItem('userId')}/order`).then(res => {
         const reverse = res.data.data
            .slice(0)
            .reverse()
            .map(num => num);

         setAllorderList(reverse);
      });
   }, []);

   useInterval(() => {
      axios.get(`${url}/table/${sessionStorage.getItem('userId')}/order`).then(res => {
         const reverse = res.data.data
            .slice(0)
            .reverse()
            .map(num => num);

         setAllorderList(reverse);
      });
   }, 3000);
   return (
      <MainContents>
         <div className="subTitle">주문 알람</div>
         <div className="orderAlrams">
            <>
               {allOrderList.length === 0 ? (
                  <div className="orderEmpty">주문 알람이 없습니다.</div>
               ) : (
                  allOrderList.map((menu, idx) => {
                     console.log(menu);
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
      ::-webkit-scrollbar {
         width: 8px;
      }
      ::-webkit-scrollbar-thumb {
         background: #a9a9a9;
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
