import { Link } from 'react-router-dom';
import { Wrapper } from './SignupTos.Style';
import {
   BtnDefaultActive,
   BtnFill,
   CompleteBtn,
   CompleteImg,
   CompletePanel,
   CompleteTxt,
   Container
} from './Complete.Style';
import ImageComplete from './../../assets/images/complete.png';

const Complete = () => {
   return (
      <Wrapper>
         <Container>
            <CompletePanel>
               <CompleteImg>
                  <img src={ImageComplete} alt="img" />
               </CompleteImg>
               <CompleteTxt>
                  <h4>가입을 환영합니다.</h4>
                  <h5>
                     로그인 후 qr코드를 이용한 메뉴판
                     <br />
                     서비스를 모두 이용하실 수 있습니다.
                  </h5>
               </CompleteTxt>
               <CompleteBtn>
                  <BtnDefaultActive>
                     <Link to="/">둘러보기</Link>
                  </BtnDefaultActive>
                  <BtnFill>
                     <Link to="/login">로그인</Link>
                  </BtnFill>
               </CompleteBtn>
            </CompletePanel>
         </Container>
      </Wrapper>
   );
};

export default Complete;
