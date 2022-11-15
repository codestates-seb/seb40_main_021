import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 70px);
  @media screen and (max-width: 700px) {
    width: 0;
    padding-top: 50px;
  }
`;

const s = () => {
  return (
    <Container>
      <Gnb />
      <Outlet />
    </Container>
  );
};

export default s;
