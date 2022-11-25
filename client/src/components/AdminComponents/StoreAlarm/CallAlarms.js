import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInterval from '../../../util/useInterval';
import Callalram from './CallAlarm';

const CallAlarms = () => {
   const url = useSelector(state => state.adminReducer.apiUrl);
   const [callList, setCallList] = useState([]);
   useInterval(() => {
      axios.get(`${url}/call/${sessionStorage.getItem('userId')}`).then(res => {
         const reverse = res.data.data
            .slice(0)
            .reverse()
            .map(num => num);

         setCallList(reverse);
      });
   }, 3000);
   return (
      <CallAlarmContainer>
         <div className="subTitle">
            <p>호출알람</p>
            <div id="icon">
               <img width="50px" height="50px" src={require('../../../assets/callAlarmIcon.png')} alt=""></img>
            </div>
         </div>

         <div className="callAlarms">
            {callList.length === 0 ? (
               <div className="callEmpty">호출 목록이 없습니다</div>
            ) : (
               callList.map(call => {
                  return <Callalram key={call.callId} data={call}></Callalram>;
               })
            )}
         </div>
      </CallAlarmContainer>
   );
};
const CallAlarmContainer = styled.div`
   display: flex;

   width: 90%;
   margin-top: 10px;
   margin-bottom: 30px;
   .callEmpty {
      font-size: 24px;
   }
   .callAlarms {
      height: 100%;
      margin-bottom: 50px;
      width: 100%;
      display: flex;
      overflow-y: scroll;
      align-items: center;
   }
   .subTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: max-content;
      margin-left: 20px;
      margin-right: 50px;
      font-size: 24px;
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
