import React, { useState } from "react";
import styled from "styled-components";
const CallAlarm = ({ data }) => {
  const [timeOver, setTimeOver] = useState(true);
  setTimeout(() => {
    setTimeOver(false);
  }, 10000);
  return (
    <CallAlarmBox timeOver={timeOver}>
      <div className="tableNum">{`${data.tableNum}번`}</div>
      <div className="callTime">{data.calltime}</div>
    </CallAlarmBox>
  );
};
const CallAlarmBox = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  background-color: ${({ timeOver }) =>
    timeOver ? "rgb(18, 13, 45)" : "rgb(167,167,167)"};
  width: 130px;
  height: 130px;
  border-radius: 10px;
  .tableNum {
    display: flex;
    align-items: center;
    font-size: 36px;
    height: 80%;
  }
  .callTime {
    margin-left: 50px;
  }
`;
export default CallAlarm;
