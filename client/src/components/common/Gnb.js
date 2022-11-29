import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import BellIcon from './../../assets/img/bell_icon.png';
import { gnbToggleOpen, updateAlarmData } from '../../redux/action/action';
import IconClose from './../../assets/img/icon_close_white.png';
import * as S from './Gnb.style';
import { useEffect } from 'react';
import axios from 'axios';
import useInterval from '../../util/useInterval';

const Gnb = () => {
   const dispatch = useDispatch();
   const gnbState = useSelector(store => store.gnbReducer);
   const url = useSelector(state => state.adminReducer.apiUrl);
   const alarmData = useSelector(state => state.adminReducer.alarmData);
   const getAlarm = async url => {
      let variable = await axios.get(url).then(res => {
         return res.data.data
            .slice(0)
            .reverse()
            .map(num => num);
      });
      return variable;
   };
   const getAlarms = async () => {
      const orderAlarmReverse = await getAlarm(`${url}/table/${sessionStorage.getItem('userId')}/order`);
      const callAlarmReverse = await getAlarm(`${url}/call/${sessionStorage.getItem('userId')}`);
      dispatch(updateAlarmData(callAlarmReverse, orderAlarmReverse));
   };
   useEffect(() => {
      getAlarms();
   }, []);

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
                        <img src={BellIcon} alt="벨알람" />
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
            <S.MSpan>로그아웃</S.MSpan>
         </S.GnbList>
      </S.GnbContainer>
   );
};

export default Gnb;
