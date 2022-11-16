import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BellIcon from "./../../assets/img/bell_icon.png";
import IconTable from "./../../assets/img/icon_table.png";
import IconTableActive from "./../../assets/img/icon_table_active.png";
import IconMenu from "./../../assets/img/icon_menu.png";
import IconMenuActive from "./../../assets/img/icon_menu_active.png";
import IconPlus from "./../../assets/img/icon_plus.png";
import IconPlusActive from "./../../assets/img/icon_plus_active.png";
import IconQR from "./../../assets/img/icon_QR.png";
import IconClose from "./../../assets/img/icon_close_white.png";
import * as S from "./Gnb.style";

const Gnb = () => {
    const [gnbToggleOpen, setGnbToggleOpen] = useState(false);
    //기능구현 아직입니다~ (open state redux로 관리예정)

    function isActive(path) {
        return window.location.pathname.startsWith(path);
    }
    return (
        <S.GnbContainer active={gnbToggleOpen}>
            <S.CloseBtn onClick={() => setGnbToggleOpen(false)}>
                <img src={IconClose} alt="close_btn" />
            </S.CloseBtn>
            <S.GnbList>
                <S.TopLi>
                    <NavLink to='/user/'>
                        <div>
                            <S.Bell bell={true} >
                                <span>1</span>
                                <img src={BellIcon} alt="벨알람" />
                            </S.Bell>
                            매장알람
                        </div>
                    </NavLink>
                </S.TopLi>
                <S.Li>
                    <NavLink to="table">
                        <S.TableImg src={isActive('/user/table') ? IconTableActive : IconTable} alt="table icon" />
                        테이블 현황
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to="menu">
                        <S.MenuImg src={isActive('/user/menu') ? IconMenuActive : IconMenu} alt="menu icon" />
                        메뉴 목록
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to="/user/menusetting">
                        <S.PlusImg src={isActive('/user/menusetting') ? IconPlusActive : IconPlus} alt="plus icon" />
                        메뉴판 제작
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to="table">
                        <S.QrImg src={IconQR} alt="qr icon" />
                        QR Table
                    </NavLink>
                </S.Li>
                <S.MSpan>로그아웃</S.MSpan>
            </S.GnbList>
        </S.GnbContainer>
    );
};

export default Gnb;
