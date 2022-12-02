import { useParams } from 'react-router-dom';
import { HeaderStyle } from '../../style/menu.style';
import logo from '../../assets/image/logo-white.svg';

export const Header = () => {
   const params = useParams()['*'].split('/');
   return (
      <HeaderStyle>
         <div className="storeName">
            <img src={logo} alt="로고" />
         </div>
         <div>NO.{params[1]}</div>
      </HeaderStyle>
   );
};
