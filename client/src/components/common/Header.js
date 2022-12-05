import { Link } from 'react-router-dom';
import Logo from './../../assets/image/logo.svg';

import * as S from './Header.style';

const Header = () => {
   return (
      <S.HeaderWrap>
         <Link className="logo main" to="/">
            <S.MainLogoImg className="home" src={Logo} alt="logo" />
         </Link>
         {/* <S.PageName>테이블 목록</S.PageName> */}
         <S.ButtonWrap>
            <>
               <S.LineBtn>
                  <Link to="/login">로그인</Link>
               </S.LineBtn>
               <S.Button>
                  <Link to="/signup">회원가입</Link>
               </S.Button>
            </>
         </S.ButtonWrap>
      </S.HeaderWrap>
   );
};

export default Header;
