import styled from 'styled-components';

export const Btn = styled.button`
   align-self: center;
   max-width: 120px;
   height: 45px;
   background: #fff;
   border: 2px solid #ff6c01;
   border-radius: 10px;
   padding: 12px 35px;
   font-size: 16px;
   font-weight: 900;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 20px auto 0 auto;

   &:hover {
      color: #ff6c01;
   }

   @media screen and (max-width: 900px) {
      max-width: 80%;
      background: ${props => (props.allChecked ? 'black' : '#bababa')};
      text-shadow: none;
      border: none;
      color: #fff;
      border-radius: 10px;
      width: 100%;
      margin: none;
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      height: 50px;
   }
`;

export const BtnDefault = styled.button`
   width: 120px;
   height: 45px;
   background: #fff;
   padding: 12px;
   border: 2px solid #ff6c01;
   border-radius: 10px;
   margin: 8px 0 0;
   font-size: 14px;
   font-weight: 600;
   @media screen and (max-width: 900px) {
      display: none;
   }
`;
export const BtnDefaultMobile = styled(BtnDefault)`
   display: none;
   @media screen and (max-width: 900px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      border-radius: 0 5px 5px 0;
      background: #ff6c01;
   }
`;
export const RealUpload = styled.div`
   display: none;
`;
export const ImgReg = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const Upload = styled.div`
   width: 100px;
   height: 100px;
   background: url('images/imgReg.png') no-repeat center;
`;
export const ImagePreview = styled.div`
   list-style: none;
   padding: 0;
   margin: 0;
   width: 100px;
   height: 100px;
   display: flex;
   gap: 20px;
   li {
      display: none;
      &:first-child {
         display: block;
      }
      img {
         max-height: 100%;
         margin: 0 auto;
      }
   }
`;
