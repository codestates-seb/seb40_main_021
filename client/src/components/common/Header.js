import { Link } from 'react-router-dom';
import Logo from './../../assets/img/logo.png';
import IconSignout from './../../assets/img/icon_signout.png';
import IconList from './../../assets/img/icon_list.png';
import * as S from './Header.style';
import { useDispatch, useSelector } from 'react-redux';
import { gnbToggleOpen } from '../../redux/action/action';

const Header = () => {
   const store = useSelector(store => store.menuReducer.store);
   const isLogin = false;
   const dispatch = useDispatch();

   return (
      <S.HeaderWrap>
         <Link className="logo" to="/">
            <S.LogoImg src={Logo} alt="주문해조 logo" />
         </Link>
         <S.IconBtn onClick={() => dispatch(gnbToggleOpen(true))}>
            <S.MListIcon src={IconList} alt="리스트" />
            <span>알람</span>
         </S.IconBtn>
         {/* <S.PageName>테이블 목록</S.PageName> */}
         <S.ButtonWrap>
            {isLogin ? (
               <>
                  <S.LineBtnUser>
                     <Link to="/user/store">
                        <span>{store.businessName}</span>
                     </Link>
                  </S.LineBtnUser>
                  <S.LineBtnUserNoUnder>
                     <Link to="/">
                        <img src={IconSignout} alt="sign out" />
                        로그아웃
                     </Link>
                  </S.LineBtnUserNoUnder>
               </>
            ) : (
               <>
                  <S.LineBtn>
                     <Link to="/login">로그인</Link>
                  </S.LineBtn>
                  <S.Button>
                     <Link to="/signuptos">회원가입</Link>
                  </S.Button>
               </>
            )}
         </S.ButtonWrap>
      </S.HeaderWrap>
   );
};

export default Header;
