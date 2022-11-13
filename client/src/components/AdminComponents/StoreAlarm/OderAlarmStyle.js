import styled, { keyframes } from "styled-components";

const dropMenuList = keyframes`
      0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }

`;
export const OrderListBox = styled.div`
  display: ${(props) => (props.menuViewDetails ? "block" : "none")};

  animation: ${dropMenuList} 0.3s;

  > :nth-child(odd) {
    background-color: rgb(246, 246, 246);
  }
  .orderList {
    display: flex;
    align-items: center;
    height: 70px;
    font-weight: bold;

    > :first-child {
      margin-left: 45px;
      width: 25%;
    }
    > :nth-child(2) {
      width: 25%;
    }
    > :nth-child(3) {
      font-weight: 400;
    }
  }
`;
export const Order = styled.div`
  border: ${(props) =>
    props.menuViewDetails ? "3px solid rgb(255, 107, 0)" : "none"};
  box-shadow: 1px 1px 10px 1px lightgray;
  border-radius: 3px;
  width: 80%;
  height: auto;
  font-size: 20px;
  background-color: white;
  margin-bottom: 40px;
  .detailedMenu {
    display: flex;
    justify-content: end;
    flex-grow: 1;
    width: auto;
  }
  .detailedMenuIcon {
    margin-right: 65px;
    width: 30px;
    height: 30px;
    transform: ${(props) =>
      props.menuViewDetails ? "scaleY(1)" : "scaleY(-1)"};
    transition: 0.3s;
  }
  #oderInfo {
    height: 100px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    > :first-child {
      font-size: 32px;
      margin-left: 45px;
      margin-right: 22px;
    }
    > div > b {
      font-size: 24px;
    }
  }
  #orderTime {
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-left: 30px;
    > :first-child {
      font-weight: bold;
      margin-right: 9px;
    }
  }
`;
