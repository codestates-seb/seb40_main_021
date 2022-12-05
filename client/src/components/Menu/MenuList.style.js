import styled from 'styled-components';

export const List = styled.li`
   list-style: none;
   width: 100%;
   margin-bottom: 30px;
   color: black;
   padding: 0 25px;
   border-bottom: 1px solid #b8b8b8;
   @media screen and (max-width: 900px) {
      padding: 0;
   }
`;
export const ListLi = styled.div`
   width: 100%;
   display: flex;
   margin-bottom: 17px;
   @media screen and (max-width: 900px) {
      display: block;
   }
`;
export const InputWrap = styled.div`
   width: calc(100% - 133px);
   @media screen and (max-width: 900px) {
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
   @media screen and (max-width: 900px) {
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
      font-weight: 700;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
   }
   & p.menuListItem {
      font-size: 25px;
      margin-top: 12px;
      @media screen and (max-width: 900px) {
         font-size: 18px;
         font-weight: 700;
      }
   }
   & p.menuListPrice {
      font-size: 20px;
      margin-top: 12px;
      @media screen and (max-width: 900px) {
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
      font-weight: 400;
   }
   @media screen and (max-width: 900px) {
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
   font-size: 14px;
   margin-left: 5px;
   font-weight: 700;
   cursor: pointer;
   &.list {
      cursor: default;
   }
   & span {
      font-size: 12px;
      color: #787878;
      margin-left: 10px;
      @media screen and (max-width: 900px) {
         display: block;
         margin: 0;
         margin-top: 6px;
      }
   }
   @media screen and (max-width: 900px) {
      margin-left: 8px;
   }
`;
export const BottomListWarp = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 15px;
   /* border-bottom: 1px solid #b8b8b8; */
`;
export const DeleteBtnWarp = styled.button`
   cursor: pointer;
   /* text-decoration: underline; */
   font-size: 14px;
   font-weight: 900;
   border: none;
   background-color: transparent;
   &:hover {
      color: #ff6c01;
   }
`;
