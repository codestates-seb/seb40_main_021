import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { RiDeleteBinLine } from 'react-icons/ri';
const TableStatus = ({ data }) => {
   const priceList = data.orderList.map(menus => {
      return menus.price * menus.quantity;
   });
   const url = useSelector(state => state.adminReducer.apiUrl);
   const totalPrice = priceList.reduce((prev, current) => prev + current);
   const hadleClickDeleteOrder = () => {
      if (confirm('정말 삭제하시겠습니까?')) {
         fetch(`${url}/order/${sessionStorage.getItem('userId')}/${data.tableNumber}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
         });
      }
   };

   return (
      <TableStatusBox>
         <div className="orderHead">
            <div>No. {data.tableNumber}</div>
            <div>
               주문 <b>{data.orderList.length}</b>개
            </div>
            <button className="orderDelete" onClick={hadleClickDeleteOrder}>
               {/* <RiDeleteBinLine size="15"></RiDeleteBinLine> */}X
            </button>
         </div>
         <div className="orderList">
            {data.orderList.map(menus => {
               return (
                  <div className="order" key={menus.menuId}>
                     <div>{menus.menuName}</div>
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
   width: 90%;
   height: 300px;
   box-shadow: 0 4px 2px 0px lightgray;
   font-size: 1.3rem;
   padding: 20px;
   background-color: #fffff3;
   border-radius: 3px 3px 15px 3px;
   margin-bottom: 25px;
   .orderDelete {
      color: gray;
      font-weight: bold;
      position: relative;
      top: -35px;
   }
   .orderHead {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #c2a9a9;
      font-weight: 900;
      > :nth-child(1) {
         font-size: 30px;
         color: #ff5252;
         font-weight: bold;
         width: 50%;
         margin-left: 10px;
      }
      > :nth-child(2) {
         width: 50%;
         b {
            font-size: 24px;
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
         padding: 8px 0;
         font-size: 16px;
         font-weight: 900;
         justify-content: space-between;
      }
   }
   .totalPrice {
      border-top: 1px solid #c2a9a9;
      width: 100%;
      height: 10%;
      > div {
         display: flex;
         height: 100%;
         align-items: flex-end;
         justify-content: end;
         font-size: 16px;
         font-weight: bold;
         margin: 5px 10px 0 0;
      }
   }

   @media screen and (max-width: 900px) {
      margin-bottom: 30px;
   }
`;

export default TableStatus;
