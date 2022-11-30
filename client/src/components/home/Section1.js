import { Section_Style_1 } from '../../style/index.style';
import SectionImg1 from '../../assets/image/qrorderbg.svg';
import Qr from '../../assets/image/qr.svg';

export const Section_1 = () => {
   const scroll = () => {
      window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
   };
   return (
      <>
         <Section_Style_1>
            <div className="left">
               <h1>
                  QR 오더 <span>비대면 주문 시스템</span>
               </h1>
               <p>
                  더이상 복잡한 메뉴판 사용과 대면 주문 서비스는 그만. 간편한 QR 오더로 효율적인 가게 운영을 경험해
                  보세요.
               </p>

               <button onClick={scroll}>서비스 둘러보기</button>
            </div>

            <div className="right">
               <div className="QR-imgBox">
                  <img src={Qr} alt="QR" />
               </div>
               <h2>QR 메뉴판을 촬영해보세요.</h2>
               <p>메뉴판 제작시 보여지는 실제 화면을 모바일에서 확인 가능합니다.</p>
            </div>
         </Section_Style_1>
         <div className="bgImg">
            <img src={SectionImg1} alt="" />
         </div>
      </>
   );
};
