import styled from "styled-components";


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
input {
    font-size: 1.4rem;
    margin: 8px 0 0;
    border-radius: 5px 5px 0 0;
    &::placeholder {
        color: #6d6d6d;
    }
    &[type="text"] {
        background: #f4f4f4;
        border: none;
        border-bottom: 3px solid #b6b6b6;
    }
    &[type="password"] {
        background: #f4f4f4;
        border: none;
        border-bottom: 3px solid #666666;
    }
}
@media screen and (max-width: 600px) {
    input[type="text"] {
        background: #f4f4f4;
        border: none;
        border-bottom: 0px solid #b6b6b6;
    }
    input[type="password"] {
        background: #f4f4f4;
        border: none;
        border-bottom: 0px solid #666666;
    }
}
`;

const Input = ({ type, value, handleValue, width, placeholders }) => {
  return (
      <InputBox type={type} defaultValue={value} onChange={(e) => handleValue(e.target.value)} width={width} placeholders={placeholders} />
  );
};

export default Input;

