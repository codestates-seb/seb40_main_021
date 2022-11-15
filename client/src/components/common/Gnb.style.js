import styled, { css } from "styled-components";

export const GnbContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 300px;
  height: calc(100vh - 70px);
  background-color: #313e46;
  @media screen and (max-width: 700px) {
    height: 100vh;
    z-index: 11;
    width: 100%;
    top: 0;
    left: -100%;
    transition: left 0.3s;
    ${(position) =>
      position.active &&
      css`
        left: 0%;
      `}
  }
`;

export const MSpan = styled.span`
  display: block;
  color: white;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  cursor: pointer;
  display: none;
  & :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
export const CloseBtn = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    display: block;
  }
  & img {
    height: 18px;
    width: 18px;
  }
`;
export const GnbList = styled.ul`
  width: 100%;
`;
export const TopLi = styled.li`
  height: 214px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 214px;
    width: 100%;
    font-size: 16px;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
  }
`;
export const Bell = styled.div`
  background-color: #313e46;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-bottom: 9px;
  background-color: #12232d;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  & img {
    margin-top: -7px;
  }

  & span {
    padding: 3px 10px;
    border-radius: 25px;
    background-color: #ff5252;
    font-size: 24px;
    color: white;
    position: absolute;
    left: calc(100% - 24px);
    top: -5px;
  }
`;
export const Li = styled.li`
  list-style: none;

  & a {
    height: 70px;
    display: flex;
    align-items: center;
    border-top: 1px solid #7e919c;
    background-color: #313e46;
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    padding-left: 34px;

    &.active {
      background-color: #f6f6f6;
      color: black;
    }
  }
`;
export const TableImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
export const MenuImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
export const PlusImg = styled.img`
  width: 16x;
  height: 16px;
  margin-right: 12px;
  margin-top: -5px;
`;
export const QrImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 6px;
  margin-top: -14px;
`;
