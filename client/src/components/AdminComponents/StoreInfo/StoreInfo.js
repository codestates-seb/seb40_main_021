import styled from 'styled-components';
import InfoTable from './InfoTable';
import InfoUpdateInput from './InfoUpdateInput';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Buttons from '../../../components/AdminComponents/StoreInfo/Buttons';
import axios from 'axios';

const StoreInfo = () => {
   const url = useSelector(state => state.adminReducer.apiUrl);
   const [userInfo, setUserInfo] = useState({
      about: null,
      address: null,
      businessHours: null,
      businessName: null,
      businessNumber: null,
      contactNumber: null
   });
   const [isEmptyValue, setIsEmptyValue] = useState(true);
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);

   useEffect(() => {
      axios.get(`${url}/member/${sessionStorage.getItem('userId')}`).then(res => {
         setUserInfo(res.data.data);
      });
   }, []);

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
                  <div>{userInfo.businessName}</div>
                  {UpdateState ? (
                     <InfoUpdateInput data={userInfo} setIsEmptyValue={setIsEmptyValue} />
                  ) : (
                     <InfoTable data={userInfo} />
                  )}
               </div>
            </main>
         </MainContants>
         <Buttons isEmptyValue={isEmptyValue} />
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
