import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuImg from '../../components/Menu/MenuImg';
import Postcode from '../../components/PostCode/Postcode';
import {
   Active,
   BtnDefaultActive,
   BtnDefaultMobile,
   CompanyNum,
   Container,
   DivideLine,
   FormControl,
   ImagePreview,
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

// npm install react-daum-postcode 설치 해주세요!

//가게 사진, 가게 설명, 주소, 전화번호, 영업시간
// 주소, 바디, 헤더
const StoreInfo = () => {
   const postStoreInfo = async () => {
      try {
         const res = await axios.post(`https://300c-118-103-212-116.jp.ngrok.io/member/join`, {
            img: img,
            about: about,
            address: address,
            contactNumber: contactNumber,
            businessHours: businessHours
         });
         console.log(res);
      } catch (err) {
         console.log(err);
      }
   };

   const [img, setImg] = useState();
   const [about, setAbout] = useState();
   const [address, setAddress] = useState();
   const [contactNumber, setContactNumber] = useState();
   const [businessHours, setBusinessHours] = useState();
   const [NumberError, setNumberError] = React.useState(false);

   const handleNumber = e => {
      setContactNumber(e.target.value);

      const ContactNumberRegex = /[0-9]$/;

      if (ContactNumberRegex.test(e.target.value) || e.target.value === '') {
         setNumberError(false);
      } else {
         setNumberError(true);
      }
   };

   // const realUpload = document.querySelector(".real-upload");
   // const upload = document.querySelector(".upload");

   // upload.addEventListener("click", () => realUpload.click());

   // realUpload.addEventListener("change", getImageFiles);

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
                  <li></li>
                  <Active />
               </DivideLine>

               <MemberPanel>
                  <PanelTitle>
                     <h5>
                        3. 가게 정보 입력
                        <span>* 고객에게 보여지는 페이지로 신중하게 입력해주세요.</span>
                     </h5>
                  </PanelTitle>

                  <InfoForm>
                     <p>프로필 사진 등록</p>
                  </InfoForm>
                  <RealUpload type="file" accept="image/*" required multiple onChange={setImg} />
                  <MenuImg>
                     <Upload />
                     <ImagePreview />
                  </MenuImg>

                  <InfoForm>
                     <p>가게 설명 등록</p>
                     <FormControl type="text" placeholder="가게 설명을 입력해주세요" onChange={setAbout} />
                  </InfoForm>

                  <InfoForm>
                     <p>가게주소 *</p>
                     <CompanyNum>
                        <Postcode setAddress={setAddress} />
                        <FormControl value={address} type="text" placeholder="도로명 주소 검색" />

                        <BtnDefaultMobile href="">
                           <img src="images/search.png" alt="img" />
                        </BtnDefaultMobile>
                     </CompanyNum>

                     <FormControl type="text" placeholder="상세 주소를 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 전화번호 *</p>
                     <FormControl
                        type="text"
                        placeholder="전화번호를 입력해주세요"
                        onChange={setContactNumber}
                        handleValue={handleNumber}
                     />
                  </InfoForm>
                  {NumberError && <span>숫자만 입력해주세요</span>}
                  <InfoForm>
                     <p>가게 영업시간</p>
                     <FormControl type="text" placeholder="가게 영업시간을 작성해 주세요" onChange={setBusinessHours} />
                  </InfoForm>

                  <ImgRegBtn>
                     <BtnDefaultActive>
                        <Link to="/complete" onClick={postStoreInfo}>
                           완료
                        </Link>
                     </BtnDefaultActive>
                  </ImgRegBtn>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default StoreInfo;
