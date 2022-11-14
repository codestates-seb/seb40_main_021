import React, { useState } from "react";
import styled from "styled-components";
const CallAlarm = ({ data }) => {
  const [timeOver, setTimeOver] = useState(true);
  // setTimeout(() => {
  //   setTimeOver(false);
  // }, 10000);
  return (
    <CallAlarmContainer
      timeOver={timeOver}
      onClick={() => {
        setTimeOver(!timeOver);
      }}
    >
      <div className="onAlarm">
        <div></div>
      </div>
      <div className="CallAlarmBox">
        <div className="tableNum">{`${data.tableNum}번`}</div>
        <div className="callTime">{data.calltime}</div>
      </div>
    </CallAlarmContainer>
  );
};
const CallAlarmContainer = styled.div`
  cursor: pointer;
  .onAlarm {
    display: flex;
    width: 130px;
    justify-content: end;
    position: relative;
    top: 15px;
    margin-left: 10px;
    > :first-child {
      background-color: ${({ timeOver }) =>
        timeOver ? "rgb(255, 107, 0)" : "none"};
      border-radius: 50%;
      width: 25px;
      height: 25px;
    }
  }
  .CallAlarmBox {
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
      font-weight: 700;
    }
    .callTime {
      margin-left: 50px;
    }

    @media screen and (max-width: 700px) {
      margin-right: 15px;
      .tableNum {
        font-size: 2rem;
      }
      .callTime {
        margin-left: 35px;
        font-size: 14px;
      }
    }
  }
`;
export default CallAlarm;
