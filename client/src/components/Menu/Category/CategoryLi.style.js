import styled from 'styled-components';

export const CategoryLiSTyle = styled.li`
   cursor: ${p => (p.active ? 'defult' : 'pointer')};
   padding: 13px 16px;
   background-color: ${p => (p.active ? 'white' : '#FF6B00')};
   display: flex;
   color: ${p => (p.active ? 'black' : 'white')};
   font-size: 16px;
   font-weight: 500;
   text-align: center;
   align-items: center;
   border-radius: 10px 10px 0 0;
   justify-content: space-between;
   @media screen and (max-width: 900px) {
      font-size: 14px;
   }
`;
export const CategorySettingWarp = styled.div`
   display: flex;
   white-space: nowrap;
   align-items: center;
   & input {
      padding: 7px 10px !important;
      width: 100px;
      border: none;
      background: rgb(244, 244, 244);
      border-radius: 5px;
   }
   & input:focus {
      outline: none;
   }
   & input:disabled {
      background-color: transparent;
      border: none;
      color: black;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      padding: 0;
      width: 100px;
      display: inline-block;
      @media screen and (max-width: 700px) {
         font-size: 14px;
      }
   }
   & input.edit {
      text-align: center;
   }
   & button {
      border: none;
      padding: 0;
      background-color: transparent;
      margin-left: 6px;
      margin-right: 20px;
      cursor: pointer;
   }
   & .add {
      margin-right: 8px;
      color: white;
      background-color: transparent;
      border: 1px solid white;
      &::placeholder {
         color: #ffebdd;
         opacity: 0.5;
      }
   }
   img {
      width: 16px;
   }
`;
export const DeleteBtn = styled.button`
   cursor: pointer;
   background-color: transparent;
   border: none;
   padding: 0;
   &.add {
      color: white;
      white-space: nowrap;
   }
`;
