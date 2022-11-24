import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
   BtnFill,
   Container,
   FormControl,
   IdRemember,
   InfoForm,
   InfoFormError,
   LoginBtn,
   LoginPanel,
   LoginTitle,
   Wrapper
} from './Login.Style';

const Login = () => {
   const postLogin = async () => {
      try {
         const res = await axios.post(`/member/login`, {
            loginId: id,
            password: password
         });
         console.log(res);
      } catch (err) {
         console.log(err);
      }
   };

   const [id, setId] = React.useState('');
   const [password, setPassword] = React.useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);

   const handleId = e => {
      setId(e.target.value);

      const idRegex = /^[a-z0-9]{1,11}$/;
      if (idRegex.test(e.target.value) || e.target.value === '') {
         setIdError(false);
      } else {
         setIdError(true);
      }
   };

   const handlePassword = e => {
      setPassword(e.target.value);

      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;

      if (passwordRegex.test(e.target.value) || e.target.value === '') {
         setPasswordError(false);
      } else {
         setPasswordError(true);
      }
   };

   return (
      <Wrapper>
         <Container>
            <LoginPanel>
               <LoginTitle>
                  <h4>로그인</h4>
               </LoginTitle>

               <InfoForm>
                  <p>아이디</p>
                  <FormControl
                     maxLength={11}
                     type="text"
                     placeholder="아이디를 입력해주세요"
                     name="id"
                     value={id}
                     onChange={handleId}
                  />
               </InfoForm>
               {idError && <span>영문(소문자), 숫자 포함해 주세요.</span>}
               <InfoFormError>
                  <p>비밀번호</p>
                  <FormControl
                     value={password}
                     type="password"
                     placeholder="비밀번호를 입력해주세요"
                     name="password"
                     onChange={handlePassword}
                  />

                  {passwordError && <span>영문, 숫자,특수문자 포함 8자리 이상</span>}
                  <IdRemember>
                     <input type="checkbox" id="rememberCheck" name="checkbox" />
                     <label htmlFor="rememberCheck">
                        <h5>아이디 기억하기</h5>
                     </label>
                  </IdRemember>
               </InfoFormError>

               <LoginBtn>
                  <BtnFill>
                     <Link to={!idError && !passwordError ? '/' : null} onClick={postLogin}>
                        로그인
                     </Link>
                  </BtnFill>
               </LoginBtn>
            </LoginPanel>
         </Container>
      </Wrapper>
   );
};

export default Login;
