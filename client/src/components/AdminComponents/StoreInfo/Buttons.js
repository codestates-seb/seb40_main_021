import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { storeInfoUpdate } from '../../../redux/action/action';
const ButtonWrap = ({ bottom, isEmptyValue }) => {
   const dispatch = useDispatch();
   const url = useSelector(state => state.adminReducer.apiUrl);
   const UpdateState = useSelector(state => state.adminReducer.storeInfoUpdateState);
   const storeInfoData = useSelector(state => state.adminReducer.storeInfoData);
   console.log(isEmptyValue);
   const handleClickInfoUpdate = () => {
      if (!UpdateState) dispatch(storeInfoUpdate());
      if (UpdateState && isEmptyValue) {
         alert('전송');
         dispatch(storeInfoUpdate());
         const body = {
            businessName: storeInfoData.businessName,
            businessNumber: storeInfoData.businessNum,
            contactNumber: storeInfoData.number,
            about: storeInfoData.description
         };
         fetch(`${url}/member/${sessionStorage.getItem('userId')}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         })
            .then(res => {
               console.log(res);
            })
            .catch(err => console.log(err));
      } else if (UpdateState && !isEmptyValue) {
         alert('모든 칸을 채워주세요');
      }
   };
   return (
      <BtnWrap bottom={bottom}>
         <WhiteBtn>미리보기</WhiteBtn>
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
   @media screen and (max-width: 700px) {
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
   @media screen and (max-width: 700px) {
      display: none;
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
   @media screen and (max-width: 700px) {
      width: 100%;
   }
`;
