import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { previewToggleState, storeInfoUpdate } from '../../../redux/action/action';
import axios from 'axios';
import { useEffect } from 'react';
const ButtonWrap = ({ bottom, isEmptyValue, setUserInfo }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);
   const storeInfoData = useSelector(state => state.adminReducer.storeInfoData);
   useEffect(() => {
      dispatch(storeInfoUpdate(false));
      axios.get(`${API_BASE_URL}/member/${sessionStorage.getItem('userId')}`).then(res => {
         setUserInfo(res.data.data);
      });
   }, []);
   const handleClickInfoUpdate = () => {
      if (!UpdateState) dispatch(storeInfoUpdate(true));
      if (UpdateState && isEmptyValue) {
         alert('수정이 완료되었습니다.');
         dispatch(storeInfoUpdate(false));
         const body = {
            businessName: storeInfoData.businessName,
            address: storeInfoData.address,
            businessNumber: storeInfoData.businessNum,
            contactNumber: storeInfoData.number,
            businessHours: storeInfoData.businessHours,
            about: storeInfoData.description,
            userImage: storeInfoData.userImage
         };
         fetch(`${API_BASE_URL}/member/${sessionStorage.getItem('userId')}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('Authorization') },
            body: JSON.stringify(body)
         })
            .then(() => {
               axios.get(`${API_BASE_URL}/member/${sessionStorage.getItem('userId')}`).then(res => {
                  setUserInfo(res.data.data);
               });
            })
            .catch(err => err);
      } else if (UpdateState && !isEmptyValue) {
         alert('모든 칸을 채워주세요');
      }
   };

   const viewPreview = useSelector(state => state.previewToggleReducer);
   const PreviewFunc = () => {
      dispatch(previewToggleState(!viewPreview));
   };
   return (
      <BtnWrap bottom={bottom}>
         <WhiteBtn onClick={PreviewFunc}>미리보기</WhiteBtn>
         <OrangeBtn onClick={handleClickInfoUpdate}>{UpdateState ? '확인' : '가게정보 수정'}</OrangeBtn>
      </BtnWrap>
   );
};

export default ButtonWrap;
const BtnWrap = styled.div`
   display: flex;
   width: 100%;
   justify-content: end;
   margin: 20px 10px 0 0;

   @media screen and (max-width: 900px) {
      background-color: white;
      margin: 0;
      width: 100%;
   }
`;
export const WhiteBtn = styled.button`
   width: 120px;
   align-items: center;
   padding: 12px 0px;
   cursor: pointer;
   border-radius: 10px;
   /* border: 2px solid #ff6c01; */
   background-color: #687479;
   color: white;
   font-size: 15px;
   font-weight: 700;
   margin-right: 10px;
   box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
   &:hover {
      background-color: #313e46;
   }
   @media screen and (max-width: 900px) {
      width: 50%;
      /* display: none; */
   }
`;
const OrangeBtn = styled.button`
   width: 120px;
   height: 47px;
   align-items: center;
   padding: 12px 0px;

   /* border: 2px solid #ff6c01; */
   cursor: pointer;
   color: white;
   border-radius: 10px;
   border: none;
   background-color: #687479;
   font-size: 15px;
   font-weight: 700;
   box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
   &:hover {
      background-color: #313e46;
   }
   @media screen and (max-width: 900px) {
      width: 50%;
   }
`;
