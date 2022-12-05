import styled from 'styled-components';

export const SetMenuLayout = styled.div`
   width: calc(100% - 250px);
   min-height: calc(100vh - 50px);
   margin-left: 250px;
   background-color: #f6f6f6;
   padding: 30px 50px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   &.modalOpen {
      height: calc(100vh - 250px);
      overflow: hidden;
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      height: calc(100vh - 50px);
      margin-left: 0;
      padding: 0;
   }
`;
export const Head = styled.p`
   font-size: 20px;
   font-weight: 700;
   margin-bottom: 30px;
   @media screen and (max-width: 900px) {
      display: none;
   }
`;

export const MenuLayout = styled.div`
   position: relative;
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
   /* box-shadow: 0 2px 10px rgb(0 0 0 / 10%); */
`;
export const CategoryWrap = styled.ul`
   width: calc(100% - 120px);
   overflow-x: scroll;
   display: flex;
   height: 53px;
   &.editFalse {
      width: 100%;
   }
   &::-webkit-scrollbar {
      height: 10px;
      background: rgba(0, 0, 0, 0);
   }
   &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
   }
`;

export const MenuContainerWarp = styled.div`
   background-color: white;
   /* max-height: calc(100vh - 420px); */
   /* overflow-x: scroll; */
   padding: 30px;
   border-radius: 5px;
   margin-top: -10px;
   @media screen and (max-width: 900px) {
      box-sizing: border-box;
      min-height: calc(100vh - 187px);
      padding: 24px 15px 80px;
   }
`;
export const SettingHead = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-bottom: 26px;
`;
export const MenuListUl = styled.ul``;
export const NoMenu = styled.p`
   & span {
      font-size: 14px;
      color: #6d6d6d;
      text-align: center;
      display: block;
      margin-bottom: 12px;
   }
   @media screen and (max-width: 900px) {
      padding: 50px 0;
   }
   padding: 50px 40px;
`;

export const AddBtn = styled.button`
   display: flex;
   align-items: center;
   padding: 12px 30px;
   /* padding: 12px 40px 12px 38px; */
   cursor: pointer;
   border-radius: 10px;
   /* border: 2px solid #ff6c01; */
   background-color: #ff6c01;
   color: white;
   font-size: 15px;
   font-weight: 700;
   margin: 0 auto;
   &.noCategory {
      background-color: lightgray;
   }
   & img {
      width: 12px;
      height: 12px;
      margin-right: 5px;
      display: none;
   }
`;

export const ButtonWarp = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   @media screen and (max-width: 900px) {
      background-color: white;
      box-sizing: border-box;
      padding: 20px 15px;
      width: 100%;
      bottom: 80px;
      margin: 0;
      position: sticky;
      right: 0;
   }
`;
export const NonePlace = styled.div`
   width: 130px;
`;
export const SaveBtn = styled.button`
   display: flex;
   align-items: center;
   margin: 0;
   justify-content: center;
   width: 130px;
   /* padding: 12px 40px 12px 38px; */
   cursor: pointer;
   border-radius: 10px;
   /* border: 2px solid #ff6c01; */
   background-color: #687479;
   color: white;
   font-size: 15px;
   font-weight: 700;
   margin: 0;
`;
export const BtnWrap = styled.div`
   margin-left: auto;
   display: block;
   position: absolute;
   bottom: 46px;
   right: 80px;
   @media screen and (max-width: 900px) {
      background-color: white;
      box-sizing: border-box;
      padding: 20px 15px;
      width: 100%;
      bottom: 0;
      position: fixed;
      right: 0;
      transform: translate(0);
      display: flex;
   }
`;
export const WhiteBtn = styled.button`
   width: 120px;
   align-items: center;
   padding: 12px 0px;
   cursor: pointer;
   border-radius: 10px;
   border: 2px solid #ff6c01;
   background-color: white;
   font-size: 15px;
   font-weight: 700;
   margin-right: 10px;
   filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
   @media screen and (max-width: 900px) {
      width: 50%;
   }
`;
export const OrangeBtn = styled.button`
   filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
   width: 120px;
   display: block;
   margin: 0 auto;
   height: 47px;
   align-items: center;
   padding: 12px 0px;
   border: 2px solid #ff6c01;
   cursor: pointer;
   color: white;
   border-radius: 10px;
   border: none;
   background-color: #ff6c01;
   font-size: 15px;
   font-weight: 700;
   @media screen and (max-width: 900px) {
      width: 50%;
   }
`;
export const CategoryAddBtn = styled.button`
   cursor: pointer;
   border: none;
   background-color: transparent;
   /* text-decoration: underline; */
   position: absolute;
   top: 14px;
   right: 5px;
   /* top: 30px; */
   /* right: 30px; */
   display: flex;
   align-items: center;
   font-size: 14px;
   font-weight: 900;
   &:hover {
      color: #ff6c01;
   }
   & img {
      margin-right: 8px;
   }
`;
