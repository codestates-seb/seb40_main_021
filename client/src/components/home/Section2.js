import { Section_Style_2 } from '../../style/index.style';
import Icon1 from '../../assets/image/service-icon1.svg';
import Icon2 from '../../assets/image/service-icon2.svg';
import Icon3 from '../../assets/image/service-icon3.svg';

export const Section_2 = () => {
   return (
      <Section_Style_2>
         <div className="inner-container">
            <h4>서비스 안내</h4>
            <ul>
               <li>
                  <div className="imgBox">
                     <img src={Icon1} alt="" />
                  </div>
                  <h4>간편한 비대면 QR 주문</h4>
                  <p>테이블에 부착된 QR Code로 손님의 핸드폰에서 메뉴판을 확인하고, 주문할 수 있습니다.</p>
                  <p>
                     그 외에 영수증, 호출, 요구사항 전달 등 부가적인 기능을 사용하여 보다 고객의 만족도를 높일 수
                     있습니다.
                  </p>
               </li>
               <li>
                  <div className="imgBox">
                     <img src={Icon2} alt="" />
                  </div>
                  <h4>효율적인 메뉴 관리</h4>
                  <p>쉽고 간편한 메뉴 등록 시스템으로 단 몇분만에 우리 가게의 온라인 메뉴판 제작 가능합니다.</p>
                  <p>온라인의 특성을 이용하여 빠른 업데이트가 가능합니다.</p>
               </li>
               <li>
                  <div className="imgBox">
                     <img src={Icon3} alt="" />
                  </div>
                  <h4>비용 감소</h4>
                  <p>
                     직원이 직접 주문을 받는 서비스가 아닌 손님이 QR을 통해 주문을 하는 시스템으로 인건비 감소에
                     효과적입니다.
                  </p>
               </li>
            </ul>
         </div>
      </Section_Style_2>
   );
};
