import styled from 'styled-components';
import InfoTable from './InfoTable';
import InfoUpdateInput from './InfoUpdateInput';
import { useSelector } from 'react-redux';

import PreviewModal from '../../Preview/PreviewModal';

const StoreInfo = ({ setIsEmptyValue, userInfo }) => {
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);
   const viewPreview = useSelector(state => state.previewToggleReducer);
   return (
      <>
         <MainContants>
            {viewPreview ? <PreviewModal /> : null}
            <div className="title">
               <h1>가게정보</h1>
            </div>
            <main className="mainContant">
               {UpdateState ? null : (
                  <div className="storeImg">
                     {' '}
                     <img src={userInfo.userImage} alt=""></img>
                  </div>
               )}
               <div className="storeInfoContainer">
                  {UpdateState ? null : <div>{`가게 이름 : ${userInfo.businessName}`}</div>}
                  {UpdateState ? (
                     <InfoUpdateInput data={userInfo} setIsEmptyValue={setIsEmptyValue} />
                  ) : (
                     <InfoTable userInfo={userInfo} />
                  )}
               </div>
            </main>
         </MainContants>
      </>
   );
};
const MainContants = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   .storeDataUpdate {
      background-color: white;
   }
   .inputContainner {
      margin-bottom: 20px;
      > :first-child {
         font-size: 14px;
         margin-bottom: 5px;
      }
   }
   .table {
      font-size: 15px;
      border-collapse: separate;
      border-spacing: 0 15px;
   }
   .mainContant {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      min-height: 550px;
      height: 100%;
      background-color: white;
      box-shadow: 0 4px 2px 0px lightgray;
      padding: 50px;
   }
   .title {
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
         font-size: 18px;
         font-weight: bold;
         margin-bottom: 20px;
      }
   }

   @media screen and (max-width: 900px) {
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
            margin-bottom: 50px;
         }
      }
      .storeImg {
         margin-top: 30px;
      }
   }
`;
export default StoreInfo;
