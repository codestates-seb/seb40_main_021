/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
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

const MemberInfo = () => {
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
                     <p>아이디</p>
                     <FormControl type="text" placeholder="아이디를 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <p>비밀번호</p>
                     <FormControl type="password" placeholder="비밀번호를 입력해주세요" />
                  </InfoForm>

                  <InfoFormError>
                     <p>비밀번호 재확인</p>
                     <FormControl type="password" placeholder="비밀번호를 재입력해주세요" />
                     <span>확인 비밀번호가 다릅니다.</span>
                  </InfoFormError>

                  <InfoFormAuthComplete>
                     <p>사업자번호 입력</p>
                     <CompanyNum>
                        <FormControl type="text" placeholder="'-'제외 입력'" />
                        <BtnFill>
                           <Link to="/storeInfo">인증하기</Link>
                        </BtnFill>
                     </CompanyNum>
                     <span>인증이 완료되었습니다.</span>
                  </InfoFormAuthComplete>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default MemberInfo;
