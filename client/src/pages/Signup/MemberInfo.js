import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
   BtnFill,
   CompanyNum,
   FormControl,
   InfoForm,
   InfoFormAuthComplete,
   InfoFormError,
   Btn,
   Info
} from './MemberInfo.Style';
import {
   Wrapper,
   Container,
   MemberReg,
   PageTitle,
   DivideLine,
   Active,
   MemberPanel,
   PanelTitle
} from './SignupTos.Style';

import { useDispatch, useSelector } from 'react-redux';

import { onChangeIdAction, onChangePasswordAction, onChangeBusinessNumberAction } from '../../redux/action/action';

const MemberInfo = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const inputValue = useSelector(state => state);

   // eslint-disable-next-line no-unused-vars
   const [passwordConfirm, setPasswordConfirm] = React.useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);
   const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);
   const [businessNumberError, setBusinessNumberError] = React.useState('');

   const [finalCheck, setFinalCheck] = useState({
      idCheck: false,
      pwCheck: false,
      pwConfirmCheck: false,
      businessNumCheck: false
   });

   const [Certification, setCertification] = React.useState(false);

   const handleId = e => {
      dispatch(onChangeIdAction(e.target.value));
      // setId(e.target.value);

      const idRegex = /^[a-z0-9]{1,11}$/;

      if (idRegex.test(e.target.value)) {
         setIdError(false);
         setFinalCheck({ ...finalCheck, idCheck: false });
      } else {
         setIdError(true);
         setFinalCheck({ ...finalCheck, idCheck: true });
      }
   };

   const handlePassword = e => {
      dispatch(onChangePasswordAction(e.target.value));
      // setPassword(e.target.value);

      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;

      if (passwordRegex.test(e.target.value)) {
         setPasswordError(false);
         setFinalCheck({ ...finalCheck, pwCheck: false });
      } else {
         setPasswordError(true);
         setFinalCheck({ ...finalCheck, pwCheck: true });
      }
   };

   const handlePasswordConfirm = e => {
      setPasswordConfirm(e.target.value);
      if (inputValue?.userMemberReducer?.password !== e.target.value) {
         setPasswordConfirmError(true);
         setFinalCheck({ ...finalCheck, pwConfirmCheck: true });
      } else {
         setPasswordConfirmError(false);
         setFinalCheck({ ...finalCheck, pwConfirmCheck: false });
      }
   };

   const handleNumber = e => {
      dispatch(onChangeBusinessNumberAction(e.target.value));
   };

   // postBusinessNumber 사업자 오픈 api
   const postBusinessNumber = async () => {
      const token = 'Infuser e4ljz5QijI7ihKnKQFr3PfVxrppJxAQtNP4cqbykOX2d+nPayV9d8rkbaFEAi/v8JekzxSiy1uDD8cs1buEtSg==';
      try {
         const res = await axios.post(
            'https://api.odcloud.kr/api/nts-businessman/v1/status',
            {
               b_no: [inputValue.userMemberReducer.businessNumber]
            },
            {
               headers: {
                  Authorization: token
               }
            }
         );
         setBusinessNumberError(res?.data);

         if (res?.data?.data[0].tax_type_cd === '') {
            setCertification(true);
         } else {
            setCertification(false);
         }
      } catch (err) {
         console.log(err);
      }
   };

   const postMemberDataNavi = () => {
      const navMoveReg =
         !!inputValue?.userMemberReducer?.id &&
         !idError &&
         !!inputValue?.userMemberReducer?.password &&
         !passwordError &&
         !passwordConfirmError &&
         !Certification;

      console.log(
         !!inputValue?.userMemberReducer?.id,
         !idError,
         !!inputValue?.userMemberReducer?.password,
         !passwordError,
         !passwordConfirmError,
         Certification
      );

      if (navMoveReg) {
         navigate('/storeInfo');
      } else {
         postBusinessNumber();
         isValidate();
      }
      return;
   };

   const isValidate = () => {
      if (
         (inputValue?.userMemberReducer?.id === '' && !idError) ||
         (inputValue?.userMemberReducer?.password === '' && !passwordError)
      ) {
         setFinalCheck({
            ...finalCheck,
            idCheck: inputValue?.userMemberReducer?.id === '' ? true : false,
            pwCheck: inputValue?.userMemberReducer?.password === '' ? true : false,
            pwConfirmCheck: passwordConfirm === '' ? true : false,
            businessNumCheck: false
         });
      }
   };

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

                  <Info buttonError={finalCheck.idCheck} idError={idError}>
                     <p>아이디</p>
                     <FormControl
                        maxLength={11}
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        name="id"
                        value={inputValue?.userMemberReducer?.id ?? ''}
                        onChange={handleId}
                     />
                  </Info>
                  {idError && <span>영문(소문자), 숫자 포함해 주세요.</span>}
                  <InfoForm buttonError={finalCheck.pwCheck} passwordError={passwordError}>
                     <p>비밀번호</p>
                     <FormControl
                        value={inputValue?.userMemberReducer?.password ?? ''}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        onChange={handlePassword}
                     />
                  </InfoForm>
                  {passwordError && <span>영문, 숫자, 특수문자 포함 8자리 이상</span>}
                  <InfoFormError buttonError={finalCheck.pwConfirmCheck} passwordConfirmError={passwordConfirmError}>
                     <p>비밀번호 재확인</p>
                     <FormControl
                        value={passwordConfirm}
                        type="password"
                        placeholder="비밀번호를 재입력해주세요"
                        name="passwordConfirm"
                        onChange={handlePasswordConfirm}
                     />
                  </InfoFormError>
                  {passwordConfirmError && <span>확인 비밀번호가 다릅니다.</span>}
                  <InfoFormAuthComplete businessNumberError={Certification}>
                     <p>사업자번호 입력</p>
                     <CompanyNum>
                        <FormControl
                           type="text"
                           name="businessNumber"
                           placeholder="'-'제외 입력"
                           onChange={handleNumber}
                           value={inputValue?.userMemberReducer?.businessNumber ?? ''}
                        />
                        <BtnFill>
                           <Link onClick={postBusinessNumber}>인증하기</Link>
                        </BtnFill>
                     </CompanyNum>
                     <span>{businessNumberError && businessNumberError?.data[0].tax_type}</span>
                     <Btn onClick={postMemberDataNavi}>다음</Btn>
                  </InfoFormAuthComplete>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default MemberInfo;
