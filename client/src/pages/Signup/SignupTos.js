import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
   Active,
   AgreeDetailActive,
   AgreeTitle,
   Container,
   DivideLine,
   MemberPanel,
   MemberReg,
   PageTitle,
   PanelTitle,
   Wrapper,
   ImgContainer,
   Btn
} from './SignupTos.Style';
import topArrow from './../../assets/img/topArrow.png';
import bottomArrow from './../../assets/img/bottomArrow.png';
import ImageNotes from './../../assets/images/notes.png';

const SignupTos = () => {
   const navigate = useNavigate();

   const [isChecked, setIsChecked] = useState({
      agree1: false,
      agree2: false
   });

   const handleChange = e => {
      const { name, checked } = e.target;

      setIsChecked({
         ...isChecked,
         [name]: checked
      });
   };

   const onAlert = () => {
      if (!isChecked.agree1 || !isChecked.agree2) {
         alert('약관 체크를 해주세요');
         return;
      }
      navigate('/signup/1', { state: { agree1: isChecked.agree1, agree2: isChecked.agree2 } });
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
                  <Active></Active>
                  <li></li>
                  <li></li>
               </DivideLine>
               <MemberPanel>
                  <PanelTitle>
                     <h5>1. 개인정보 이용동의</h5>
                  </PanelTitle>
                  <AgreeTitle>
                     <input
                        type="checkbox"
                        id="check1"
                        name="agree1"
                        value={isChecked.agree1}
                        onChange={handleChange}
                     />
                     <label htmlFor="check1">
                        <h5>(필수) 개인정보 이용 동의서</h5>
                     </label>

                     {isChecked.agree1 ? (
                        <ImgContainer>
                           <img src={topArrow} alt="img" />
                        </ImgContainer>
                     ) : (
                        <ImgContainer>
                           <img src={bottomArrow} alt="img" />
                        </ImgContainer>
                     )}
                  </AgreeTitle>
                  {isChecked.agree1 ? (
                     <></>
                  ) : (
                     <AgreeDetailActive>
                        <h5>
                           제 1 조 (목적) 본 약관은 통계청이 운영하는 국가통계포털(KOSIS), 마이크로데이터서비스(MDIS),
                           국가지표체계(e-나라지표/국가주요지표), 통계지리정보서비스(SGIS+plus), 통계데이터센터의
                           통계정보 사이트 (이하 당 사이트)에서 제공하는 모든 서비스(이하 “서비스”)의 이용조건 및 절차,
                           이용자와 각 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다. 제 2
                           조 (약관의 효력과 변경) 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게
                           서비스를 제공하며, 당 사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본 약관을
                           우선적으로 적용하겠습니다. 당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된
                           약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된
                           약관에 동의하지 아니하는 경우 본인의 회원등록을 취소(회원 탈퇴)할 수 있으며, 계속 사용할
                           경우에는 약관 변경에 대한 암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력을
                           발휘합니다. 제 3 조 (약관외 준칙) 본 약관에 명시되지 않은 사항은 전기통신기본법,
                           전기통신사업법, 정보통신윤리위원회심의규정, 정보통신윤리강령, 저작권법 및 기타 관련 법령의
                           규정에 의합니다. 제 4 조 (용어의 정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                           이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자 회원 : 당 사이트에 개인 정보를
                           제공하여 회원 등록을 한 자로서, 당 사이트의 정보 및 서비스를 이용할 수 있는 자 아이디 : 당
                           사이트 회원가입 시 발급받은 회원의 신분을 증명하는 고유 코드 비밀번호 : 아이디에 대한 본인
                           여부를 확인하기 위하여 사용하는 문자, 숫자, 특수 문자등의 조합 가입 : 회원가입 시 제공하는
                           신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위 탈퇴
                           : 회원이 이용계약을 종료시키는 행위 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도
                           약관 및 이용규정에서 정의합니다.
                        </h5>
                     </AgreeDetailActive>
                  )}
                  <AgreeTitle>
                     <input
                        type="checkbox"
                        id="check2"
                        name="agree2"
                        value={isChecked.agree2}
                        onChange={handleChange}
                     />
                     <label htmlFor="check2">
                        <h5>(필수) 테스트정보 이용 동의서</h5>
                     </label>
                     {isChecked.agree2 ? (
                        <ImgContainer>
                           <img src={topArrow} alt="img" />
                        </ImgContainer>
                     ) : (
                        <ImgContainer>
                           <img src={bottomArrow} alt="img" />
                        </ImgContainer>
                     )}
                  </AgreeTitle>
                  {isChecked.agree2 ? (
                     <></>
                  ) : (
                     <AgreeDetailActive>
                        <h5>
                           제 1 조 (목적) 본 약관은 통계청이 운영하는 국가통계포털(KOSIS), 마이크로데이터서비스(MDIS),
                           국가지표체계(e-나라지표/국가주요지표), 통계지리정보서비스(SGIS+plus), 통계데이터센터의
                           통계정보 사이트 (이하 당 사이트)에서 제공하는 모든 서비스(이하 “서비스”)의 이용조건 및 절차,
                           이용자와 각 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다. 제 2
                           조 (약관의 효력과 변경) 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게
                           서비스를 제공하며, 당 사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본 약관을
                           우선적으로 적용하겠습니다. 당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된
                           약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된
                           약관에 동의하지 아니하는 경우 본인의 회원등록을 취소(회원 탈퇴)할 수 있으며, 계속 사용할
                           경우에는 약관 변경에 대한 암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력을
                           발휘합니다. 제 3 조 (약관외 준칙) 본 약관에 명시되지 않은 사항은 전기통신기본법,
                           전기통신사업법, 정보통신윤리위원회심의규정, 정보통신윤리강령, 저작권법 및 기타 관련 법령의
                           규정에 의합니다. 제 4 조 (용어의 정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                           이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자 회원 : 당 사이트에 개인 정보를
                           제공하여 회원 등록을 한 자로서, 당 사이트의 정보 및 서비스를 이용할 수 있는 자 아이디 : 당
                           사이트 회원가입 시 발급받은 회원의 신분을 증명하는 고유 코드 비밀번호 : 아이디에 대한 본인
                           여부를 확인하기 위하여 사용하는 문자, 숫자, 특수 문자등의 조합 가입 : 회원가입 시 제공하는
                           신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위 탈퇴
                           : 회원이 이용계약을 종료시키는 행위 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도
                           약관 및 이용규정에서 정의합니다.
                        </h5>
                     </AgreeDetailActive>
                  )}
                  <Btn onClick={onAlert} allChecked={isChecked.agree1 && isChecked.agree2}>
                     <Link to={null}>다음</Link>
                  </Btn>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default SignupTos;
