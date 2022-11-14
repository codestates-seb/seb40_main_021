import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../../assets/img/logo.png'
import UserExImg from './../../assets/img/user_ex_img.png'
import IconSignout from './../../assets/img/icon_signout.png'
import * as S from './Header.style'

const Header = () => {
    const isLogin = false
    return (
        <S.HeaderWrap>
            <S.Inside>
                <S.LogoImg src={Logo} alt='주문해조 logo' />
                <S.ButtonWrap>
                    {
                        isLogin ?
                            <>
                                <S.LineBtnUser> <Link to='/'><img src={UserExImg} alt='username' />상호명</Link></S.LineBtnUser>
                                <S.LineBtnUserNoUnder>  <Link to='/'><img src={IconSignout} alt='sign out' />로그아웃</Link ></S.LineBtnUserNoUnder>
                            </>
                            :
                            <>
                                <S.LineBtn> <Link to='/'>로그인</Link></S.LineBtn>
                                <S.Button>  <Link to='/'>회원가입</Link ></S.Button>
                            </>




                    }

                </S.ButtonWrap>
            </S.Inside>

        </S.HeaderWrap>
    );
};

export default Header;