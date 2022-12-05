import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   height: calc(100vh - 50px);
   @media screen and (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: calc(100vh - 50px);
   }
`;
export const CompletePanel = styled.section`
   margin-top: 15vh;
   width: 600px;
   height: 430px;
   padding: 5.2rem 5.2rem 0;
   background: #fff;
   border-top: 5px solid #ff6b00;
   border-radius: 0 0 10px 10px;
   box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
   @media screen and (max-width: 900px) {
      margin-top: 0;
      min-height: calc(100vh - 50px);
      padding: 15.1rem 2.6rem 0;
      background: #fff;
      border-top: 0px solid #ff6b00;
      border-radius: 0 0;
   }
`;
export const CompleteImg = styled.div`
   display: flex;
   justify-content: center;
   @media screen and (max-width: 900px) {
   }
`;
export const CompleteTxt = styled.div`
   margin: 40px 0 0;
   text-align: center;
   h4 {
      font-size: 22px;
      font-weight: 700;
   }
   h5 {
      font-size: 16px;
      line-height: 18.5px;
      margin-top: 15px;
   }
   @media screen and (max-width: 900px) {
      margin: 30px 0 0;
      text-align: center;
      h4 {
         font-size: 2rem;
         font-weight: 700;
         color: #ff6c01;
      }
   }
`;
export const CompleteBtn = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 35px;

   @media screen and (max-width: 900px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: absolute;
      bottom: 10%;
      left: 0;
      right: 0;
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
   @media screen and (max-width: 900px) {
      &:first-child {
         width: 100%;
         margin-bottom: 2rem;
      }
      &:last-child {
         width: 100%;
      }
   }
`;
export const BtnFill = styled.button`
   a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 45px;
      background: #ff6c01;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
   }
   a:hover {
      color: #fff;
   }
`;

export const BtnDefaultActive = styled.button`
   width: 120px;
   height: 45px;
   background: #fff;
   border: 2px solid #ff6c01;
   border-radius: 10px;
   color: #000;
   font-size: 16px;
   font-weight: 700;
   margin-right: 15px;
   @media screen and (max-width: 900px) {
      background: #000
      border: none;
      color: #fff;
      border-radius: 10px;
   }
`;
