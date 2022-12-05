import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Callalram from './CallAlarm';

const CallAlarms = () => {
   const callAlarmList = useSelector(state => state.adminReducer.alarmData.callAlarmReverse);
   sessionStorage.setItem('call', callAlarmList.length);
   return (
      <CallAlarmContainer>
         <div className="subTitle">
            <p>호출 알람</p>
            <div id="icon">
               <img width="50px" height="50px" src={require('../../../assets/callAlarmIcon.png')} alt=""></img>
            </div>
         </div>

         <div className="callAlarms">
            {callAlarmList.length === 0 ? (
               <div className="callEmpty">호출 목록이 없습니다</div>
            ) : (
               callAlarmList.map(call => {
                  return <Callalram key={call.callId} data={call}></Callalram>;
               })
            )}
         </div>
      </CallAlarmContainer>
   );
};
const CallAlarmContainer = styled.div`
   display: flex;
   width: 100%;
   height: auto;
   margin-bottom: 50px;
   .callEmpty {
      color: rgb(255, 107, 0);
      font-size: 18px;
      font-weight: 900;
   }
   .callAlarms {
      height: 100%;
      width: 100%;
      display: flex;
      overflow-x: scroll;
      align-items: center;
      &::-webkit-scrollbar {
         width: 10px;
         background: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
         background: rgba(0, 0, 0, 0.3);
         border-radius: 30px;
      }
   }

   .subTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: max-content;
      margin-right: 50px;
      font-size: 20px;
      font-weight: bold;
      p {
         width: max-content;
         margin-bottom: 10px;
      }
      #icon {
         width: max-content;
         display: inline-block;
      }
      @media screen and (max-width: 700px) {
         margin-right: 30px;
         p {
            margin-bottom: 0px;
         }
         #icon {
            display: none;
            justify-content: start;
            flex-direction: row;
         }
      }
   }
   @media screen and (max-width: 700px) {
      display: inline-block;
   }
`;

export default CallAlarms;
