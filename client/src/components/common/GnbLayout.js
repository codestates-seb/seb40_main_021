import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  @media screen and (max-width: 700px) {
    width: 0;
    padding-top: 50px;
  }
  display: flex;
  
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
