import React from 'react';
import styled from 'styled-components';

const TableStatus = ({ data }) => {
   const priceList = data.orders.map(menus => {
      return menus.price * menus.quantity;
   });
   const totalPrice = priceList.reduce((prev, current) => prev + current);
   return (
      <TableStatusBox>
         <div className="orderHead">
            <div>{`${data.tableNum}번`}</div>
            <div>
               주문 <b>{data.orders.length}</b>개
            </div>
         </div>
         <div className="orderList">
            {data.orders.map(menus => {
               return (
                  <div className="order" key={menus.id}>
                     <div>{menus.menu}</div>
                     <div>{`${menus.quantity}개`}</div>
                     <div>{`${menus.price * menus.quantity}원`}</div>
                  </div>
               );
            })}
         </div>
         <div className="totalPrice">
            <div>{`total : ${totalPrice}원`}</div>
         </div>
      </TableStatusBox>
   );
};

const TableStatusBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   width: 300px;
   height: 300px;
   box-shadow: 0 4px 2px 0px lightgray;
   font-size: 1.3rem;
   padding: 0 20px 0 20px;
   background-color: white;
   border-radius: 3px;
   .orderHead {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid gray;
      > :nth-child(1) {
         font-size: 2rem;
         font-weight: bold;
         width: 70%;
         margin-left: 10px;
      }
      > :nth-child(2) {
         b {
            font-size: 1.8rem;
         }
      }
   }
   .orderList {
      display: flex;
      width: 100%;
      height: 60%;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: scroll;
      ::-webkit-scrollbar {
         width: 8px;
      }
      ::-webkit-scrollbar-thumb {
         background: #a9a9a9;
      }
      .order {
         display: flex;
         width: 100%;
         margin: 10px 0 10px 0;
         > :nth-child(1) {
            width: 35%;
            font-weight: bold;
         }
         > :nth-child(2) {
            width: 30%;
         }
         > :nth-child(3) {
            font-weight: bold;
         }
      }
   }
   .totalPrice {
      border-top: 1px solid gray;
      position: static;
      top: 10;
      width: 100%;
      height: 10%;
      > div {
         display: flex;
         height: 100%;
         align-items: flex-end;
         justify-content: end;
         font-weight: bold;
         margin-right: 10px;
      }
   }
   @media screen and (max-width: 700px) {
      margin-bottom: 50px;
   }
`;

export default TableStatus;
