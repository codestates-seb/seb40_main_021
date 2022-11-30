import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Wrapper } from './SignupTos.Style';
import { IdRemember, LoginBtn, LoginPanel, LoginTitle } from './Login.Style';
import { Container } from './Complete.Style';
import { Info, InfoFormError, FormControl } from './MemberInfo.Style';

const Login = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;

   const postLogin = async () => {
      try {
         setFinalCheck({
            ...finalCheck,
            idCheck: id === '' ? true : false,
            pwCheck: !password || passwordError ? true : false
         });

         const res = await axios.post(`${API_BASE_URL}/member/login`, {
            loginId: id,
            password: password
         });
         console.log(res);
         sessionStorage.setItem('access token', res.headers.get('authorization'));
         sessionStorage.setItem('refresh token', res.headers.get('refresh'));

         sessionStorage.setItem('userId', res.data.memberId);

         console.log(res);
      } catch (err) {
         console.log(err);
      }
   };

   const [id, setId] = React.useState('');
   const [password, setPassword] = React.useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);

   const [finalCheck, setFinalCheck] = React.useState({
      idCheck: false,
      pwCheck: false
   });

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
                        value={password}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        onChange={handlePassword}
                     />

                     {passwordError && <span>영문, 숫자, 특수문자 포함 8자리 이상</span>}
                     <IdRemember>
                        <input type="checkbox" id="rememberCheck" name="checkbox" />
                        <label htmlFor="rememberCheck">아이디 기억하기</label>
                     </IdRemember>
                  </InfoFormError>
               </form>
               <LoginBtn>
                  <Link to={linkError ? '/user' : null} onClick={postLogin}>
                     로그인
                  </Link>
               </LoginBtn>
            </LoginPanel>
         </Container>
      </Wrapper>
   );
};

export default Login;
