/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import {
   Active,
   BtnDefault,
   BtnDefaultActive,
   BtnDefaultMobile,
   CompanyNum,
   Container,
   DivideLine,
   FormControl,
   ImagePreview,
   ImgReg,
   ImgRegBtn,
   InfoForm,
   MemberPanel,
   MemberReg,
   PageTitle,
   PanelTitle,
   RealUpload,
   Upload,
   Wrapper
} from './StoreInfo.Style';

const StoreInfo = () => {
   // function getImageFiles(e) {
   //    const uploadFiles = [];
   //    const files = e.currentTarget.files;
   //    const imagePreview = document.querySelector('.image-preview');
   //    const docFrag = new DocumentFragment();

   //    if ([...files].length >= 2) {
   //       alert('이미지는 최대 2개 까지 업로드가 가능합니다.');
   //       return;
   //    }

   //    // 파일 타입 검사
   //    [...files].forEach(file => {
   //       if (!file.type.match('image/.*')) {
   //          alert('이미지 파일만 업로드가 가능합니다.');
   //          return;
   //       }

   //       // 파일 갯수 검사
   //       if ([...files].length < 2) {
   //          uploadFiles.push(file);
   //          const reader = new FileReader();
   //          reader.onload = e => {
   //             const preview = createElement(e, file);
   //             imagePreview.appendChild(preview);
   //          };
   //          reader.readAsDataURL(file);
   //       }
   //    });
   // }

   // function createElement(e, file) {
   //    const li = document.createElement('li');
   //    const img = document.createElement('img');
   //    img.setAttribute('src', e.target.result);
   //    img.setAttribute('data-file', file.name);
   //    li.appendChild(img);

   //    return li;
   // }

   // const realUpload = document.querySelector(".real-upload");
   // const upload = document.querySelector(".upload");

   // upload.addEventListener("click", () => realUpload.click());

   // realUpload.addEventListener("change", getImageFiles);
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
                  <li></li>
                  <Active />
               </DivideLine>

               <MemberPanel>
                  <PanelTitle>
                     <h5>
                        3. 가게 정보 입력<span>* 고객에게 보여지는 페이지로 신중하게 입력해주세요.</span>
                     </h5>
                  </PanelTitle>

                  <InfoForm>
                     <p>프로필 사진 등록</p>
                  </InfoForm>
                  <RealUpload type="file" accept="image/*" required multiple />
                  <ImgReg>
                     <Upload />
                     <ImagePreview />
                  </ImgReg>

                  <InfoForm>
                     <p>가게 설명 등록</p>
                     <FormControl type="text" placeholder="가게 설명을 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <p>가게주소 *</p>
                     <CompanyNum>
                        <BtnDefault>우편번호 검색</BtnDefault>
                        <FormControl type="text" placeholder="도로명 주소 검색" />
                        <BtnDefaultMobile href="javascript:void(0)">
                           <img src="images/search.png" />
                        </BtnDefaultMobile>
                     </CompanyNum>
                     <FormControl type="text" placeholder="상세 주소를 입력해주세요'" />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 전화번호 *</p>
                     <FormControl type="text" placeholder="전화번호를 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 영업시간 *</p>
                     <FormControl type="text" placeholder="가게 영업시간을 작성해 주세요" />
                  </InfoForm>

                  <ImgRegBtn>
                     <BtnDefaultActive>
                        <Link to="/complete">완료</Link>
                     </BtnDefaultActive>
                  </ImgRegBtn>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default StoreInfo;
