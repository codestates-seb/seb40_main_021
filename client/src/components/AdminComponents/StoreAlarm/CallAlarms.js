import React from 'react';
import styled from 'styled-components';
import Callalram from './CallAlarm';

const CallAlarms = () => {
   const dummyData = {
      data: [
         { id: 0, tableNum: 7, calltime: '17:15' },
         { id: 1, tableNum: 3, calltime: '17:11' },
         { id: 2, tableNum: 5, calltime: '17:08' },
         { id: 3, tableNum: 10, calltime: '16:55' },
         { id: 4, tableNum: 1, calltime: '16:50' },
         { id: 5, tableNum: 1, calltime: '16:50' },
         { id: 6, tableNum: 1, calltime: '16:50' },
         { id: 7, tableNum: 1, calltime: '16:50' },
      ],
   };
   return (
      <CallAlarmContainer>
         <div className="subTitle">
            <label>호출알람</label>
            <div id="icon">
               <img width="50px" height="50px" src={require('../../../assets/callAlarmIcon.png')} alt=""></img>
            </div>
         </div>

         <div className="callAlarms">
            {dummyData.data.map(call => {
               return <Callalram key={call.id} data={call}></Callalram>;
            })}
         </div>
      </CallAlarmContainer>
   );
};
const CallAlarmContainer = styled.div`
   display: flex;
   width: 90%;
   margin-top: 10px;
   margin-bottom: 30px;
   .callAlarms {
      margin-bottom: 50px;
      width: 100%;
      display: flex;
      overflow-y: scroll;
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
      label {
         width: max-content;
         margin-bottom: 10px;
      }
      #icon {
         width: max-content;
         display: inline-block;
      }
      @media screen and (max-width: 700px) {
         margin-right: 30px;
         label {
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
