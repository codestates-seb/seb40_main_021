import styled from 'styled-components';
import InfoTable from './InfoTable';
import InfoUpdateInput from './InfoUpdateInput';
import { useSelector } from 'react-redux';
import Buttons from '../../../components/AdminComponents/StoreInfo/Buttons';

const StoreInfo = () => {
   const dummyData = {
      data: {
         id: 0,
         name: '(주)치킨빠스 서울점',
         address: '서울시 서울구 서울동 서울빌딩 서울길 123-45 678호',
         number: '010-1234-5678',
         businessNum: '12345351-135314',
         businessTime: '월~토 12:00 ~ 23:00 일 12:00 ~ 23:00',
         description:
            '매일 깨끗하고 신선한재료로 맛있는 퓨전요리와 경양식. 고급원두를 사용한 다양한 커피 분위기좋고 경치좋고 맛있기까지하는 맛나요 가게로 놀러오세요~^^'
      }
   };
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);
   console.log(UpdateState);
   return (
      <MainContants>
         <h1 className="title">가게정보</h1>
         <main className="mainContant">
            <div className="storeImg">
               <img src="https://ifh.cc/g/4v3A2t.png" alt=""></img>
            </div>
            <div className="storeInfoContainer">
               <div>{dummyData.data.name}</div>
               {UpdateState ? <InfoUpdateInput /> : <InfoTable />}
            </div>
         </main>
         <Buttons />
      </MainContants>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   padding: 30px 50px;
   .table {
      border-collapse: separate;
      border-spacing: 0 15px;
   }
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
      width: 100%;
      height: auto;
      /* max-height: 500px; */
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
      border-radius: 5px;
   }
   .title {
      width: auto;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
      align-self: flex-start;
   }

   .storeImg {
      > Img {
         width: 100px;
         height: 100px;
         border-radius: 3px;
      }
   }
   .storeInfoContainer {
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;
      margin-left: 30px;
      font-size: 14px;
      /* overflow-y: scroll; */

      table {
         border-spacing: 0;
      }
      th {
         height: 35px;
         text-align: left;
         font-weight: bold;
         width: 130px;
      }
      td {
         line-height: 22px;
         word-break: keep-all;
      }
      > :first-child {
         //storeName
         font-size: 16px;
         font-weight: bold;
         margin-bottom: 25px;
      }
   }
   @media screen and (max-width: 1100px) {
      .mainContant {
         flex-direction: column;
      }
      .storeInfoContainer {
         margin-top: 30px;
         margin-left: 0;
      }
   }
   @media screen and (max-width: 700px) {
      display: flex;
      align-items: center;
      min-height: calc(100vh - 50px);
      width: 100%;
      margin-top: 0;
      padding: 30px;
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
            margin-bottom: 25px;
         }
      }
      .storeImg {
         margin-top: 30px;
      }
   }
`;
export default StoreInfo;
