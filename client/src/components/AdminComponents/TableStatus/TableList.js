import { useEffect, useState } from 'react';
import TableStatus from './TableStatus';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
const TableList = () => {
   const url = useSelector(state => state.adminReducer.apiUrl);
   const [orderData, setOrderData] = useState([]);
   useEffect(() => {
      axios.get(`${url}/table/${sessionStorage.getItem('userId')}`).then(res => {
         setOrderData(res.data.data);
      });
   }, []);
   return (
      <Content>
         <div className="title">
            <h1>테이블 목록</h1>
         </div>
         <div className="table">
            {orderData.length === 0 ? (
               <div className="orderEmpty">주문 내역이 없습니다.</div>
            ) : (
               orderData.map(order => {
                  return <TableStatus key={order.tableNumber} data={order}></TableStatus>;
               })
            )}
         </div>
      </Content>
   );
};

const Content = styled.div`
   height: calc(100vh - 70px);
   width: 100%;
   padding-left: 300px;
   overflow: scroll;
   .orderEmpty {
      text-align: center;
      color: rgb(255, 107, 0);
      font-size: 30px;
      margin: 50px 0 30px 20px;
   }
   .title {
      margin-left: 0;
      padding-top: 50px;
      font-weight: bold;
      font-size: 24px;
      margin-left: 80px;
   }
   .table {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 500px;
      align-items: center;
      justify-items: center;

      @media screen and (max-width: 1400px) {
         grid-template-columns: 1fr 1fr;
      }
      @media screen and (max-width: 1000px) {
         grid-template-columns: 1fr;
         grid-template-rows: 1fr;

         flex-grow: 1;
      }
      @media screen and (max-width: 700px) {
         grid-template-columns: 1fr;
         flex-grow: 1;
      }
   }
   @media screen and (max-width: 700px) {
      width: 100%;
      padding-left: 0;
      > :first-child {
         margin-left: 0px;
         text-align: center;
      }
   }
`;
export default TableList;
