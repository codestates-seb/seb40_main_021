import { Section_Style_1 } from '../../style/index.style';
import SectionImg1 from '../../assets/image/qrorderbg.png';
import Qr from '../../assets/image/QRorder.png';
import logo from '../../assets/image/logo.svg';

export const Section_1 = () => {
   const scroll = () => {
      window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
   };
   return (
      <>
         <Section_Style_1>
            <div className="left">
               <h1>
                  <img src={logo} alt="" />
                  <span data-aos="fade-in" data-aos-delay="500">
                     비대면 주문 시스템
                  </span>
               </h1>
               <p data-aos="fade-in" data-aos-delay="500">
                  일반 메뉴판 사용과 대면 주문은 그만.
                  <br />
                  간편한 QR 주문으로 효율적인 가게 운영을 경험해 보세요.
               </p>

               <button onClick={scroll} data-aos="fade-in" data-aos-delay="500">
                  서비스 둘러보기
               </button>
            </div>

            <div className="right" data-aos="fade-in" data-aos-delay="500">
               <div className="QR-imgBox">
                  <img src={Qr} alt="QR" />
               </div>
               <h2>QR 메뉴판을 촬영해 보세요.</h2>
               <p>메뉴판 제작시 보여지는 실제 화면을 모바일에서 확인 가능합니다.</p>
            </div>
         </Section_Style_1>
         <div className="bgImg">
            <img src={SectionImg1} alt="" />
         </div>
      </>
   );
};
