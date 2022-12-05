import { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
const CallAlarm = ({ data }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const callAlarmList = useSelector(state => state.adminReducer.alarmData.callAlarmReverse);
   const [callCheck, setCallCheck] = useState(true);
   const handelClickCallCheck = () => {
      setCallCheck(!callCheck);
      if (callCheck) {
         setTimeout(() => {
            fetch(`${API_BASE_URL}/call/${sessionStorage.getItem('userId')}/${data.tableNumber}`, {
               method: 'DELETE',
               headers: { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('Authorization') }
            }).then(() => {
               sessionStorage.setItem('call', callAlarmList.length);
            });
         }, 5000);
      }
   };

   return (
      <CallAlarmContainer callCheck={callCheck} onClick={handelClickCallCheck}>
         <div className="onAlarm">
            <div></div>
         </div>
         <div className="CallAlarmBox">
            <div className="tableNum">{`${data.tableNumber}번`}</div>
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
      margin-left: -10px;
      > :first-child {
         background-color: ${({ callCheck }) => (callCheck ? 'rgb(255, 107, 0)' : 'none')};
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
      margin-right: 30px;
      background-color: ${({ callCheck }) => (callCheck ? 'rgb(18, 13, 45)' : 'rgb(167,167,167)')};
      width: 110px;
      height: 110px;
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
