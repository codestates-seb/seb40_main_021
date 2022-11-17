import React from 'react';
import { Link } from 'react-router-dom';
import { BtnFill, Container, FormControl, IdRemember, InfoForm, InfoFormError, LoginBtn, LoginPanel, LoginTitle, Wrapper } from './Login.Style';


const Login = () => {
   return (
      <Wrapper>
         <Container>
            <LoginPanel>
               <LoginTitle>
                  <h4>로그인</h4>
               </LoginTitle>

               <InfoForm>
                  <label>아이디</label>
                  <FormControl type="text" placeholder="아이디를 입력해주세요" />
               </InfoForm>

               <InfoFormError>
                  <label>비밀번호</label>
                  <FormControl type="password" placeholder="비밀번호를 입력해주세요" />
                  <span>아이디 비밀번호를 확인해 주세요.</span>
                  <IdRemember>
                     <input type="checkbox" id="rememberCheck" name="checkbox" />
                     <label for="rememberCheck">
                        <h5>아이디 기억하기</h5>
                     </label>
                  </IdRemember>
               </InfoFormError>

               <LoginBtn>
                  <BtnFill href="./index.html">
                     <Link to="/">로그인</Link>
                  </BtnFill>
               </LoginBtn>
            </LoginPanel>
         </Container>
      </Wrapper>
   );
};

export default Login;
