import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
   BtnIdCheck,
   BtnFill,
   CompanyNum,
   FormControl,
   InfoForm,
   InfoFormAuthComplete,
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
import ImageNotes from './../../assets/images/notes.png';
import { onChangeIdAction, onChangePasswordAction, onChangeBusinessNumberAction } from '../../redux/action/action';

const MemberInfo = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const inputValue = useSelector(state => state);

   const [passwordConfirm, setPasswordConfirm] = React.useState('');

   const [idError, setIdError] = React.useState(false);
   const [passwordError, setPasswordError] = React.useState(false);
   const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);
   const [businessNumberError, setBusinessNumberError] = React.useState('');

   const [idDuplicate, setIdDuplicate] = React.useState(0);

   const [finalCheck, setFinalCheck] = useState({
      idCheck: false,
      pwCheck: false,
      pwConfirmCheck: false,
      businessNumCheck: false
   });

   const [Certification, setCertification] = React.useState('');

   const valiation = () => {
      if (idDuplicate === 0) {
         alert('아이디 중복확인을 해주세요.');
         return;
      }

      if (idDuplicate === 409) {
         alert('이미 사용중인 아이디입니다.');
         return;
      }

      if (inputValue?.userMemberReducer?.id === '') {
         alert('아이디를 입력해주세요.');
         return;
      }

      if (inputValue?.userMemberReducer?.password === '') {
         alert('비밀번호를 입력해주세요.');
         return;
      }

      if (passwordConfirm === '') {
         alert('비밀번호 재확인을 입력해주세요.');
         return;
      }

      if (inputValue?.userMemberReducer?.businessNumber === '') {
         alert('사업자 번호를 입력해주세요.');
         return;
      }

      if (Certification === '국세청에 등록되지 않은 사업자등록번호입니다.') {
         alert('국세청에 등록되지 않은 사업자등록번호입니다.');
         return;
      }
   };

   const postMemberDataNavi = () => {
      const navMoveReg =
         idDuplicate !== 0 &&
         idDuplicate !== 409 &&
         inputValue?.userMemberReducer?.id !== '' &&
         !idError &&
         inputValue?.userMemberReducer?.password !== '' &&
         !passwordError &&
         inputValue?.userMemberReducer?.password === passwordConfirm &&
         Certification &&
         Certification !== '국세청에 등록되지 않은 사업자등록번호입니다.';

      valiation();

      if (navMoveReg) {
         navigate('/signup/2', {
            state: {
               next: true
            }
         });
      } else {
         isValidate();
      }
   };

   const handleId = e => {
      dispatch(onChangeIdAction(e.target.value));

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
      dispatch(onChangePasswordAction(e.target.value.replace(/ /g, '')));

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
      setPasswordConfirm(e.target.value.replace(/ /g, ''));
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
            setCertification(res?.data?.data[0].tax_type);
            setFinalCheck({ ...finalCheck, businessNumCheck: true });
         } else {
            setCertification(res?.data?.data[0].tax_type);
            setFinalCheck({ ...finalCheck, businessNumCheck: false });
         }
      } catch (err) {
         err;
      }
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
            businessNumCheck: inputValue?.userMemberReducer?.businessNumber === '' ? true : false
         });
      }
   };

   const handleDuplicate = async () => {
      try {
         await axios.post(`${API_BASE_URL}/member/check`, {
            loginId: inputValue.userMemberReducer.id
         });
         alert('사용가능한 아이디 입니다.');
         setIdDuplicate(200);
      } catch (err) {
         if (inputValue?.userMemberReducer?.id === '') {
            alert('아이디를 입력해주세요.');
            return;
         }
         if (err.response.status === 409) {
            alert('중복된 아이디 입니다.');
            setIdDuplicate(err.response.status);
            return;
         }
      }
   };

   return (
      <Wrapper>
         <Container>
            <MemberReg>
               <PageTitle>
                  <img src={ImageNotes} alt="img" />
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

                     <CompanyNum>
                        <FormControl
                           className="id-input"
                           maxLength={11}
                           type="text"
                           placeholder="아이디를 입력해주세요"
                           name="id"
                           value={inputValue?.userMemberReducer?.id ?? ''}
                           onChange={handleId}
                        />

                        <BtnIdCheck onClick={handleDuplicate}>
                           <span>아이디 확인</span>
                        </BtnIdCheck>
                     </CompanyNum>
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
                  <InfoForm buttonError={finalCheck.pwConfirmCheck} passwordConfirmError={passwordConfirmError}>
                     <p>비밀번호 재확인</p>
                     <FormControl
                        value={passwordConfirm}
                        type="password"
                        placeholder="비밀번호를 재입력해주세요"
                        name="passwordConfirm"
                        onChange={handlePasswordConfirm}
                     />
                  </InfoForm>
                  {passwordConfirmError && <span>확인 비밀번호가 다릅니다.</span>}
                  <InfoFormAuthComplete businessNumberError={finalCheck.businessNumCheck}>
                     <p>사업자번호 입력</p>
                     <CompanyNum>
                        <FormControl
                           maxLength={10}
                           type="text"
                           name="businessNumber"
                           placeholder="'-'제외 입력"
                           onChange={handleNumber}
                           value={inputValue?.userMemberReducer?.businessNumber ?? ''}
                        />
                        <BtnFill onClick={postBusinessNumber}>
                           <span>인증하기</span>
                        </BtnFill>
                     </CompanyNum>
                     <span>{businessNumberError && businessNumberError?.data[0].tax_type}</span>
                     <Btn
                        onClick={postMemberDataNavi}
                        allChecked={
                           !(
                              inputValue?.userMemberReducer?.id === '' ||
                              inputValue?.userMemberReducer?.password === '' ||
                              passwordConfirm === '' ||
                              Certification === ''
                           )
                        }>
                        다음
                     </Btn>
                  </InfoFormAuthComplete>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default MemberInfo;
