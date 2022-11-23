import styled from 'styled-components';

export const Wrapper = styled.div`
   margin: 10px;
   padding: 10%;
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
   height: 800px;
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
   @media screen and (max-width: 700px) {
      span {
         font-size: 1.2rem;
         font-weight: 400;
         float: left;
         width: 100%;
      }
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
   @media screen and (max-width: 700px) {
      input[type='text'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #b6b6b6;
      }
      input[type='password'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #666666;
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
   height: 48px;
   margin: 8px 0 0;
   color: #000;
   font-size: 1.4rem;
   font-weight: 400;
   @media screen and (max-width: 700px) {
      background: #bababa;
      text-shadow: none;
      border: none;
      color: #fff;
      border-radius: 10px;
      display: none;
   }
`;
export const BtnDefaultMobile = styled(BtnDefault)`
   display: none;
   @media screen and (max-width: 700px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      border-radius: 0 5px 5px 0;
      background: #ff6c01;
   }
`;
export const BtnDefaultActive = styled(BtnDefault)`
   @media screen and (max-width: 700px) {
      background: #000;
      text-shadow: none;
      border: none;
      color: #fff;
      border-radius: 10px;
      display: block;
   }
`;
export const FormControl = styled.input`
   width: 100%;
   padding: 0.6rem 1rem;
   height: 4.8rem;
`;
export const CompanyNum = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   input {
      width: 70%;
   }
   @media screen and (max-width: 700px) {
      position: relative;
      input {
         width: 100%;
      }
   }
`;
export const RealUpload = styled.div`
   display: none;
`;
export const ImgReg = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const Upload = styled.div`
   width: 100px;
   height: 100px;
   background: url('images/imgReg.png') no-repeat center;
`;
export const ImagePreview = styled.div`
   list-style: none;
   padding: 0;
   margin: 0;
   width: 100px;
   height: 100px;
   /* background-color: aquamarine; */
   display: flex;
   gap: 20px;
   li {
      display: none;
      &:first-child {
         display: block;
      }
      img {
         max-height: 100%;
         margin: 0 auto;
      }
   }
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
export const ImgRegBtn = styled(BtnArea)`
   display: flex;
   justify-content: flex-end;
   margin: 40px 0 0;
`;
