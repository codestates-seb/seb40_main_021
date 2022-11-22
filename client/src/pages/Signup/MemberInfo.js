import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { Active, BtnFill, CompanyNum, Container, DivideLine, FormControl, InfoForm, InfoFormAuthComplete, InfoFormError, MemberPanel, MemberReg, PageTitle, PanelTitle, Wrapper } from './MemberInfo.Style';
import { BtnArea, BtnDefault } from './SignupTos.Style';



const MemberInfo = () => {
// postBusinessNumber 이게 사업자 오픈 api
   const postBusinessNumber = async () => {
         const token = 'Infuser e4ljz5QijI7ihKnKQFr3PfVxrppJxAQtNP4cqbykOX2d+nPayV9d8rkbaFEAi/v8JekzxSiy1uDD8cs1buEtSg=='
      try {
        const res = await axios.post(
               'https://api.odcloud.kr/api/nts-businessman/v1/status',{
                  "b_no": [businessNumber],
               },{headers:{
                  Authorization: token,
               }})
               console.log(res)
         } catch (err) {
           console.log(err);
         }
       };


   const postMemberInfo = async () => {
     try {
      const res = await axios.post(
           `https://757f-221-140-177-247.jp.ngrok.io/member/join`,
           {
            id: id,
            password: password,
            businessNumber: businessNumber,
           },
         )
         console.log(res)
     } catch (err) {
       console.log(err);
     }
   };

   const [id, setId] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [businessNumber, setBusinessNumber] = useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);
   const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);
   // const [businessNumberError, setBusinessNumberError] = React.useState(false);
  
      
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

   const handlePasswordConfirm = e => {
      
      if (password !== e.target.value){
         setPasswordConfirmError(true);
      }
      else {
         setPasswordConfirmError(false);
      }
   }

   const handleNumber = e => {
      setBusinessNumber(e.target.value);
   }

   console.log(businessNumber);




   // const handleBusinessNumberError =e => {

   // if (businessNumber !== e.target.value){
   //    setBusinessNumberError(true);
   // }
   // else{
   // setBusinessNumberError(false);
   //    }
   // }

   return (
      <Wrapper>
         <Container>
            <MemberReg>
               <PageTitle>
                  <img src="images/notes.png" />
                  <h4>회원가입</h4>
               </PageTitle>
               <DivideLine>
                  <li></li>
                  <Active />
                  <li></li>
               </DivideLine>

               <MemberPanel>
                  <PanelTitle>
                     <h5>2. 회원 정보 입력</h5>
                  </PanelTitle>

                  <InfoForm>
                     <label>아이디</label>
                     <FormControl  maxLength={11}
                     type="text"
                     placeholder="아이디를 입력해주세요"
                     name="id"
                     value={id}
                     onChange={handleId} />
                  </InfoForm>
                  {idError && <span>영문(소문자), 숫자 포함해 주세요.</span>}
                  <InfoForm>
                     <label>비밀번호</label>
                     <FormControl value={password}
                     type="password"
                     placeholder="비밀번호를 입력해주세요"
                     name="password"
                     onChange={handlePassword}/>
                  </InfoForm>
                  {passwordError && <span>영문, 숫자,특수문자 포함 8자리 이상</span>}
                  <InfoFormError>
                     <label>비밀번호 재확인</label>
                     <FormControl
                     type="password"
                     placeholder="비밀번호를 재입력해주세요"
                     name="password"
                     onChange={handlePasswordConfirm}
                        />
                  </InfoFormError>
                  {passwordConfirmError && <span>확인 비밀번호가 다릅니다.</span>}
                  <InfoFormAuthComplete>
                     <label>사업자번호 입력</label>
                     <CompanyNum>
                        <FormControl type="text" placeholder="'-'제외 입력" onChange={handleNumber}/>
                        <BtnFill>
                           <Link onClick={postBusinessNumber} >인증하기</Link>
                        </BtnFill>
                     </CompanyNum>
                     {/* {businessNumberError && <span>없는 사업자 번호입니다.</span>} */}
                     <BtnArea>
                     <BtnDefault>
                     <Link to="/storeInfo">다음</Link>
                     </BtnDefault>
                     </BtnArea>
                  </InfoFormAuthComplete>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default MemberInfo;