import styled, { keyframes } from 'styled-components';

const dropMenuList = keyframes`
      0% {
            opacity: 0;
            transform: translate3d(0%, -100%, 0%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }

`;
export const OrderListBox = styled.div`
   display: ${({ menuViewDetails }) => (menuViewDetails ? 'block' : 'none')};
   animation: ${dropMenuList} 0.3s;

   > :nth-child(odd) {
      background-color: rgb(237 237 237);
   }
   .orderList {
      display: flex;
      align-items: center;
      height: 70px;
      font-weight: bold;

      > :first-child {
         margin-left: 45px;
         width: 25%;
      }
      > :nth-child(2) {
         width: 25%;
      }
      > :nth-child(3) {
         font-weight: 400;
      }
   }
   @media screen and (max-width: 900px) {
      .orderList {
         display: flex;
         align-items: center;
         height: 70px;
         font-weight: bold;
         font-size: 14px;
         > :first-child {
            margin-left: 20px;
            width: 40%;
         }
         > :nth-child(2) {
            width: 30%;
         }
         > :nth-child(3) {
            font-weight: 400;
         }
      }
   }
`;
export const Order = styled.div`
   cursor: pointer;
   box-shadow: 0 2px 10px 2px rgb(0 0 0 / 15%);
   border-radius: 3px;
   width: auto;
   height: auto;
   font-size: 20px;
   margin-bottom: 15px;
   background-color: white;
   padding-top: 5px;
   .deleteBtn {
      position: absolute;
      right: 75px;
      font-weight: bold;
      color: gray;
   }
   .reqText {
      display: flex;
      align-items: center;
      height: 70px;
   }
   .detailedMenu {
      display: flex;
      justify-content: end;
      flex-grow: 1;
      width: auto;
   }
   .detailedMenuIcon {
      cursor: pointer;
      margin-right: 65px;
      width: 30px;
      height: 30px;
      transform: ${({ menuViewDetails }) => (menuViewDetails ? 'rotate(-180deg)' : 'rotate(0deg)')};
      transition: 0.3s;
   }
   #oderInfo {
      height: 100px;
      width: 100%;
      background-color: white;
      display: flex;
      align-items: center;
      font-weight: 900;

      .detailedMenuIcon {
         margin-right: 10px;
      }
      > :first-child {
         font-size: 30px;
         margin-left: 45px;
         margin-right: 100px;
         color: #ff6c01;
      }
      > :nth-child(2) {
         text-align: center;
         flex-grow: 1;
      }
      /* &:hover {
         background-color: #fdffde;
      } */
   }
   #orderTime {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-left: 30px;
      > :first-child {
         font-weight: bold;
         margin-right: 9px;
      }
   }
   .reqText {
      padding-left: 40px;
   }
   @media screen and (max-width: 900px) {
      font-size: 16px;
      font-weight: bold;
      .deleteBtn {
         position: absolute;
         right: 60px;
      }
      #oderInfo {
         font-size: 12px;
         > :first-child {
            font-size: 24px;
            margin: 0;
            width: 25%;
            margin-left: 20px;
         }
         > :nth-child(2) {
            text-align: center;
            width: 25%;
         }
         #orderTime {
            text-align: center;
            font-size: 10px;
            margin-left: 0px;
            > :first-child {
               font-weight: bold;
               margin-right: 9px;
            }
         }
      }
   }
`;
