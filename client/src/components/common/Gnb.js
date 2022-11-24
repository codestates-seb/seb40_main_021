import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BellIcon from './../../assets/img/bell_icon.png';
import { gnbToggleOpen } from '../../redux/action/action';
import IconClose from './../../assets/img/icon_close_white.png';
import * as S from './Gnb.style';

const Gnb = () => {
   const dispatch = useDispatch();
   const gnbState = useSelector(store => store.gnbReducer);

   //    function isActive(path) {
   //       return window.location.pathname.startsWith(path);
   //    }
   return (
      <S.GnbContainer active={gnbState}>
         <S.CloseBtn onClick={() => dispatch(gnbToggleOpen(false))}>
            <img src={IconClose} alt="close_btn" />
         </S.CloseBtn>
         <S.GnbList>
            <S.TopLi>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="/user/">
                  <div>
                     <S.Bell bell>
                        <span>1</span>
                        <img src={BellIcon} alt="벨알람" />
                     </S.Bell>
                     매장알람
                  </div>
               </NavLink>
            </S.TopLi>
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="table">
                  <S.TableImg className="tableImg" alt="table icon" />
                  테이블 현황
               </NavLink>
            </S.Li>
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="menu">
                  <S.MenuImg className="menuImg" alt="menu icon" />
                  메뉴 목록
               </NavLink>
            </S.Li>
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="/user/menusetting">
                  <S.PlusImg className="plusImg" alt="plus icon" />
                  메뉴판 제작
               </NavLink>
            </S.Li>
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="create">
                  <S.QrImg className="qrImg" alt="qr icon" />
                  QR Table
               </NavLink>
            </S.Li>
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="/user/qr">
                  <S.PlusImg className="plusImg" alt="plus icon" />
                  테이블 목록
               </NavLink>
            </S.Li>
            <S.MSpan>로그아웃</S.MSpan>
         </S.GnbList>
      </S.GnbContainer>
   );
};

export default Gnb;
