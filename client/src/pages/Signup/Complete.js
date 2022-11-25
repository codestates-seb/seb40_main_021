import { Link } from 'react-router-dom';
import {
   BtnDefaultActive,
   BtnFill,
   CompleteBtn,
   CompleteImg,
   CompletePanel,
   CompleteTxt,
   Container,
   Wrapper
} from './Complete.Style';

const Complete = () => {
   return (
      <Wrapper>
         <Container>
            <CompletePanel>
               <CompleteImg>
                  <img src="images/complete.png" alt="img" />
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
                  <BtnDefaultActive>둘러보기</BtnDefaultActive>
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
