import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { previewToggleState } from '../../redux/action/action';
import { WhiteBtn } from '../AdminComponents/StoreInfo/Buttons';

const BtnWrap = styled.div`
   align-self: flex-end;
   margin: 20px 10px 0 0;
   /* margin-left: auto;
   display: block;
   position: absolute;
   bottom: -68px;
   right: 0px; */
   @media screen and (max-width: 700px) {
      background-color: white;
      box-sizing: border-box;
      padding: 20px 15px;
      width: 100%;
      bottom: 0px;
      margin: 0;
      position: fixed;
      right: 0;
      transform: translate(0);
      display: flex;
   }
`;
// const WhiteBtn = styled.button`
//    width: 120px;
//    align-items: center;
//    padding: 12px 0px;
//    cursor: pointer;
//    border-radius: 10px;
//    /* border: 2px solid #ff6c01; */
//    background-color: #687479;
//    color: white;
//    font-size: 15px;
//    font-weight: 700;
//    margin-right: 10px;
//    /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1)); */
//    box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
//    &:hover {
//       background-color: #313e46;
//    }
//    @media screen and (max-width: 700px) {
//       width: 50%;
//    }
// `;
// const OrangeBtn = styled.button`
//    /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1)); */
//    box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
//    width: 120px;
//    height: 47px;
//    align-items: center;
//    padding: 12px 0px;
//    border: 2px solid #ff6c01;
//    cursor: pointer;
//    color: white;
//    border-radius: 10px;
//    border: none;
//    background-color: #687479;
//    font-size: 15px;
//    font-weight: 700;
//    &:hover {
//       background-color: #313e46;
//    }
//    @media screen and (max-width: 700px) {
//       width: 50%;
//    }
// `;
const ButtonWrap = ({ name, save }) => {
   const dispatch = useDispatch();
   const categoryList = useSelector(store => store.categoryUserItemReducer.data);
   const viewPreview = useSelector(state => state.previewToggleReducer);
   const PreviewFunc = () => {
      categoryList.length === 0 ? alert('카테고리를 1개이상 등록해주세요') : dispatch(previewToggleState(!viewPreview));
   };
   return (
      <BtnWrap>
         <WhiteBtn onClick={PreviewFunc}>미리보기</WhiteBtn>
         <WhiteBtn onClick={save}>{name}</WhiteBtn>
         {/* <WhiteBtn>미리보기</WhiteBtn> */}
         {/* <OrangeBtn onClick={save}>{name}</OrangeBtn> */}
      </BtnWrap>
   );
};

export default ButtonWrap;
