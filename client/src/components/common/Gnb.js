import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BellIcon from './../../assets/img/bell_icon.png';
import { gnbToggleOpen, setLoginStatus, updateAlarmData } from '../../redux/action/action';
import IconClose from './../../assets/img/icon_close_white.png';
import * as S from './Gnb.style';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useInterval from '../../util/useInterval';
import callAlramSound from '../../assets/sound/callAlram.wav';
const Gnb = () => {
   const bellIconRef = useRef(null);
   const [audio] = useState(new Audio(callAlramSound));
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   const gnbState = useSelector(store => store.gnbReducer);
   const alarmData = useSelector(state => state.adminReducer.alarmData);
   const getAlarm = async url => {
      let variable = await axios
         .get(url, { headers: { Authorization: sessionStorage.getItem('Authorization') } })
         .then(res => {
            return res.data.data
               .slice(0)
               .reverse()
               .map(num => num);
         });
      return variable;
   };
   const bellAnimation = deg => {
      setTimeout(() => {
         bellIconRef.current.style.transition = `0.3s`;
         bellIconRef.current.style.transform = `translateX(0%) rotateZ(${deg}deg)`;
      }, 300);
   };
   const getAlarms = async () => {
      const orderAlarmReverse = await getAlarm(`${API_BASE_URL}/table/${sessionStorage.getItem('userId')}/order`);
      const callAlarmReverse = await getAlarm(`${API_BASE_URL}/call/${sessionStorage.getItem('userId')}`);
      if (
         sessionStorage.getItem('call') < callAlarmReverse.length ||
         sessionStorage.getItem('order') < orderAlarmReverse.length
      ) {
         sessionStorage.setItem('call', callAlarmReverse.length);
         sessionStorage.setItem('order', orderAlarmReverse.length);
         audio.play();
         bellAnimation(-20);
         setTimeout(() => {
            bellAnimation(20);
         }, 300);
         setTimeout(() => {
            bellAnimation(0);
         }, 600);
      }
      dispatch(updateAlarmData(orderAlarmReverse, callAlarmReverse));
   };
   useEffect(() => {
      getAlarms();
   }, []);

   const navigate = useNavigate();

   const logoutHandler = () => {
      dispatch(setLoginStatus(false));
      sessionStorage.clear();
      navigate('/');
   };

   useInterval(() => {
      getAlarms();
   }, 3000);
   const count = alarmData.orderAlarmReverse.length + alarmData.callAlarmReverse.length;
   return (
      <S.GnbContainer active={gnbState}>
         <S.CloseBtn onClick={() => dispatch(gnbToggleOpen(false))}>
            <img src={IconClose} alt="close_btn" />
         </S.CloseBtn>
         <S.GnbList>
            <S.TopLi>
               <Link onClick={() => dispatch(gnbToggleOpen(false))} to="/user/">
                  <div>
                     <S.Bell bell>
                        <span>{count}</span>
                        <img ref={bellIconRef} src={BellIcon} alt="벨알람" />
                     </S.Bell>
                     매장알람
                  </div>
               </Link>
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
            <S.Li>
               <NavLink onClick={() => dispatch(gnbToggleOpen(false))} to="/user/store">
                  <S.StoreImg className="storeImg" alt="plus icon" />
                  가게 정보
               </NavLink>
            </S.Li>
            <S.MSpan onClick={logoutHandler}>로그아웃</S.MSpan>
         </S.GnbList>
      </S.GnbContainer>
   );
};

export default Gnb;
