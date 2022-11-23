import styled from 'styled-components';

export const Wrapper = styled.div`
   margin: 5px;
   padding: 7%;
   height: 100vh;
   transition: all 0.5s ease-in;
   -webkit-transition: all 0.5s ease-in;
   -moz-transition: all 0.5s ease-in;
   -o-transition: all 0.5s ease-in;
   &::before,
   &::after {
      display: table;
      content: ' ';
   }
   &::after {
      clear: both;
   }
`;
export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   @media screen and (max-width: 700px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100vh;
   }
`;
export const MemberReg = styled.section`
   background: transparent;
   @media screen and (max-width: 700px) {
      padding: 30px 0 0;
      width: 100%;
      height: 100vh;
      background: #fff;
   }
`;
export const PageTitle = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 200px;
   h4 {
      font-size: 2rem;
      margin: 0 0 0 1rem;
   }
   @media screen and (max-width: 700px) {
      padding: 0 2.6rem;
      margin-top: 50px;
   }
`;
export const DivideLine = styled.ul`
   display: flex;
   justify-content: center;
   list-style: none;
   padding: 0;
   margin: 38px 0 48px;
   li {
      width: 33.33%;
      height: 5px;
      background: #d9d9d9;
   }
   @media screen and (max-width: 700px) {
      margin: 15px 0 14px;
      padding: 0 2.6rem;
   }
`;
export const Active = styled.div`
   width: 33.33%;
   height: 5px;
   background: #ff6c01;
`;
export const MemberPanel = styled.div`
   width: 600px;
   height: 730px;
   padding: 5.2rem 5.2rem 0;
   background: #fff;
   border-radius: 10px;
   @media screen and (max-width: 700px) {
      width: 100%;
      height: auto;
      padding: 2.6rem 2.6rem 0;
      background: #fff;
      border-radius: 10px;
   }
`;
export const PanelTitle = styled.div`
   h5 {
      font-size: 1.6rem;
      font-weight: 700;
   }
   span {
      font-size: 1.2rem;
      font-weight: 400;
      float: right;
   }
`;
export const AgreeTitle = styled.div`
   background: #fff;
   border: 1px solid #c5bebe;
   border-radius: 5px 5px 0 0;
   padding: 1.8rem;
   margin: 7px 0 0;
   input[type='checkbox'] {
      display: none;
      & + label {
         display: inline-block;
         position: relative;
      }
      & + label::after {
         content: '✔';
         font-size: 2rem;
         width: 2.5rem;
         height: 2.5rem;
         text-align: center;
         position: absolute;
         left: 0rem;
         top: -0.4rem;
         color: #c8c8c8;
      }
      &:checked + label::after {
         content: '✔';
         font-size: 2rem;
         width: 2.5rem;
         height: 2.5rem;
         text-align: center;
         position: absolute;
         left: 0rem;
         top: -0.4rem;
         color: #111f27;
      }
   }
   h5 {
      font-size: 1.6rem;
      margin: 0 0 0 30px;
   }
`;
export const AgreeTitleAdd = styled(AgreeTitle)`
   border-radius: 5px 5px 5px 5px;
   margin: 24px 0 0;
`;
export const AgreeDetail = styled.div`
   display: none;
   h5 {
      font-size: 1.4rem;
   }
`;
export const AgreeDetailActive = styled(AgreeDetail)`
   display: block;
   height: 310px;
   background: #f0f0f0;
   overflow-y: scroll;
   border-radius: 0 0 5px 5px;
   padding: 30px;
`;
export const BtnArea = styled.div`
   display: flex;
   justify-content: center;
   margin: 107px 0 0;
   a {
      font-size: 1.6rem;
      font-weight: 700;
      a::after {
         content: '';
         display: inline-block;
         width: 0.9rem;
         height: 0.9rem;
         margin-left: 0.5rem;
         border-top: 0.15rem solid #333;
         border-right: 0.15rem solid #333;
         transform: rotate(45deg);
      }
      &:hover::after {
         border-top: 0.15rem solid #ff6c01;
         border-right: 0.15rem solid #ff6c01;
      }
   }
   @media screen and (max-width: 700px) {
      display: flex;
      justify-content: center;
      margin: 135px 0 0;

      a {
         color: #fff;
         a::after {
            border-top: 0.15rem solid #fff;
            border-right: 0.15rem solid #fff;
         }
      }
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
   @media screen and (max-width: 600px) {
      width: 100%;
   }
`;
export const BtnDefault = styled(Btn)`
   background: #fff;
   text-shadow: none;
   border: 2px solid #ff6c01;
   border-radius: 10px;
   @media screen and (max-width: 700px) {
      background: #bababa;
      text-shadow: none;
      border: none;
      color: #fff;
      border-radius: 10px;
   }
`;
