import styled, { css } from 'styled-components';

const InputBox = styled.input`
   width: 100%;
   margin: 15px 0 0;
   span {
      display: none;
   }
   label {
      font-size: 1.4rem;
      font-weight: 400;
   }
   font-size: 1.4rem;
   margin: 0 0;
   border-radius: 5px 5px 0 0;
   padding: 16px 20px;
   font-size: 14px;
   height: 48px;
   :focus {
      outline: none;
      border-color: ${p => (p.active ? '#FF6B00' : 'black')};
   }
   box-sizing: border-box;
   &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
   &::placeholder {
      color: #6d6d6d;
   }
   background: #f4f4f4;
   border: none;
   border-bottom: 2px solid #b6b6b6;
   &[type='password'] {
      background: #f4f4f4;
      border: none;
      border-bottom: 2px solid #666666;
   }
   ${props =>
      props.value === '' &&
      css`
         border-bottom: 2px solid #b6b6b6;
      `}
   ${p =>
      p.active &&
      css`
         border-bottom: 2px solid #ff6b00;
      `}
   /* :active {
         border-bottom: 3px solid #FF6C01;
      } */
   @media screen and (max-width: 600px) {
      background: #f4f4f4;
      border: none;
      border-bottom: 0px solid #b6b6b6;
      &[type='password'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #666666;
      }
   }
`;

const Input = ({ type, name, handleValue, width, value, placeholder, idx, active, isEmptyInputValue }) => {
   const onChange = e => {
      handleValue(e);
      isEmptyInputValue && isEmptyInputValue(e, name);
   };

   return (
      <InputBox
         type={type}
         idx={idx}
         active={active}
         value={value}
         //  defaultValue={value}
         onChange={onChange}
         width={width}
         placeholder={placeholder}
         name={name}
      />
   );
};

export default Input;
