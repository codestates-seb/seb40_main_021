import styled, { css } from 'styled-components';

export const bottomLineError = css`
   border-bottom: 3px solid #b6b6b6;

   ${props =>
      props.idError &&
      css`
         border-bottom: 3px solid #ff6c01;
      `}

   ${props =>
      props.buttonError &&
      css`
         border-bottom: 3px solid #ff6c01;
      `}


      ${props =>
      props.passwordConfirmError &&
      css`
         border-bottom: 3px solid #ff6c01;
      `}
`;

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
      ${bottomLineError}

      background: #f4f4f4;

      &::placeholder {
         color: #6d6d6d;
      }
   }
   input:focus {
      outline: none;

      border-bottom: 3px solid #b6b6b6;

      ${props =>
         props.idError &&
         css`
            border-bottom: 3px solid #ff6c01;
         `}

      ${props =>
         props.buttonError &&
         css`
            border-bottom: 3px solid #ff6c01;
         `}
      /* ${props =>
         props.idError
            ? css`
                 border-bottom: 3px solid #ff6c01;
              `
            : css`
                 border-bottom: 3px solid #666666;
              `} */
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

         ${props =>
            props.idError &&
            css`
               border-bottom: 3px solid #ff6c01;
            `}

         ${props =>
            props.buttonError &&
            css`
               border-bottom: 3px solid #ff6c01;
            `}
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

      ${bottomLineError}

      background: #f4f4f4;

      &::placeholder {
         color: #6d6d6d;
      }
   }
   input:focus {
      outline: none;

      ${bottomLineError}
   }

   @media screen and (max-width: 900px) {
      input {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #b6b6b6;

         ${props =>
            props.idError &&
            css`
               border-bottom: 3px solid #ff6c01;
            `}

         ${props =>
            props.buttonError &&
            css`
               border-bottom: 3px solid #ff6c01;
            `}
      }
   }
`;

export const InfoFormError = styled(InfoForm)`
   input[name='passwordConfirm'] {
      background: #f4f4f4;
      border: none;
      ${bottomLineError}

      &:focus {
         outline: none;
         ${bottomLineError}
      }
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
   input[name='businessNumber'] {
      ${props =>
         props.businessNumberError
            ? css`
                 border-bottom: 3px solid #ff6c01;
              `
            : css`
                 //   border-bottom: 3px solid #b6b6b6;
              `};
   }

   span {
      display: block;
   }
`;
export const FormControl = styled.input`
   width: 100%;
   padding: 0 20px;
   height: 45px;

   &.id-input {
      width: 70%;
   }
`;
export const CompanyNum = styled.div`
   display: flex;
   justify-content: space-between;
   input {
      width: 70%;
   }
   @media screen and (max-width: 900px) {
      position: relative;
      input,
      .id-input {
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

   &:hover {
      color: #ff6c01;
   }

   @media screen and (max-width: 900px) {
      max-width: 80%;
      background: ${props => (props.allChecked ? 'black' : '#bababa')};
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
   height: 45px;
   span {
      color: #fff;
      font-size: 15px;
   }

   a {
      color: #fff;
      &:hover {
         color: #fff;
      }
   }

   @media screen and (max-width: 900px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 10rem;
      border-radius: 0 5px 0 0;
   }
`;

export const BtnIdCheck = styled.button`
   width: 25%;
   height: 45px;
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
   height: 45px;
   span {
      color: #fff;
      font-size: 15px;
   }
   a {
      color: #fff;
      &:hover {
         color: #fff;
      }
   }

   span {
      width: 90px;
      font-size: 15px;
   }

   @media screen and (max-width: 900px) {
      width: 10rem;
      height: 45px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0 5px 0 0;
   }
`;
