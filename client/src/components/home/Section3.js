import { Section_Style_3 } from '../../style/index.style';
import adminPage1 from '../../assets/image/admin1.png';
import adminPage2 from '../../assets/image/admin2.png';
import adminPage3 from '../../assets/image/admin3.png';
import adminPage4 from '../../assets/image/admin4.png';
import adminPage5 from '../../assets/image/admin5.png';
import adminPage6 from '../../assets/image/admin6.png';
import adminPage7 from '../../assets/image/admin7.png';
import adminPage8 from '../../assets/image/admin8.png';
import userMenu1 from '../../assets/image/menu1.png';
import userMenu2 from '../../assets/image/menu2.png';
import userMenu3 from '../../assets/image/menu3.png';
import userMenu4 from '../../assets/image/menu4.png';
import userMenu5 from '../../assets/image/menu5.png';
import userMenu6 from '../../assets/image/menu6.png';
import userMenu7 from '../../assets/image/menu7.png';
import userMenu8 from '../../assets/image/menu8.png';
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
            <img src={adminPage1} alt="" />
            <img src={adminPage2} alt="" />
            <img src={adminPage3} alt="" />
            <img src={adminPage4} alt="" />
            <img src={adminPage5} alt="" />
            <img src={adminPage6} alt="" />
            <img src={adminPage7} alt="" />
            <img src={adminPage8} alt="" />
         </div>
         <div className="usermenu-wrapper" data-aos="fade-in">
            <img src={userMenu1} alt="" />
            <img src={userMenu2} alt="" />
            <img src={userMenu3} alt="" />
            <img src={userMenu4} alt="" />
            <img src={userMenu5} alt="" />
            <img src={userMenu6} alt="" />
            <img src={userMenu7} alt="" />
            <img src={userMenu8} alt="" />
         </div>
      </Section_Style_3>
   );
};
