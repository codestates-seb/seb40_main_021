import { Section_Style_2 } from '../../style/index.style';
import Icon1 from '../../assets/image/service-icon1.svg';
import Icon2 from '../../assets/image/service-icon2.svg';
import Icon3 from '../../assets/image/service-icon3.svg';

export const Section_2 = () => {
   return (
      <Section_Style_2>
         <div className="inner-container">
            <h5 data-aos="fade-up">서비스 안내</h5>
            <ul>
               <li data-aos="fade-in">
                  <div className="imgBox">
                     <img src={Icon1} alt="" />
                  </div>
                  <h4>간편한 비대면 QR 주문</h4>
                  <p>배치된 QR Code를 스캔해 개인의 휴대폰에서 메뉴를 확인하고 주문할 수 있습니다.</p>
                  <p>주문내역 확인, 직원 호출 등 부가적인 기능을 사용하여 고객의 서비스 만족도를 높일 수 있습니다.</p>
               </li>
               <li data-aos="fade-in" data-aos-delay="100">
                  <div className="imgBox">
                     <img src={Icon2} alt="" />
                  </div>
                  <h4>효율적인 메뉴 관리</h4>
                  <p>
                     쉽고 간편한 메뉴 등록 시스템으로 단 몇분만에
                     <br />
                     우리 가게의 온라인 메뉴판 제작이 가능합니다.
                  </p>
                  <p>온라인의 특성을 이용하여 메뉴의 빠른 정보 업데이트가 가능해 유지 보수가 쉽습니다.</p>
               </li>
               <li data-aos="fade-in" data-aos-delay="200">
                  <div className="imgBox">
                     <img src={Icon3} alt="" />
                  </div>
                  <h4>비용 감소</h4>
                  <p>온라인 주문 도입시 태블릿PC, 키오스크와 같은 전자기기 구입 비용이 들어가지 않습니다.</p>
                  <p>비대면 주문 시스템으로 인한 직원의 일의 효율성 증대 기대 및 인건비 감소에 효과적입니다.</p>
               </li>
            </ul>
         </div>
      </Section_Style_2>
   );
};
