import styled from 'styled-components';
import InfoTable from './InfoTable';
import InfoUpdateInput from './InfoUpdateInput';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PreviewModal from '../../Preview/PreviewModal';

const StoreInfo = ({ setIsEmptyValue }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const [userInfo, setUserInfo] = useState({
      about: null,
      address: null,
      businessHours: null,
      businessName: null,
      businessNumber: null,
      contactNumber: null
   });
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);

   useEffect(() => {
      axios.get(`${API_BASE_URL}/member/${sessionStorage.getItem('userId')}`).then(res => {
         setUserInfo(res.data.data);
      });
   }, []);

   const viewPreview = useSelector(state => state.previewToggleReducer);
   return (
      <>
         <MainContants>
            {viewPreview ? <PreviewModal /> : null}
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
      </>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;

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
      height: 100%;
      max-height: 500px;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
   }
   > :first-child {
      //title
      width: 100%;
      margin-bottom: 30px;
      h1 {
         font-size: 20px;
         font-weight: bold;
      }
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
         max-height: 100vh;
      }
      .storeInfoContainer {
         margin-top: 30px;
         margin-left: 0;
         padding: 0 15px 0 15px;
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
