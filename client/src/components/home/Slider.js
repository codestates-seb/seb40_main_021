import { Component } from 'react';
import Slider from 'react-slick';
import { SliderWrapper } from '../../style/index.style';
import adminPage from '../../assets/image/adminPage.svg';

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
            <div className="container ">
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
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
                     </p>
                  </div>
                  <div className="slider">
                     <img src={adminPage} alt="" />
                     <p>
                        직원 호출알람이 확인 가능하며
                        <br />
                        새로운 주문요청한 내역을 볼 수 있는 페이지 입니다.
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
