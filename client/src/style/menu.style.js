import styled from 'styled-components';

export const Wrapper = styled.div`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   /* background-color: #ebebeb; */

   /* box-shadow: 2px 0px 7px 3px rgb(0 0 0 / 25%); */
   main {
      width: 100%;
      max-width: 500px;
      min-height: 100vh;
      padding: 0 20px 20px;
      background-color: white;
      box-shadow: 0px 1px 7px rgb(0 0 0 / 18%);
      .nav-wrapper {
         width: 100vw;
         max-width: 500px;
         background-color: white;
         position: fixed;
         top: 50px;
         left: 50%;
         z-index: 10;
         transform: translate(-50%);
         display: flex;
         padding: 0 0 0 65px;
         .preview {
            height: 500px;
            overflow-y: scroll;
         }
         ul {
            width: 100%;
            max-width: 500px;
            position: fixed;
            left: 0;
            padding-left: 65px;
            background-color: white;
            /* position: absolute; */
            display: flex;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            &::-webkit-scrollbar {
               display: none;
            }
            &.scrolling {
               box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
            }
         }
         li {
            flex: 0 0 auto;

            margin: 10px 7px;

            button {
               padding: 7px 10px;
               border-radius: 20px;
               box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.18);
               font-size: 14px;
               font-weight: 600;
               background-color: white;
               &.active {
                  background-color: #ffd6b8;
               }
            }
         }
      }
      .search-wrapper {
         width: 40px;
         height: 50px;
         position: fixed;
         top: 2.5px;
         left: 20px;
         display: flex;
         padding: 2.5px 20px 5px 0;
         transition: 0.6s;
         z-index: 1;

         input {
            width: 100%;
            height: 40px;
            border-radius: 30px;
            border: none;
            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.18);
            text-align: center;
            padding: 0 10px;
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translate(-50%);
            transition: 0.6s;
         }
         input:focus {
            outline: none;
         }
         button {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 0;
            background-color: white;
            transition: 0.6s;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
         }
      }
      .search-wrapper.active {
         left: 5%;
         width: 90%;

         input {
            height: 45px;
            top: 2.5px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
         }

         button {
            width: 45px;
            height: 45px;
            top: 2.5px;
            right: 0;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
         }
      }
      .menulist-wrapper.preview {
         height: calc(100vh - 175px);
         overflow-y: scroll;
      }
      .menulist-wrapper {
         background-color: white;
         margin-top: 100px;
         display: flex;
         flex-direction: column;
         padding: 0 20px 95px 20px;
         &::-webkit-scrollbar {
            width: 5px;
            background: rgba(0, 0, 0, 0);
         }
         &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 30px;
         }
         h1 {
            font-size: 16px;
            font-weight: 600;
            margin: 10px 0;
         }
         .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
            row-gap: 20px;
            li {
               button {
                  width: 100%;
               }
               .menuImgBox {
                  height: calc(50vw - 60px);
                  max-height: 200px;
                  border-radius: 15px;
                  background-color: lightgray;
                  margin-bottom: 10px;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 15px;
                  font-weight: 600;
                  img {
                     width: 100%;
                  }
               }
               .menuTxtBox {
                  .inline {
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                  }
                  h2 {
                     font-size: 14px;
                     font-weight: 600;
                     word-break: keep-all;
                  }
                  span {
                     font-size: 10px;
                     font-weight: 600;
                     padding: 2px;
                     border-radius: 3px;
                     background-color: #ffd6b8;
                     word-break: keep-all;
                  }
                  p {
                     font-size: 12px;
                     margin-top: 3px;
                     text-align: left;
                  }
               }
            }
         }
      }

      .orderNav-wrapper {
         width: 100%;
         max-width: 500px;
         position: fixed;
         top: 50px;
         left: 50%;
         z-index: 10;
         transform: translate(-50%);
         display: flex;
         .button {
            width: 50%;
            height: 45px;
            background-color: #fdefe4;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: black;
            font-size: 14px;
            border: none;
            cursor: pointer;

            svg {
               margin-right: 5px;
               font-size: 18px;
            }
         }
         .button.active {
            background-color: white;
            font-weight: 600;

            svg {
               color: #ff6b00;
            }
         }
      }
   }
   .no-padding {
      padding: 0;
   }
   .store-wrapper {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 80px;
      .store-imgBox {
         width: 100%;
         height: 220px;
         background-color: #ffd6b8;
         overflow: hidden;
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 16px;
         font-weight: 600;
         text-align: center;
         line-height: 20px;
         img {
            width: 100%;
         }
      }
      h1 {
         font-size: 18px;
         font-weight: 600;
         margin: 10px 0;
      }
      ul {
         display: flex;
         flex-direction: column;
         padding: 20px;
         width: 100%;
         li {
            margin-bottom: 15px;
         }
         h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
         }
         p {
            font-size: 14px;
            word-break: keep-all;
         }
         .store-info {
            padding: 10px;
            background-color: #ffefe3;
            border-radius: 3px;
            min-height: 120px;
            line-height: 22px;
         }
      }
   }

   .menu-container {
      margin-top: 95px;
      /* min-height: calc(100vh - 95px); */
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 120px;
      h1 {
         font-size: 14px;
         font-weight: 600;
         margin: 10px 20px;
      }
      ul {
         display: flex;
         flex-direction: column;
         flex: 1;
         &::-webkit-scrollbar {
            width: 5px;
            background: rgba(0, 0, 0, 0);
         }
         &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 30px;
         }
         li {
            border: 1px solid #e7e7e7;
            background-color: white;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .left {
               display: flex;
               align-items: center;
               .imgBox {
                  width: 95px;
                  height: 80px;
                  border-radius: 3px;
                  background-color: lightgray;
                  margin-right: 10px;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 12px;
                  font-weight: 600;
                  text-align: center;
                  img {
                     width: 100%;
                  }
               }
               .menuTxt {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  h2 {
                     font-size: 14px;
                     font-weight: 600;
                  }
                  p {
                     font-size: 12px;
                  }
               }
            }
            .right {
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               align-items: flex-end;

               .delete {
                  font-size: 16px;
                  font-weight: 600;
               }
               .quantity {
                  width: 120px;
                  height: 35px;
                  display: flex;
                  border-radius: 10px;
                  overflow: hidden;
                  button {
                     font-size: 12px;
                     width: 40px;
                     background-color: #ffdcc2;
                  }
                  p {
                     font-size: 14px;
                     font-weight: 600;
                     width: 40px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     background-color: #f2f2f2;
                  }
               }
            }
            .menu-quantity {
               display: flex;
               align-items: flex-end;
            }
         }
      }
      .fixed {
         background: white;
         position: fixed;
         bottom: 75px;
         display: flex;
         flex-direction: column;
         width: 100%;
         max-width: 500px;
         box-shadow: 0px -2px 4px rgb(0 0 0 / 15%);
      }
      .total-price {
         font-size: 20px;
         font-weight: 600;
         padding: 0 20px;
         margin: 15px 0 0px;
         &.fixed {
            padding: 10px 20px;
         }
      }
      .order-btn {
         width: calc(100% - 40px);
         height: 50px;
         background-color: #ff6b00;
         color: white;
         border-radius: 10px;
         margin: 15px 20px;
         font-size: 20px;
         font-weight: 600;
      }
   }
   @media screen and (max-width: 500px) {
      main {
         .nav-wrapper {
            left: 0;
            transform: translate(0);
         }

         .orderNav-wrapper {
            left: 0;
            transform: translate(0);
         }
      }
   }
`;

export const DetailedWrapper = styled.section`
   width: 100%;
   max-width: 500px;
   display: flex;
   flex-direction: column;
   position: fixed;
   bottom: 75px;
   left: 50%;
   transform: translate(-50%, 100%);
   transition: 0.3s;
   background-color: white;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.25);
   padding: 10px 20px;
   opacity: 0;
   svg {
      font-size: 30px;
   }
   .menu {
      padding-bottom: 20px;
      border-bottom: 2px solid #e9e6e6;
      .inline {
         display: flex;
         align-items: center;
         justify-content: space-between;
         font-weight: 600;
         margin-bottom: 10px;
         h1 {
            font-size: 20px;
            color: #ff6b00;
            word-break: keep-all;
            font-weight: 600;
         }
         p {
            font-size: 16px;
         }
      }
      p {
         font-size: 14px;
         word-break: keep-all;
      }
   }
   .cart {
      padding-top: 15px;
      font-size: 16px;
      font-weight: 900;
      .quantity {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 10px 0;
         .btn {
            display: flex;
            border-radius: 10px;
            overflow: hidden;
            button {
               width: 45px;
               height: 40px;
               background-color: #ffdcc2;
               svg {
                  font-size: 16px;
               }
            }
            p {
               font-size: 14px;
               font-weight: 600;
               width: 40px;
               display: flex;
               justify-content: center;
               align-items: center;
               background-color: #f2f2f2;
            }
         }
      }
      .total {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 10px 0;
         button {
            width: 120px;
            border-radius: 3px;
            background-color: #ff6b00;
            color: white;
            padding: 10px 20px;
            font-size: 20px;
            font-weight: 600;
         }
      }
   }

   &.active {
      transform: translate(-50%, 0);
      opacity: 1;
   }

   @media screen and (max-width: 500px) {
      left: 0;
      transform: translate(0, 100%);

      &.active {
         transform: translate(0, 0);
      }
   }
`;

export const BottomNavStyle = styled.div`
   width: 100vw;
   max-width: 500px;
   height: 75px;
   display: flex;
   justify-content: space-around;
   background-color: white;
   position: fixed;
   bottom: 0;
   left: 50%;
   transform: translate(-50%);
   box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.15);
   padding: 10px 20px;
   transition: 0.2s;
   &.hidden {
      transform: translate(-50%, 100%);
   }

   .button.preview,
   button.preview {
      color: lightgray;
      cursor: default;
   }
   button,
   .button {
      width: 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #777777;
      background-color: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      .cartCount {
         width: 18px;
         height: 18px;
         background-color: #ff3535;
         color: white;
         font-size: 8px;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         position: absolute;
         top: -8px;
         right: 8px;
      }
      p {
         font-size: 10px;
         margin-top: 5px;
      }
   }
   .active button,
   .active {
      color: #ff6b00;
   }
   @media screen and (max-width: 500px) {
      left: 0;
      transform: translate(0);
   }
`;

export const HeaderStyle = styled.header`
   width: 100vw;
   height: 50px;
   max-width: 500px;
   background-color: #111f27;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;
   padding: 0 20px;
   font-size: 16px;
   font-weight: 600;
   position: fixed;
   top: 0;
   left: 50%;
   z-index: 9999;
   transform: translate(-50%);
   box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
   .storeName {
      height: 50px;
      padding: 12px 0;
      img {
         height: 100%;
      }
   }
   @media screen and (max-width: 500px) {
      width: 100vw;
   }
`;

export const ModalStyle = styled.div`
   position: fixed;
   z-index: 9999;
   .modal-bg {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.66);
      position: fixed;
      top: 0;
      left: 0;
   }
   .modal {
      width: 90%;
      max-width: 340px;
      background-color: white;
      border-radius: 10px;
      position: fixed;
      top: 40vh;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
         width: 32px;
         height: 32px;
      }
      h1 {
         font-size: 20px;
         font-weight: 600;
         margin: 5px 10px;
      }
      .inline {
         width: 100%;
         display: flex;
         justify-content: space-between;
         button {
            width: 47%;
            height: 45px;
            font-size: 20px;
            font-weight: 600;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            color: white;
            margin-top: 10px;
         }
         .yes {
            background-color: #ff6b00;
         }
         .no {
            background-color: #111f27;
         }
      }
   }
`;
