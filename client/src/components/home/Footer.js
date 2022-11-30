import { FooterWrapper } from '../../style/index.style';

export const Footer = () => {
   return (
      <FooterWrapper>
         <div className="inner-container">
            <div className="logo-imgBox">QR 오더</div>
            <div>
               <p>
                  더이상 복잡한 메뉴판 사용과 대면 주문 서비스는 그만. 이제는 자리에서 간편한 QR order로 효율적인 가게
                  운영을 경험해 보세요.
               </p>
               <div className="flex">
                  <p>
                     No more complicated menu boards and face-to-face ordering services. Now, experience efficient store
                     management with a simple QR order on the spot.
                  </p>
                  <ul>
                     <li>
                        <a href="https://github.com/codestates-seb/seb40_main_021">Github</a>
                     </li>
                     <li>
                        <a href="https://github.com/codestates-seb/seb40_main_021">Discord</a>
                     </li>
                     <li>
                        <a href="https://naver.com">Notion</a>
                     </li>
                  </ul>
               </div>
               <p className="copyright">Copyright © 2022 . seb40_main_021 All right reserved.</p>
            </div>
         </div>
      </FooterWrapper>
   );
};
