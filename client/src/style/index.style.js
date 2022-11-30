import styled from 'styled-components';

export const HomeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   &::after {
      width: 100%;
      height: 100vh;
      background: #2c2c2c;
      content: '';
      position: absolute;
      top: 0;
      right: -50%;
      transform: skewX(150deg);
   }
   .bgImg {
      height: 480px;
      position: absolute;
      right: 35%;
      top: 100vh;
      z-index: 2;
      transform: translateY(-100%) rotateY(180deg);
      img {
         width: auto;
         height: 100%;
      }
   }
`;

const Section = styled.section`
   max-width: 1440px;
   min-width: 1440px;
   min-height: 100vh;
`;

export const Section_Style_1 = styled(Section)`
   padding-top: 50px;
   display: flex;
   justify-content: space-between;
   position: relative;
   background: transparent;
   z-index: 1;

   .left {
      max-width: 525px;
      height: fit-content;
      word-break: keep-all;
      margin-top: 40vh;
      transform: translateY(-50%);
      h1 {
         font-size: 40px;
         font-weight: 900;
         margin-bottom: 25px;
         position: relative;
         span {
            font-size: 20px;
            color: #646161;
         }
         &::before,
         ::after {
            content: '';
            width: 13px;
            height: 13px;
            position: absolute;
            top: -15px;
            left: 9px;
            background-color: #fea96c;
            border-radius: 50%;
         }
         &::after {
            left: 38px;
         }
      }
      p {
         font-size: 16px;
         font-weight: 600;
         line-height: 22px;
         margin-bottom: 25px;
      }
      button {
         padding: 10px;
         border: 2px solid #ff8e3a;
         border-radius: 5px;
         color: #ff6b00;
         font-size: 16px;
         font-weight: 600;
         transition: 0.2s;
         &:hover {
            color: #2c2c2c;
            border: 2px solid #2c2c2c;
         }
      }
   }

   .right {
      width: 525px;
      height: fit-content;
      align-self: center;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
         font-size: 30px;
         font-weight: 600;
         margin-bottom: 25px;
      }
      p {
         font-size: 16px;
      }
      .QR-imgBox {
         width: 130px;
         height: 130px;
         margin-bottom: 35px;
         img {
            width: 100%;
         }
      }
   }
`;

export const Section_Style_2 = styled.section`
   padding-top: 50px;
   width: 100%;
   /* min-height: calc(100vh - 50px); */
   min-height: 100vh;
   background: #2c2c2c;
   color: white;
   display: flex;
   justify-content: center;
   .inner-container {
      max-width: 1440px;
      min-width: 1440px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      h4 {
         font-size: 25px;
         font-weight: 600;
         margin: 100px 0 180px 0;
         /* margin-bottom: 100px; */
      }
      ul {
         width: 100%;
         /* margin-top: 100px; */
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         /* grid-column-gap: 100px; */
         li {
            padding: 0 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            word-break: keep-all;
            &:nth-child(2) {
               border-left: 1px solid white;
               border-right: 1px solid white;
            }
         }
         .imgBox {
            width: 60px;
            height: 60px;
            margin-bottom: 30px;
            img {
               width: 100%;
            }
         }
         h4 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 30px;
         }
         p {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 15px;
         }
      }
   }
`;

export const Section_Style_3 = styled.section`
   padding-top: 50px;
   width: 100%;
   min-height: 100vh;
   background: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   h4 {
      font-size: 25px;
      font-weight: 600;
      margin: 50px 0;
   }
   input {
      display: none;
   }
   #btn-admin:checked ~ .btn-wrapper .btn-admin {
      border-bottom: 3px solid #ff6b00;
      color: #ff6b00;
   }
   #btn-menu:checked ~ .btn-wrapper .btn-menu {
      border-bottom: 3px solid #ff6b00;
      color: #ff6b00;
   }
   #btn-admin:checked ~ .slide-wrapper {
      position: static;
      opacity: 1;
   }
   #btn-menu:checked ~ .usermenu-wrapper {
      display: block;
   }
   .btn-wrapper {
      position: relative;
      label {
         display: inline-block;
         font-size: 18px;
         font-weight: 600;
         padding: 10px 35px;
         border-bottom: 3px solid #282828;
         margin-bottom: 70px;
         cursor: pointer;
         transition: 0.3s;
      }
   }
   .usermenu-wrapper {
      display: none;
      width: 100%;
      height: 350px;
      img {
         margin: 0 auto;
         box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      }
   }
`;

export const FooterWrapper = styled.footer`
   width: 100%;
   background-color: #2c2c2c;
   color: white;
   .inner-container {
      max-width: 1440px;
      min-height: 300px;
      margin: 0 auto;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .logo-imgBox {
         font-size: 25px;
      }
      p {
         font-size: 16px;
         line-height: 20px;
         max-width: 50%;
         word-break: keep-all;
         margin-top: 8px;
      }
      .flex {
         display: flex;
         justify-content: space-between;
         color: #fea96c;
         a {
            color: #fea96c;
            text-decoration: underline;
            &:hover {
               color: white;
            }
         }
         ul {
            display: flex;
            li {
               font-size: 24px;
               margin: 0 20px;
            }
         }
      }
   }
`;

export const SliderWrapper = styled.section`
   position: absolute;
   top: -100vh;
   left: 0;
   opacity: 0;
   .container {
      padding: 0;
      width: 100%;
      max-width: 100vw;
   }
   div {
      transition: all 0.3s ease;
   }
   .slider {
      padding: 50px 0 100px 0;
      display: flex !important;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   img {
      width: 90%;
   }
   p {
      max-width: 400px;
      font-size: 16px;
      word-break: keep-all;
      text-align: center;
      line-height: 20px;
      bottom: 10px;
      z-index: 100;
      color: transparent;
      transition: 0.5s ease;
   }
   .slick-next:before,
   .slick-prev:before {
      color: #000;
   }
   .center .slick-center {
      color: #e67e22;
      opacity: 1;
      -ms-transform: scale(1.2);
      transform: scale(1.2);
      p {
         color: black;
      }
   }
   .slick-arrow {
      width: 50px;
      height: 50px;
      top: calc(50% - 50px);
      z-index: 10;
      &::before {
         font-size: 30px;
         color: black;
         text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      }
   }
   .slick-prev {
      left: 32vw;
   }
   .slick-next {
      right: 32vw;
   }
`;