import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
const TableStatus = ({ data, orderDataUpdate, setOrderDataUpdate }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const priceList = data.orderList.map(menus => {
      return menus.price * menus.quantity;
   });
   const totalPrice = priceList.reduce((prev, current) => prev + current);
   const hadleClickDeleteOrder = () => {
      if (confirm('정말 삭제하시겠습니까?')) {
         fetch(`${API_BASE_URL}/order/${sessionStorage.getItem('userId')}/${data.tableNumber}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('Authorization') }
         }).then(() => {
            setOrderDataUpdate(!orderDataUpdate);
         });
      }
   };
   return (
      <TableStatusBox>
         <div className="orderHead">
            <div>No. {data.tableNumber}</div>
            <div>{`주문 ${data.orderList.length} 개`}</div>
            <button className="orderDelete" onClick={hadleClickDeleteOrder}>
               <RiDeleteBinLine size="15"></RiDeleteBinLine>
            </button>
         </div>
         <div className="orderList">
            {data.orderList.map(menus => {
               return (
                  <div className="order" key={menus.menuId}>
                     <div className="fistLine">
                        <div className="menuName">
                           <p>{menus.menuName}</p>
                        </div>
                        <div className="quantity">
                           <p>{`${menus.quantity}개`}</p>
                        </div>
                     </div>

                     {/* <div className="price">{`${menus.price * menus.quantity}원`}</div> */}
                  </div>
               );
            })}
         </div>
         <div className="totalPrice">
            <div>{`total : ${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</div>
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
      top: -25px;
   }
   .orderHead {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #c2a9a9;
      font-weight: 900;
      > :nth-child(1) {
         font-size: 30px;
         color: #ff5252;
         font-weight: bold;
         width: 60%;
         margin-left: 10px;
      }
      > :nth-child(2) {
         display: flex;
         align-items: center;
         justify-content: end;
         width: 40%;
         font-size: 14px;
      }
   }
   .orderList {
      display: flex;
      width: 100%;
      height: 60%;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: scroll;
      &::-webkit-scrollbar {
         width: 10px;
         background: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
         background: rgba(0, 0, 0, 0.3);
         border-radius: 30px;
      }
      .order {
         display: flex;
         flex-direction: column;
         width: 100%;
         padding: 4px 0;
         font-size: 16px;
         font-weight: 900;
         justify-content: space-between;
         .fistLine {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2px;
            .menuName {
               width: 80%;
               line-height: 1.5;
            }
            .quantity {
               display: flex;
               line-height: 1.5;
            }
         }
      }
      .price {
         text-align: end;
         margin-right: 20px;
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
