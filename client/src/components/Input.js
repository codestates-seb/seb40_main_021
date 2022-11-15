import styled from "styled-components";


const InputBox = styled.input`
  width: ${(props) => (props.width ? props.width : "40%")};
  height: 48px;
  border: 1px solid #f4f4f4;
  background-color: #f4f4f4;
  border-radius: 5px;
  &:focus {
    border-color: #f4f4f4;
    outline: #f4f4f4;
  }
`;

const Input = ({ type = "text", value, handleValue, width }) => {
  return (
      <InputBox type={type} defaultValue={value} onChange={(e) => handleValue(e.target.value)} width={width} />
  );
};

export default Input;
