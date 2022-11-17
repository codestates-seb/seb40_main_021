import styled, { keyframes } from 'styled-components';

const dropMenuList = keyframes`
      0% {
            opacity: 0;
            transform: translate3d(0%, -100%, 0);
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
      background-color: rgb(246, 246, 246);
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
   @media screen and (max-width: 700px) {
      .orderList {
         display: flex;
         align-items: center;
         height: 70px;
         font-weight: bold;

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
   border: ${({ menuViewDetails }) => (menuViewDetails ? '3px solid rgb(255, 107, 0)' : 'none')};
   box-shadow: 0 4px 2px 0px lightgray;
   border-radius: 3px;
   width: auto;
   height: auto;
   font-size: 20px;
   margin-bottom: 40px;
   margin-left: 20px;
   background-color: white;
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
      > :first-child {
         font-size: 32px;
         margin-left: 45px;
         margin-right: 22px;
      }
      > div > b {
         font-size: 24px;
      }
   }
   #orderTime {
      display: flex;
      align-items: center;
      font-size: 15px;
      margin-left: 30px;
      > :first-child {
         font-weight: bold;
         margin-right: 9px;
      }
   }
   .reqText {
      padding-left: 40px;
   }
   @media screen and (max-width: 700px) {
      font-size: 16px;
      .detailedMenuIcon {
         margin-right: 10px;
      }
      #oderInfo {
         > :first-child {
            margin: 0;
            width: 15%;
            font-size: 1.2rem;
            margin-left: 20px;
         }
         > :nth-child(2) {
            font-size: 1rem;
            text-align: center;
            width: 20%;
            b {
               font-size: 1.1rem;
            }
         }
      }
      .reqText {
         padding-left: 20px;
      }
   }

   #orderTime {
      flex-grow: 0;
      font-size: 0.8rem;

      margin-left: 10px;

      margin-right: 10px;
      > :first-child {
         text-align: right;
         margin-right: 25px;
      }
   }
`;
