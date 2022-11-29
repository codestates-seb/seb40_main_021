import styled, { css } from 'styled-components';

export const Info = styled.div`
   width: 100%;
   margin: 15px 0 0;
   span {
      display: none;
   }
   p {
      font-size: 14px;
      font-weight: 900;
   }
   input {
      height: 45px;
      font-size: 14px;
      margin: 8px 0;
      border-radius: 5px 5px 0 0;
      border: none;

      border-bottom: 3px solid #b6b6b6;
      background: #f4f4f4;

      &::placeholder {
         color: #6d6d6d;
      }
   }
   input:focus {
      outline: none;
      ${props =>
         props.idError
            ? css`
                 border-bottom: 3px solid #ff6c01;
              `
            : css`
                 border-bottom: 3px solid #666666;
              `}
   }
   span {
      display: block;
      font-size: 13px;
      color: #ff6c01;
      float: left;
      width: 60%;
   }

   @media screen and (max-width: 900px) {
      input {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #b6b6b6;
      }
   }
`;

export const InfoForm = styled.div`
   width: 100%;
   margin: 15px 0 0;
   span {
      display: none;
   }
   p {
      font-size: 14px;
      font-weight: 900;
   }
   input {
      height: 45px;
      font-size: 14px;
      margin: 8px 0;
      border-radius: 5px 5px 0 0;
      border: none;

      border-bottom: 3px solid #b6b6b6;
      background: #f4f4f4;

      &::placeholder {
         color: #6d6d6d;
      }
   }
   input:focus {
      outline: none;

      ${props =>
         props.passwordError
            ? css`
                 border-bottom: 3px solid #ff6c01;
              `
            : css`
                 border-bottom: 3px solid #666666;
              `}
   }

   @media screen and (max-width: 900px) {
      input {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #b6b6b6;
      }
   }
`;

export const InfoFormError = styled(InfoForm)`
   input[type='password'] {
      background: #f4f4f4;
      border: none;
      border-bottom: 3px solid #b6b6b6;
   }

   input:focus {
      outline: none;
      ${props =>
         props.passwordConfirmError
            ? css`
                 border-bottom: 3px solid #ff6c01;
              `
            : css`
                 border-bottom: 3px solid #666666;
              `}
   }

   span {
      display: block;
      font-size: 13px;
      color: #ff6c01;
      float: left;
      width: 60%;
   }
`;
export const InfoFormAuthComplete = styled(InfoForm)`
   span {
      display: block;
   }
`;
export const FormControl = styled.input`
   width: 100%;
   padding: 0 20px;
   height: 45px;
`;
export const CompanyNum = styled.div`
   display: flex;
   justify-content: space-between;
   input {
      width: 70%;
   }
   @media screen and (max-width: 900px) {
      position: relative;
      input {
         width: 100%;
      }
   }
`;
export const Btn = styled.button`
   align-self: center;
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
      max-width: none;
      background: #bababa;
      text-shadow: none;
      border: none;
      color: #fff;
      border-radius: 10px;
      width: 100%;
      margin: none;
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      height: 50px;
   }
`;
export const BtnFill = styled.button`
   cursor: pointer;
   white-space: nowrap;
   background: #ff6c01;
   text-shadow: none;
   border: none;
   border-radius: 10px;
   padding: 12px 35px;
   font-size: 16px;
   font-weight: 900;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 8px 0;
   a {
      color: #fff;
   }
   a:hover {
      color: #fff;
   }
   @media screen and (max-width: 900px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70px;
      border-radius: 0 5px 0 0;
   }
`;
