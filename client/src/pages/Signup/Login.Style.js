import styled from 'styled-components';
import { CompletePanel } from './Complete.Style';

export const LoginPanel = styled(CompletePanel)`
   padding: 5.2rem 12rem 0;

   @media screen and (max-width: 900px) {
      width: 100%;
      padding: 5.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
`;
export const Btn = styled.a`
   padding: 12px 12px;
   display: inline-block;
   width: 120px;
   height: 48px;
   margin-bottom: 0;
   font-weight: normal;
   text-align: center;
   vertical-align: middle;
   -ms-touch-action: manipulation;
   touch-action: manipulation;
   cursor: pointer;
   background-image: none;
   border: 1px solid #d9d9d9;
   white-space: nowrap;
   padding: 12px 12px;
   font-size: 1.2rem;
   line-height: 1.4;
   border-radius: 30px;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   transition: background;
   transition-duration: 0.4s;
   text-shadow: 0 -1px 0 rgb(0 0 0 / 20%);
   box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
`;
export const BtnFill = styled(Btn)`
   background: #ff6c01;
   text-shadow: none;
   border: none;
   border-radius: 10px;
   padding: 14px 12px;
   font-size: 1.4rem;
   font-weight: 700;
   height: 48px;
   margin: 8px 0 0;
   a {
      color: #fff;
   }
`;

export const LoginTitle = styled.div`
   margin: 0 0 30px;
   text-align: center;
   h4 {
      font-size: 16px;
      font-weight: 900;
   }
`;

export const IdRemember = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: relative;
   float: right;
   font-size: 13px;
   input {
      height: auto;
      margin: 0 5px 0 0;
      cursor: pointer;
   }
   label {
      cursor: pointer;
   }
`;
export const LoginBtn = styled.div`
   button {
      background: #ff6c01;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: #fff;
      margin-top: 35px;
      float: left;
      &:hover {
         color: #fff;
      }
   }

   @media screen and (max-width: 900px) {
      /* margin: 39rem 0 0; */
   }
`;
