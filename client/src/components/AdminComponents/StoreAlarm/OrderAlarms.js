import React, { useEffect, useState } from 'react';
import OrderAlram from './OrderAlram';
import styled from 'styled-components';
import axios from 'axios';

const OrderAlarms = () => {
   const [allOrderList, setAllorderList] = useState([]);
   useEffect(() => {
      axios.get('https://c424-221-140-177-247.jp.ngrok.io/table/1').then(res => {
         setAllorderList(res.data.data);
      });
   }, []);
   console.log(allOrderList);
   return (
      <MainContents>
         <div className="subTitle">
            <label>주문 알람</label>
         </div>
         <div className="orderAlrams">
            <>
               {allOrderList.map((menu, idx) => {
                  return <OrderAlram key={menu.tableid} menu={menu} idx={idx}></OrderAlram>;
               })}
            </>
         </div>
      </MainContents>
   );
};

export default OrderAlarms;

const MainContents = styled.main`
   width: 90%;

   .orderAlrams {
      width: 100%;
      height: 60vh;
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
      font-size: 24px;
      margin: 0 0 30px 20px;
   }
`;
