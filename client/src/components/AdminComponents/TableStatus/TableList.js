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
         console.log(res);
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
   min-height: calc(100vh - 50px);
   width: calc(100% - 250px);
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
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 30px;
   }
   .table {
      display: grid;
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
         grid-template-columns: 1fr;
         grid-template-rows: 1fr;
         flex-grow: 1;
      }
      @media screen and (max-width: 700px) {
         grid-template-columns: repeat(2, 1fr);
         flex-grow: 1;
      }
      @media screen and (max-width: 500px) {
         grid-template-columns: 1fr;
      }
   }
   @media screen and (max-width: 700px) {
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
