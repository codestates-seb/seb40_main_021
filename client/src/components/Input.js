import styled from 'styled-components';

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
      padding: 16px 20px ;
      font-size: 14px;
      height: 48px;
      :focus {
         outline: none !important; border-color: black;
      }
      box-sizing: border-box;
      &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
      &::placeholder {
         color: #6d6d6d;
      }
         background: #f4f4f4;
         border: none;
         border-bottom: 3px solid #b6b6b6;
      
      &[type='password'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 3px solid #666666;
      }

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

const Input = ({ type, name, handleValue, width, value, placeholder, idx }) => {
   return (
      <InputBox
         type={type}
         idx={idx}
         value={value}
         //  defaultValue={value}
         onChange={e => handleValue(e)}
         width={width}
         placeholder={placeholder}
         name={name}
      />
   );
};

export default Input;
