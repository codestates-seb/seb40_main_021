import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './SignupTos.Style';
import { IdRemember, LoginBtn, LoginPanel, LoginTitle } from './Login.Style';
import { Container } from './Complete.Style';
import { Info, InfoFormError, FormControl } from './MemberInfo.Style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGuideModalState, setLoginStatus } from '../../redux/action/action';

const Login = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const postLogin = async () => {
      try {
         localStorage.setItem('id_remember', id);

         validation();
         if (!linkError) {
            setFinalCheck({
               ...finalCheck,
               idCheck: id === '' ? true : false,
               pwCheck: !password || passwordError ? true : false
            });
            return;
         }

         const res = await axios.post(`${API_BASE_URL}/member/login`, {
            loginId: id,
            password: password
         });
         sessionStorage.setItem('access token', res.headers.get('Authorization'));
         sessionStorage.setItem('refresh token', res.headers.get('Refresh'));
         sessionStorage.setItem('userId', res.data.memberId);

         if (res.status === 200) {
            dispatch(setLoginStatus(true));

            // 카테고리 목록 불러오기
            const category = await axios.get(`${API_BASE_URL}/category/${sessionStorage.getItem('userId')}`);
            // 메뉴판 제작이 안되어있는경우 가이드모달 띄워주기
            if (category.data.length === 0) {
               dispatch(setGuideModalState(true));
            }
            navigate('/user');
         } else {
            alert('로그인 실패');
         }
      } catch (err) {
         alert('입력하신 아이디 또는 비밀번호가 정확하지 않습니다.');
         err;
      }
   };

   const [id, setId] = React.useState('');
   const [password, setPassword] = React.useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);

   const [isChecked, setIsChecked] = useState(false);

   const [finalCheck, setFinalCheck] = React.useState({
      idCheck: false,
      pwCheck: false
   });

   useEffect(() => {
      if (sessionStorage.getItem('access token')) {
         navigate(`/user`);
      }
   }, []);

   const handleId = e => {
      setId(e.target.value);

      const idRegex = /^[a-z0-9]{1,11}$/;
      if (idRegex.test(e.target.value) || e.target.value === '') {
         setIdError(false);
         setFinalCheck({ ...finalCheck, idCheck: false });
      } else {
         setIdError(true);
         setFinalCheck({ ...finalCheck, idCheck: false });
      }
   };

   const handlePassword = e => {
      setPassword(e.target.value);

      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;

      if (passwordRegex.test(e.target.value) || e.target.value === '') {
         setPasswordError(false);
         setFinalCheck({ ...finalCheck, pwCheck: false });
      } else {
         setPasswordError(true);
      }
   };

   const handleKeyDown = event => {
      if (event.key === 'Enter') {
         postLogin();
      }
   };

   const handleOnCheck = () => {
      setIsChecked(prev => !prev);

      if (!isChecked) {
         localStorage.setItem('id_remember', id);
      } else {
         localStorage.removeItem('id_remember');
      }
   };

   useEffect(() => {
      if (localStorage.getItem('id_remember')) {
         setIsChecked(true);
         setId(localStorage.getItem('id_remember'));
      }
   }, []);

   const validation = () => {
      if (id === '') {
         alert('아이디를 입력해주세요.');
         return;
      }

      if (password === '') {
         alert('패스워드를 입력해주세요.');
         return;
      }
   };

   const linkError = !idError && !passwordError && id !== '' && password !== '';

   return (
      <Wrapper>
         <Container>
            <LoginPanel>
               <form>
                  <LoginTitle>
                     <h4>로그인</h4>
                  </LoginTitle>
                  <Info buttonError={finalCheck.idCheck} idError={idError}>
                     <p>아이디</p>
                     <FormControl
                        onKeyDown={handleKeyDown}
                        maxLength={11}
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        name="id"
                        value={id}
                        onChange={handleId}
                     />
                     {idError && <span>영문(소문자), 숫자 포함해 주세요</span>}
                  </Info>

                  <InfoFormError buttonError={finalCheck.pwCheck} passwordConfirmError={passwordError}>
                     <p>비밀번호</p>
                     <FormControl
                        onKeyDown={handleKeyDown}
                        value={password}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        onChange={handlePassword}
                     />

                     {passwordError && <span>영문, 숫자, 특수문자 포함 8자리 이상</span>}
                     <IdRemember>
                        <input
                           checked={isChecked}
                           onChange={handleOnCheck}
                           type="checkbox"
                           id="rememberCheck"
                           name="checkbox"
                        />
                        <label htmlFor="rememberCheck">아이디 기억하기</label>
                     </IdRemember>
                  </InfoFormError>
               </form>
               <LoginBtn>
                  <button onClick={postLogin}>로그인</button>
               </LoginBtn>
            </LoginPanel>
         </Container>
      </Wrapper>
   );
};

export default Login;
