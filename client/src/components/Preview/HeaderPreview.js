import { HeaderStyle } from '../../style/menu.style';
import logo from '../../assets/image/logo-white.svg';

export const HeaderPreview = () => {
   return (
      <HeaderStyle>
         <div className="storeName">
            <img src={logo} alt="로고" />
         </div>
         <div>NO.0</div>
      </HeaderStyle>
   );
};
