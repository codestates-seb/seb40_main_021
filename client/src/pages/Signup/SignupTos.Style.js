import styled from 'styled-components';

export const Wrapper = styled.div`
   margin-top: 50px;
   min-height: calc(100vh - 50px);
   display: flex;
   justify-content: center;
   align-items: flex-start;
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
   @media screen and (max-width: 900px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
   }
`;
export const MemberReg = styled.section`
   padding: 30px;
   @media screen and (max-width: 900px) {
      width: 100%;
      height: 95vh;
      overflow: scroll;
      background: #fff;
   }
`;
export const PageTitle = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
   h4 {
      font-size: 20px;
      font-weight: 900;
      margin: 0 0 0 1rem;
   }
   @media screen and (max-width: 900px) {
      padding: 0 2.6rem;
   }
`;
export const DivideLine = styled.ul`
   display: flex;
   justify-content: center;
   list-style: none;
   padding: 0;
   margin: 35px 0;
   li {
      width: 33.33%;
      height: 5px;
      background: #d9d9d9;
   }
   @media screen and (max-width: 900px) {
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
   min-height: auto;
   overflow: hidden;
   padding: 30px 50px;
   background: #fff;
   border-radius: 10px;
   box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   span {
      font-size: 13px;
      color: #ff6c01;
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      height: auto;
      padding: 2.6rem 2.6rem 0;
      background: #fff;
      border-radius: 10px;
      box-shadow: none;
   }
`;
export const PanelTitle = styled.div`
   h5 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 15px;
   }
   span {
      font-size: 12px;
      font-weight: 400;
      float: right;
   }
`;
export const AgreeTitle = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border: 1px solid #c5bebe;
   border-radius: 5px;
   margin: 7px 0 0;
   cursor: pointer;
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
         left: 20px;
         top: 50%;
         transform: translateY(-40%);
         color: #c8c8c8;
      }
      &:checked + label::after {
         content: '✔';
         font-size: 2rem;
         width: 2.5rem;
         height: 2.5rem;
         text-align: center;
         position: absolute;
         left: 20px;
         top: 50%;
         transform: translateY(-40%);
         color: #111f27;
      }
   }
   label {
      width: 100%;
      padding: 20px;
      cursor: pointer;
      background: #fff;
      @media screen and (max-width: 900px) {
         width: calc(100% - 40px);
      }
   }
   h5 {
      font-size: 18px;
      font-weight: 900;
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
      font-size: 14px;
   }
`;
export const AgreeDetailActive = styled(AgreeDetail)`
   display: block;
   height: 250px;
   background: #f0f0f0;
   overflow-y: scroll;
   border-radius: 0 0 5px 5px;
   padding: 20px;
   line-height: 23px;
   word-break: keep-all;
   margin-bottom: 25px;

   &::-webkit-scrollbar {
      width: 10px;
      background: rgba(0, 0, 0, 0);
   }
   &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
   }
   @media screen and (min-width: 900px) {
      display: block;
   }
`;
export const Btn = styled.div`
   align-self: center;
   a {
      max-width: 120px;
      height: 45px;
      background: #fff;
      border: 2px solid #ff6c01;
      border-radius: 10px;
      padding: 12px 35px;
      font-size: 16px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto 0 auto;

      @media screen and (max-width: 900px) {
         max-width: 80%;
         background: ${props => (props.allChecked ? 'black' : '#bababa')};
         text-shadow: none;
         border: none;
         color: #fff;
         border-radius: 10px;
         width: 100%;
         height: 50px;
      }
   }
   @media screen and (max-width: 900px) {
      width: 100%;
   }
`;

export const ImgContainer = styled.span`
   cursor: pointer;
   img {
      display: none;
   }

   @media screen and (max-width: 900px) {
      width: 40px;
      height: 40px;
      color: #ff6c01;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
         display: block;
         width: 1.5rem;
      }
   }
`;
