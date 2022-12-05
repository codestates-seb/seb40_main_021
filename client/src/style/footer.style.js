import styled from 'styled-components';

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
         width: 100px;
         img {
            width: 100%;
         }
      }
      p {
         font-size: 16px;
         line-height: 20px;
         max-width: 50%;
         word-break: keep-all;
         margin-top: 8px;
      }
      .copyright {
         font-size: 14px;
         color: lightgray;
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
   @media screen and (max-width: 1500px) {
      .inner-container {
         max-width: 95%;
      }
   }
   @media screen and (max-width: 900px) {
      .inner-container {
         .logo-imgBox {
            font-size: 24px;
         }
         p {
            max-width: 60%;
         }
         .flex {
            ul {
               li {
                  font-size: 20px;
                  margin: 0 15px;
               }
            }
         }
      }
   }
   @media screen and (max-width: 700px) {
      .inner-container {
         p {
            max-width: 100%;
            font-size: 14px;
         }
         .flex {
            flex-direction: column;
            p {
               font-size: 12px;
            }
            ul {
               li {
                  font-size: 18px;
                  margin: 15px;
               }
            }
         }
      }
   }
`;
