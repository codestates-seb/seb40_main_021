import styled from 'styled-components';

export const List = styled.li`
   list-style: none;
   width: 100%;
   margin-bottom: 30px;
   color: black;
   @media screen and (max-width: 700px) {
   }
`;
export const ListLi = styled.div`
   width: 100%;
   display: flex;
   margin-bottom: 17px;
   @media screen and (max-width: 700px) {
      display: block;
   }
`;
export const InputWrap = styled.div`
   width: calc(100% - 133px);
   @media screen and (max-width: 700px) {
      width: 100%;
   }
`;
export const InputList = styled.div`
   display: flex;
   width: 100%;
   margin-bottom: 16px;
   &:first-child div:last-child {
      margin-left: 36px;
   }
   @media screen and (max-width: 700px) {
      display: block;
      &:first-child div:last-child {
         margin-left: 0;
      }
   }
`;
export const InputListWrap = styled.div`
   width: 100%;

   & p {
      font-size: 14px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
   }
   & p.menuListItem {
      font-size: 25px;
      margin-top: 12px;
      @media screen and (max-width: 700px) {
         font-size: 18px;
         font-weight: 700;
      }
   }
   & p.menuListPrice {
      font-size: 20px;
      margin-top: 12px;
      @media screen and (max-width: 700px) {
         font-size: 15px;
      }
   }
   & p.menuListAbout {
      font-size: 15px;
      margin-top: 10px;
   }
   & p span {
      font-size: 13px;
      color: #ff6b00;
      margin-left: 8px;
   }
   @media screen and (max-width: 700px) {
      margin-bottom: 12px;
   }
`;
export const CheckboxWrap = styled.div`
   display: flex;
   align-items: center;
`;
export const Checkbox = styled.input`
   width: 12px;
   height: 12px;
   cursor: pointer;
`;
export const LabelBox = styled.label`
   font-size: 13px;
   margin-left: 5px;
   cursor: pointer;
   &.list {
      cursor: default;
   }
   & span {
      font-size: 10px;
      color: #787878;
      @media screen and (max-width: 700px) {
         display: block;
      }
   }
`;
export const BottomListWarp = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 12px;
   border-bottom: 1px solid #b8b8b8;
`;
export const DeleteBtnWarp = styled.button`
   cursor: pointer;
   text-decoration: underline;
   font-size: 14px;
   border: none;
   background-color: transparent;
`;
