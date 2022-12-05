import { Component } from 'react';
import Slider from 'react-slick';
import { SliderWrapper } from '../../style/index.style';
import adminPage1 from '../../assets/image/admin1.png';
import adminPage2 from '../../assets/image/admin2.png';
import adminPage3 from '../../assets/image/admin3.png';
import adminPage4 from '../../assets/image/admin4.png';
import adminPage5 from '../../assets/image/admin5.png';
import adminPage6 from '../../assets/image/admin6.png';
import adminPage7 from '../../assets/image/admin7.png';
import adminPage8 from '../../assets/image/admin8.png';

export default class CenterMode extends Component {
   render() {
      const settings = {
         className: 'center',
         centerMode: true,
         infinite: true,
         centerPadding: '60px',
         slidesToShow: 3,
         speed: 500
      };

      return (
         <SliderWrapper className="slide-wrapper">
            <div className="container" data-aos="fade-in">
               <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
               />
               <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
               />
               <style>{cssstyle}</style>
               <Slider {...settings}>
                  <div className="slider">
                     <img src={adminPage1} alt="" />
                     <p>
                        <span>매장 알림 페이지</span>
                        새로운 주문이 들어오거나 테이블에서 직원 호출을 요청했을때 확인 가능한 페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage2} alt="" />
                     <p>
                        <span>메뉴 목록 페이지</span>
                        현재 제작되어있는 메뉴들을 카테고리를 기준으로 확인 할 수 있는 페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage3} alt="" />
                     <p>
                        <span>메뉴 제작 페이지</span>
                        카테고리를 생성하고, 카테고리 목록에 들어갈 메뉴정보를 기입해 제작하는 페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage4} alt="" />
                     <p>
                        <span>메뉴 제작 페이지</span>
                        완성된 메뉴를 기준으로 실제 모바일 메뉴판에서 어떻게 보여지는지 미리보기 기능을 제공합니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage5} alt="" />
                     <p>
                        <span>테이블 생성 페이지</span>
                        QR생성시 각 테이블 정보를 담을 수 있도록 필요한 테이블을 등록 할 수 있는 페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage6} alt="" />
                     <p>
                        <span>테이블 목록 페이지</span>
                        현재 생성이 되어있는 테이블 목록을 확인하고 수정, 삭제 할 수 있으며, 유동적으로 테이블을 관리 할
                        수 있는 페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage7} alt="" />
                     <p>
                        <span>테이블 목록 페이지</span>각 테이블의 번호, 메뉴판의 정보가 담겨 생성된 QR을 인쇄할 수 있는
                        페이지입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage8} alt="" />
                     <p>
                        <span>가게정보 페이지</span>메뉴판에 보여질 가게의 정보를 수정할 수 있는 페이지입니다.
                     </p>
                  </div>
               </Slider>
            </div>
         </SliderWrapper>
      );
   }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}
`;
