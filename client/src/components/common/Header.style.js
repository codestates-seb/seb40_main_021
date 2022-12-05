import styled from 'styled-components';

export const HeaderWrap = styled.header`
   position: fixed;
   z-index: 10;
   top: 0;
   left: 0;
   width: 100%;
   height: 50px;
   padding: 0 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: white;
   box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
   .logo img {
      height: 30px;
   }

   @media screen and (max-width: 900px) {
      /* justify-content: flex-start; */
      height: 50px;
      padding: 0 15px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      .logo {
         display: none;
      }
      .logo.main {
         display: block;
      }
   }
`;

// export const Inside = styled.div`
//    height: 70px;
//    padding: 0 80px;
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    @media screen and (max-width: 700px) {
//       height: 50px;
//       padding: 0 15px;
//    }
// `;
export const ButtonWrap = styled.div`
   display: flex;
`;
export const LogoImg = styled.img`
   width: auto;
   height: 50px;
   @media screen and (max-width: 900px) {
      display: block;
   }
`;
export const MainLogoImg = styled.img`
   width: auto;
   height: 50px;
   @media screen and (max-width: 900px) {
      display: block;
   }
`;
export const IconBtn = styled.button`
   display: none;
   cursor: pointer;
   padding: 0;
   border: none;
   background-color: transparent;
   position: relative;

   & span {
      font-size: 0;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      position: absolute;
      top: -0px;
      right: -2px;
      background-color: #ff5252;
   }
   @media screen and (max-width: 900px) {
      display: block;
   }
`;
export const PageName = styled.p`
   display: none;
   position: absolute;
   left: 50%;
   top: 50%;
   font-size: 16px;
   font-weight: 700;
   transform: translate(-50%, -50%);
   @media screen and (max-width: 900px) {
      display: block;
   }
`;
export const MListIcon = styled.img`
   width: 23px;
   height: 23px;
`;
export const Button = styled.button`
   display: flex;
   & a {
      height: 33px;
      border-radius: 20px;
      background-color: #ff6b00;
      color: white !important;
      padding: 6px 12px;
      cursor: pointer;
      border: none;
      font-size: 16px;
      transition: 0.3s;
      text-decoration: none;
      @media screen and (max-width: 900px) {
         font-size: 14px;
      }
   }
   padding: 0;
   background-color: transparent;
   border: none;
`;
export const LineBtn = styled.button`
   & a {
      height: 33px;
      border-radius: 20px;
      color: #ff6b00;
      padding: 6px 12px;
      cursor: pointer;
      background-color: white;
      border: none;
      margin-right: 24px;
      font-size: 16px;
      transition: 0.3s;
      text-decoration: none;
      @media screen and (max-width: 900px) {
         font-size: 14px;
      }
   }
   padding: 0;
   background-color: transparent;
   border: none;
`;
export const LineBtnUser = styled.button`
   & a {
      text-decoration: none;
      height: 33px;
      border-radius: 20px;
      padding: 6px 12px;
      cursor: pointer;
      background-color: white;
      border: none;
      margin-right: 10px;
      font-size: 14px;
      /* transition: 0.3s; */
      display: flex;
      align-items: center;
      color: black;
      font-weight: 700;
      @media screen and (max-width: 900px) {
         margin: 0;
         padding: 0;
      }
      & span {
         @media screen and (max-width: 900px) {
            /* display: none; */
         }
      }
   }
   padding: 0;
   background-color: transparent;
   border: none;

   & img {
      margin-right: 12px;
      border-radius: 100%;
      height: 38px;
      width: 38px;
      overflow: hidden;
      @media screen and (max-width: 900px) {
         margin: 0;
         height: 30px;
         width: 30px;
      }
   }
`;
export const LineBtnUserNoUnder = styled.div`
   & button {
      text-decoration: none;
      height: 33px;
      border-radius: 20px;
      padding: 6px 12px;
      cursor: pointer;
      background-color: white;
      border: none;
      font-size: 14px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      color: #ff6b00;
      font-weight: 700;
   }
   padding: 0;
   background-color: transparent;
   border: none;

   & img {
      margin-right: 8px;
      height: auto;
      width: 16px;
   }
   @media screen and (max-width: 900px) {
      display: none;
   }
`;
