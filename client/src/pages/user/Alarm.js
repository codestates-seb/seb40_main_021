import React from "react";
import CallAlarms from "../../components/AdminComponents/StoreAlarm/CallAlarms";
import OrderAlarms from "../../components/AdminComponents/StoreAlarm/OrderAlarms";
import styled from "styled-components";

const Alarms = () => {
  return (
    <Container>
      <CallAlarms></CallAlarms>
      <OrderAlarms></OrderAlarms>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-grow: 1;
  width: calc(100% - 300px);
  padding-left: 300px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export default Alarms;
