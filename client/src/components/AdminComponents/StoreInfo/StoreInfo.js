import React from 'react';
import styled from 'styled-components';
// import Input from '../../Input';
// import ButtonWrap from '../../Menu/ButtonWrap';

const StoreInfo = () => {
   const dummyData = {
      data: {
         id: 0,
         name: '(주)치킨빠스 서울점',
         address: '서울시 서울구 서울동 서울빌딩 서울길 123-45 678호',
         number: '010-1234-5678',
         businessNum: '12345351-135314',
         businessTime: ['월~토 12:00 ~ 23:00', '일 12:00 ~ 23:00'],
         description:
            '매일 깨끗하고 신선한재료로 맛있는 퓨전요리와 경양식. 고급원두를 사용한 다양한 커피 분위기좋고 경치좋고 맛있기까지하는 맛나요 가게로 놀러오세요~^^',
      },
   };
   return (
      <MainContants>
         <div className="title">
            <h1>가게정보</h1>
         </div>
         <main className="mainContant">
            <div className="storeImg">
               <img src="https://ifh.cc/g/4v3A2t.png" alt=""></img>
            </div>
            <div className="storeInfoContainer">
               <div>{dummyData.data.name}</div>
               <hbody className="sotrinfo">
                  <tr>
                     <th>주소</th>
                     <td>{dummyData.data.address}</td>
                  </tr>
                  <tr>
                     <th>연락처</th>
                     <td>{dummyData.data.number}</td>
                  </tr>
                  <tr>
                     <th>사업자 번호</th>
                     <td>{dummyData.data.businessNum}</td>
                  </tr>
                  <tr>
                     <th>영업시간</th>
                     <div className="sotreTimes">
                        {dummyData.data.businessTime.map(data => {
                           return <td className="sotreTime">{data}</td>;
                        })}
                     </div>
                  </tr>
                  <tr>
                     <th>가게설명</th>
                     <td>{dummyData.data.description}</td>
                  </tr>
               </hbody>
            </div>
         </main>
      </MainContants>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin-top: 50px;
   .sotreTimes {
      display: flex;
      flex-direction: column;
   }
   .sotreTime {
      margin-bottom: 5px;
   }
   .mainContant {
      display: flex;
      box-sizing: border-box;
      width: 90%;
      height: 400px;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
      overflow: hidden;
   }
   > :first-child {
      //title
      width: 90%;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 50px;
   }

   .storeImg {
      > Img {
         width: 100px;
         height: 100px;
      }
   }
   .storeInfoContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 90%;
      margin-left: 30px;
      overflow-y: scroll;

      th {
         height: 50px;
         max-height: 50px;
         text-align: left;
         font-weight: bold;
         width: 130px;
      }
      > :first-child {
         //storeName
         font-size: 1.5rem;
         font-weight: bold;
         margin-bottom: 20px;
      }
   }
   @media screen and (max-width: 1100px) {
      .mainContant {
         flex-direction: column;
         height: 500px;
      }
      .storeInfoContainer {
         margin-top: 30px;
         margin-left: 0;
      }
   }
   @media screen and (max-width: 700px) {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      margin-top: 0;
      .title {
         display: none;
      }
      .mainContant {
         justify-content: center;
         align-items: center;
         flex-direction: column;
         padding: 0;
         width: 100%;
         box-shadow: 0 0 0 0;
      }
      .storeInfoContainer {
         margin-top: 30px;
         margin-left: 0;
         > :first-child {
            text-align: center;
            margin-bottom: 50px;
         }
      }
      .storeImg {
         margin-top: 30px;
      }
   }
`;
export default StoreInfo;
