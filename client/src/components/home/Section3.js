import { Section_Style_3 } from '../../style/index.style';
import userMenu from '../../assets/image/usermenu.svg';
import CenterMode from './Slider';

export const Section_3 = () => {
   return (
      <Section_Style_3>
         <h4 data-aos="fade-up">효율적인 관리자와 사용자 페이지</h4>
         <input id="btn-admin" type="radio" name="admin" defaultChecked />
         <input id="btn-menu" type="radio" name="admin" />
         <div className="btn-wrapper" data-aos="fade-up">
            <label className="btn-admin" htmlFor="btn-admin">
               관리자 페이지
            </label>
            <label className="btn-menu" htmlFor="btn-menu">
               사용자 페이지
            </label>
         </div>
         <CenterMode />
         <div className="admin-imgBox" data-aos="fade-in">
            이미지만 나와요
         </div>
         <div className="usermenu-wrapper" data-aos="fade-in">
            <img src={userMenu} alt="" />
         </div>
      </Section_Style_3>
   );
};
