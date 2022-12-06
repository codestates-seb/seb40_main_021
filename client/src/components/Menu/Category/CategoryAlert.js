import styled from 'styled-components';
import CloseIcon from './../../../assets/img/icon_close_white.png';

const CategoryAlertBody = styled.div`
   position: absolute;
   right: 150px;
   top: -13px;
   animation: alertAni 2s ease-in-out infinite;
   @keyframes alertAni {
      0% {
         right: 150px;
      }
      50% {
         right: 160px;
      }
      100% {
         right: 150px;
      }
   }
   @keyframes alertAniMob {
      0% {
         right: 130px;
      }
      50% {
         right: 140px;
      }
      100% {
         right: 130px;
      }
   }
   @media screen and (max-width: 900px) {
      animation: alertAniMob 2s ease-in-out infinite;
      right: 130px;
      font-size: 11px;
      top: 5px;
   }
`;
const Text = styled.p`
   background-color: #303e46;
   border-radius: 5px;
   color: white;
   box-sizing: border-box;
   padding: 20px;
   display: inline-block;
   font-size: 14px;
   position: relative;
   & span {
      font-weight: 700;
      margin-bottom: 5px;
      display: block;
   }
   @media screen and (max-width: 900px) {
      font-size: 12px;
      padding: 12px;
   }
`;
const ButtonDelete = styled.button`
   background-color: transparent;
   border: none;
   position: absolute;
   right: 15px;
   top: 15px;
   @media screen and (max-width: 900px) {
      top: 8px;
      right: 10px;
      transform: scale(0.8);
   }
`;
const Triangle = styled.div`
   width: 0px;
   height: 0px;
   border-bottom: calc(10px * 1.732) solid #303e46;
   border-left: 10px solid transparent;
   border-right: 10px solid transparent;
   position: absolute;
   top: 40%;
   right: -15px;
   transform: rotate(90deg);
   @media screen and (max-width: 900px) {
      border-bottom: calc(7px * 1.732) solid #303e46;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      position: absolute;
      top: 24%;
      right: -10px;
   }
`;
const CategoryAlert = ({ setIsalertFloat }) => {
   return (
      <>
         <CategoryAlertBody>
            <Text>
               <span>카테고리를 먼저 입력해주세요.</span>
               카테고리 입력 후 메뉴를 제작할 수 있습니다.
               <ButtonDelete onClick={() => setIsalertFloat(false)}>
                  <img src={CloseIcon} alt="delete" />
               </ButtonDelete>
               <Triangle></Triangle>
            </Text>
         </CategoryAlertBody>
      </>
   );
};

export default CategoryAlert;
