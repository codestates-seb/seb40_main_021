import styled from 'styled-components';
import InfoTable from './InfoTable';
import InfoUpdateInput from './InfoUpdateInput';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { storeInfoUpdate } from '../../../redux/action/action';
import Buttons from '../../../components/AdminComponents/StoreInfo/Buttons';

const StoreInfo = () => {
   const dispatch = useDispatch();

   const [address, setAddress] = useState('서울시 서울구 서울동 서울빌딩 서울길 123-45 678호');
   const [number, setNumber] = useState('010-1234-5678');
   const [businessNum, setBusinessNum] = useState('12345351-135314');
   const [businessTime, setBusinessTime] = useState('월~토 12:00 ~ 23:00 일 12:00 ~ 23:00');
   const [description, setDescription] = useState(
      '매일 깨끗하고 신선한재료로 맛있는 퓨전요리와 경양식. 고급원두를 사용한 다양한 커피 분위기좋고 경치좋고 맛있기까지하는 맛나요 가게로 놀러오세요~^^'
   );

   const dummyData = {
      data: {
         id: 0,
         name: '(주)치킨빠스 서울점',
         address: address,
         number: number,
         businessNum: businessNum,
         businessTime: businessTime,
         description: description
      }
   };
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);

   const handleValid = () => {
      if (address === '' || number === '' || businessNum === '' || businessTime === '' || description === '') {
         return false;
      }
      dispatch(storeInfoUpdate());
   };

   return (
      <>
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
                  {UpdateState ? (
                     <InfoUpdateInput
                        data={dummyData.data}
                        setAddress={setAddress}
                        setNumber={setNumber}
                        setBusinessNum={setBusinessNum}
                        setBusinessTime={setBusinessTime}
                        setDescription={setDescription}
                        address={address}
                        number={number}
                        businessNum={businessNum}
                        businessTime={businessTime}
                        description={description}
                     />
                  ) : (
                     <InfoTable />
                  )}
               </div>
            </main>
         </MainContants>
         <Buttons handleValid={handleValid} />
      </>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin-top: 50px;
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
      width: 90%;
      height: 100%;
      max-height: 500px;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
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
      width: 100%;
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
