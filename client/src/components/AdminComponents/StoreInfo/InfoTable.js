import React from 'react';

export const InfoTable = () => {
   const dummyData = {
      data: {
         id: 0,
         name: '(주)치킨빠스 서울점',
         address: '서울시 서울구 서울동 서울빌딩 서울길 123-45 678호',
         number: '010-1234-5678',
         businessNum: '12345351-135314',
         businessTime: '월~토 12:00 ~ 23:00 일 12:00 ~ 23:00',
         description:
            '매일 깨끗하고 신선한재료로 맛있는 퓨전요리와 경양식. 고급원두를 사용한 다양한 커피 분위기좋고 경치좋고 맛있기까지하는 맛나요 가게로 놀러오세요~^^',
      },
   };
   return (
      <div>
         <table className="table">
            <tbody>
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
                  <td className="sotreTimes">{dummyData.data.businessTime}</td>
               </tr>
               <tr>
                  <th>가게설명</th>
                  <td>{dummyData.data.description}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default InfoTable;
