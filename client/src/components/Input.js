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
      padding: 0.6rem 1rem;
      height: 48px;
      box-sizing: border-box;
      
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

   @media screen and (max-width: 600px) {
      &[type='text'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #b6b6b6;
      }
      &[type='password'] {
         background: #f4f4f4;
         border: none;
         border-bottom: 0px solid #666666;
      }
   }
`;

const Input = ({ type, value, handleValue, width, placeholders }) => {
  return (
    <InputBox
      type={type}
      //  defaultValue={value}
      onChange={e => handleValue(e.target.value)}
      width={width}
      placeholders={placeholders}
    />
  );
};

export default Input;
