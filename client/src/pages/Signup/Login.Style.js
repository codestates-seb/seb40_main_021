import styled from 'styled-components';

export const Wrapper = styled.div`
   margin: 5px;
   padding: 2%;
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
   @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100vh;
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
export const FormControl = styled.input`
   width: 100%;
   padding: 0.6rem 1rem;
   height: 4.8rem;
`;
export const LoginPanel = styled.section`
   width: 600px;
   height: 430px;
   padding: 5.2rem 14rem 0;
   background: #fff;
   border-top: 5px solid #ff6b00;
   border-radius: 0 0 10px 10px;
   @media screen and (max-width: 600px) {
      width: 100%;
      height: 100vh;
      padding: 5.2rem 2.6rem 0;
      background: #fff;
      border-top: 0px solid #ff6b00;
      border-radius: 0 0;
      margin-top: 30px;
   }
`;
export const LoginTitle = styled.div`
   margin: 0 0 30px;
   text-align: center;
   h4 {
      font-size: 2rem;
      font-weight: 700;
   }
`;
export const InfoForm = styled.div`
   width: 100%;
   margin: 15px 0 0;
   span {
      display: none;
   }
   label {
      font-size: 1.4rem;
      font-weight: 400;
   }
   input {
      font-size: 1.4rem;
      margin: 8px 0 0;
      border-radius: 5px 5px 0 0;
      &::placeholder {
         color: #6d6d6d;
      }
      &[type='text'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 3px solid #b6b6b6;
      }
      &[type='password'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 3px solid #666666;
      }
   }
`;
export const InfoFormError = styled(InfoForm)`
   input[type='password'] {
      background: #f4f4f4;
      border: none;
      border-bottom: 3px solid #ff6c01;
   }
   span {
      display: block;
      font-size: 1.1rem;
      font-weight: 400;
      color: #ff6c01;
      float: left;
      width: 60%;
   }
`;
export const IdRemember = styled.div`
   position: relative;
   width: 40%;
   float: right;
   input + label {
      position: absolute;
      top: 5px;
      left: 15px;
   }
`;
export const LoginBtn = styled.div`
   display: flex;
   justify-content: center;
   margin: 10px 0 0;
   width: 100%;
   a {
      width: 100%;
   }
   @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      margin: 39rem 0 0;
      width: 100%;
   }
`;
