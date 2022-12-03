import { Link, useNavigate } from 'react-router-dom';
import Logo from './../../assets/image/logo.svg';
import IconSignout from './../../assets/img/icon_signout.png';
import IconList from './../../assets/img/icon_list.png';
import * as S from './Header.style';
import { useDispatch, useSelector } from 'react-redux';
import { gnbToggleOpen, setLoginStatus } from '../../redux/action/action';

const HeaderUser = () => {
   const store = useSelector(store => store.menuReducer.store);
   // const isLogin = useSelector(store => store.userMemberReducer.isLogin);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const logoutHandler = () => {
      dispatch(setLoginStatus(false));
      sessionStorage.clear();
      navigate('/');
   };

   return (
      <S.HeaderWrap>
         <Link className="logo" to="/user">
            <S.LogoImg src={Logo} alt="주문해조 logo" />
         </Link>
         <S.IconBtn onClick={() => dispatch(gnbToggleOpen(true))}>
            <S.MListIcon src={IconList} alt="리스트" />
            <span>알람</span>
         </S.IconBtn>
         {/* <S.PageName>테이블 목록</S.PageName> */}
         <S.ButtonWrap>
            <>
               <S.LineBtnUser>
                  <Link to="/user/store">
                     <span>{store.businessName}</span>
                  </Link>
               </S.LineBtnUser>
               <S.LineBtnUserNoUnder>
                  <button onClick={logoutHandler}>
                     <img src={IconSignout} alt="sign out" />
                     로그아웃
                  </button>
               </S.LineBtnUserNoUnder>
            </>
         </S.ButtonWrap>
      </S.HeaderWrap>
   );
};

export default HeaderUser;
