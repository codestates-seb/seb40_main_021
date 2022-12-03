import styled, { css, keyframes } from 'styled-components';
import IconTable from './../../assets/img/icon_table.png';
import IconTableActive from './../../assets/img/icon_table_active.png';
import IconMenu from './../../assets/img/icon_menu.png';
import IconMenuActive from './../../assets/img/icon_menu_active.png';
import IconPlus from './../../assets/img/icon_plus.png';
import IconPlusActive from './../../assets/img/icon_plus_active.png';
import IconQR from './../../assets/img/icon_QR.png';
import IconQRActive from './../../assets/img/icon_qr_active.png';
import StoreIcon from './../../assets/image/icon_store.png';
import StoreIconWhite from './../../assets/image/icon_store_white.png';
const bellAmimation = keyframes`
      0% {
            opacity: 0;
            transform: translate3d(0%, -100%, 0%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }

`;
export const GnbContainer = styled.div`
   position: fixed;
   top: 50px;
   left: 0;
   width: 250px;
   height: calc(100vh - 50px);
   background-color: #313e46;
   @media screen and (max-width: 900px) {
      height: 100vh;
      z-index: 11;
      width: 100%;
      top: 0;
      left: -100%;
      transition: left 0.3s;
      ${position =>
         position.active &&
         css`
            left: 0%;
         `}
   }
`;

export const MSpan = styled.span`
   display: block;
   color: white;
   margin: 0 auto;
   text-align: center;
   margin-top: 20px;
   font-size: 13px;
   cursor: pointer;
   display: none;
   & :hover {
      text-decoration: underline;
   }
   @media screen and (max-width: 700px) {
      display: block;
   }
`;
export const CloseBtn = styled.button`
   display: none;
   background-color: transparent;
   border: none;
   position: absolute;
   top: 20px;
   right: 20px;
   cursor: pointer;
   @media screen and (max-width: 700px) {
      display: block;
   }
   & img {
      animation: ${bellAmimation} 0.3s;
      height: 18px;
      width: 18px;
   }
`;
export const GnbList = styled.ul`
   width: 100%;
`;
export const TopLi = styled.li`
   height: 214px;
   background-color: #4a555c;
   & a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 214px;
      width: 100%;
      font-size: 16px;
      color: white;
      text-decoration: none;
      text-align: center;
      font-weight: 700;
   }
   & a.active {
      background-color: #f6f6f6;
      color: black;
   }

   & a.active span {
      display: none;
   }
`;
export const Bell = styled.div`
   background-color: #313e46;
   color: white;
   text-decoration: none;
   font-weight: 700;
   font-size: 16px;
   border-radius: 100%;
   border: 3px solid #ff8f8f;
   width: 80px;
   height: 80px;
   margin-bottom: 9px;
   background-color: #12232d;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   margin-bottom: 12px;
   & img {
      margin-top: -7px;
   }

   & span {
      padding: 4px 10px 2px;
      border-radius: 25px;
      background-color: #ff5252;
      font-size: 24px;
      color: white;
      position: absolute;
      left: calc(100% - 24px);
      top: -5px;
   }
`;
export const Li = styled.li`
   list-style: none;
   :hover {
      color: white;
   }
   & a {
      height: 70px;
      display: flex;
      align-items: center;
      border-top: 1px solid #7e919c;
      background-color: #313e46;
      color: white;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      padding-left: 34px;

      &.active {
         background-color: #f6f6f6;
         color: black;
      }

      &.active .tableImg {
         background: url(${IconTableActive});
      }
      &.active .menuImg {
         background: url(${IconMenuActive});
      }
      &.active .plusImg {
         background: url(${IconPlusActive});
      }
      &.active .qrImg {
         background: url(${IconQRActive});
      }
      &.active .storeImg {
         background: url(${StoreIcon});
      }
   }
`;
export const TableImg = styled.span`
   display: block;
   width: 24px;
   height: 24px;
   margin-right: 12px;
   background: url(${IconTable});
   background-size: cover;
`;
export const MenuImg = styled.span`
   display: block;
   width: 20px;
   height: 20px;
   margin-right: 12px;
   background: url(${IconMenu});
   background-size: cover;
`;
export const StoreImg = styled.span`
   display: block;
   width: 20px;
   height: 20px;
   margin-right: 12px;
   background: url(${StoreIconWhite});
   background-size: cover;
`;
export const PlusImg = styled.span`
   display: block;
   width: 16px;
   height: 16px;
   margin-right: 12px;
   background: url(${IconPlus});
   margin-top: -5px;
`;
export const QrImg = styled.span`
   display: block;
   width: 30px;
   height: 30px;
   margin-right: 6px;
   margin-top: -14px;
   background: url(${IconQR});
   background-size: cover;
`;
