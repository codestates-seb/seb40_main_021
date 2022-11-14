import React from "react";
import styled from "styled-components";
import Callalram from "./CallAlarm";

const CallAlarms = () => {
  const dummyData = {
    data: [
      { id: 0, tableNum: 7, calltime: "17:15" },
      { id: 1, tableNum: 3, calltime: "17:11" },
      { id: 2, tableNum: 5, calltime: "17:08" },
    ],
  };
  return (
    <CallAlarmContainer>
      <div id="icon">
        <div className="label">
          <label>호출알람</label>
        </div>
        <img
          width="50px"
          height="50px"
          src={require("../../../assets/callAlarmIcon.png")}
          alt=""
        ></img>
      </div>
      <div className="callAlarmsBox">
        {dummyData.data.map((call) => {
          return <Callalram key={call.id} data={call}></Callalram>;
        })}
      </div>
    </CallAlarmContainer>
  );
};

const CallAlarmContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  #icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 50px;
    .label {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .callAlarmsBox {
    display: flex;
  }
`;

export default CallAlarms;
