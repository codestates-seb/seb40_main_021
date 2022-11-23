import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {
   Active,
   BtnFill,
   CompanyNum,
   Container,
   DivideLine,
   FormControl,
   InfoForm,
   InfoFormAuthComplete,
   InfoFormError,
   MemberPanel,
   MemberReg,
   PageTitle,
   PanelTitle,
   Wrapper
} from './MemberInfo.Style';
import { BtnArea, BtnDefault } from './SignupTos.Style';

const MemberInfo = () => {
   const [id, setId] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [businessNumber, setBusinessNumber] = useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);
   const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);
   const [businessNumberError, setBusinessNumberError] = React.useState('');

   const [Certification, setCertification] = React.useState(false);

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
      if (password !== e.target.value) {
         setPasswordConfirmError(true);
      } else {
         setPasswordConfirmError(false);
      }
   };

   const handleNumber = e => {
      setBusinessNumber(e.target.value);
   };

   // postBusinessNumber 사업자 오픈 api
   const postBusinessNumber = async () => {
      const token = 'Infuser e4ljz5QijI7ihKnKQFr3PfVxrppJxAQtNP4cqbykOX2d+nPayV9d8rkbaFEAi/v8JekzxSiy1uDD8cs1buEtSg==';
      try {
         const res = await axios.post(
            'https://api.odcloud.kr/api/nts-businessman/v1/status',
            {
               b_no: [businessNumber]
            },
            {
               headers: {
                  Authorization: token
               }
            }
         );
         setBusinessNumberError(res?.data);

         if (res?.data?.data[0].tax_type_cd !== '') {
            setCertification(true);
         }
      } catch (err) {
         console.log(err);
      }
   };

   //   리덕스로 id, password, businessNumber StoreInfo에 "postStoreInfo" -> 완료 버튼에 포스트 보내기
   // const postMemberInfo = async () => {
   //    try {
   //       await axios.post(`https://5fcb-221-140-177-247.jp.ngrok.io/member/join`, {
   //          id: id,
   //          password: password,
   //          businessNumber: businessNumber
   //       });
   //    } catch (err) {
   //       console.log(err);
   //    }
   // };

   return (
      <Wrapper>
         <Container>
            <MemberReg>
               <PageTitle>
                  <img src="images/notes.png" alt="img" />
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
                  <InfoForm>
                     <p>비밀번호</p>
                     <FormControl
                        value={password}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        onChange={handlePassword}
                     />
                  </InfoForm>
                  {passwordError && <span>영문, 숫자, 특수문자 포함 8자리 이상</span>}
                  <InfoFormError>
                     <p>비밀번호 재확인</p>
                     <FormControl
                        type="password"
                        placeholder="비밀번호를 재입력해주세요"
                        name="password"
                        onChange={handlePasswordConfirm}
                     />
                  </InfoFormError>
                  {passwordConfirmError && <span>확인 비밀번호가 다릅니다.</span>}
                  <InfoFormAuthComplete>
                     <p>사업자번호 입력</p>
                     <CompanyNum>
                        <FormControl type="text" placeholder="'-'제외 입력" onChange={handleNumber} />
                        <BtnFill>
                           <Link onClick={postBusinessNumber}>인증하기</Link>
                        </BtnFill>
                     </CompanyNum>
                     <span>{businessNumberError && businessNumberError?.data[0].tax_type}</span>
                     <BtnArea>
                        <BtnDefault>
                           <Link to={Certification ? '/storeInfo' : null}>다음</Link>
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
