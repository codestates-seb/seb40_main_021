import { useEffect, useState } from 'react';
import TableStatus from './TableStatus';
import styled from 'styled-components';
import axios from 'axios';
import useInterval from '../../../util/useInterval';

const TableList = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [orderData, setOrderData] = useState([]);
   const [orderDataUpdate, setOrderDataUpdate] = useState(false);
   useEffect(() => {
      axios
         .get(`${API_BASE_URL}/table/${sessionStorage.getItem('userId')}`, {
            headers: { Authorization: sessionStorage.getItem('Authorization') }
         })
         .then(res => {
            setOrderData(res.data.data);
         });
   }, [orderDataUpdate]);
   useInterval(() => {
      axios
         .get(`${API_BASE_URL}/table/${sessionStorage.getItem('userId')}`, {
            headers: { Authorization: sessionStorage.getItem('Authorization') }
         })
         .then(res => {
            setOrderData(res.data.data);
         });
   }, 3000);
   return (
      <Content>
         <h1 className="title">테이블 현황</h1>

         <div className="table">
            {orderData.length === 0 ? (
               <div className="orderEmpty">주문 내역이 없습니다.</div>
            ) : (
               orderData.map(order => {
                  return (
                     <TableStatus
                        key={order.tableNumber}
                        data={order}
                        orderDataUpdate={orderDataUpdate}
                        setOrderDataUpdate={setOrderDataUpdate}></TableStatus>
                  );
               })
            )}
         </div>
      </Content>
   );
};

const Content = styled.div`
   width: calc(100% - 250px);
   height: 100%;
   margin-left: 250px;
   padding: 30px 50px;
   /* overflow: scroll; */
   .orderEmpty {
      width: 100%;
      text-align: center;
      color: rgb(255, 107, 0);
      font-size: 20px;
      font-weight: 900;
      margin: 50px 0 30px 20px;
   }
   .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 80px;
   }
   .table {
      display: grid;

      height: 100%;
      width: 100%;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      justify-items: center;

      @media screen and (max-width: 1700px) {
         grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (max-width: 1400px) {
         grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 1100px) {
         grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 900px) {
         margin: 0;
         grid-template-columns: 1fr;
         grid-template-rows: 1fr;
         flex-grow: 1;
      }
      @media screen and (max-width: 500px) {
         grid-template-columns: 1fr;
      }
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      margin-left: 0;
      padding: 30px;
      > :first-child {
         margin-left: 0px;
         text-align: center;
      }
   }
`;
export default TableList;
