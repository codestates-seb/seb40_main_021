import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuImg from '../../components/Menu/MenuImg';
import { Active, BtnDefault, BtnDefaultActive, BtnDefaultMobile, CompanyNum, Container, DivideLine, FormControl, ImagePreview, ImgRegBtn, InfoForm, MemberPanel, MemberReg, PageTitle, PanelTitle, RealUpload, Upload, Wrapper } from './StoreInfo.Style';


//가게 사진, 가게 설명, 주소, 전화번호, 영업시간

const StoreInfo = () => {
    
   const navigate = useNavigate();
   const [img, setImg] = useState();
   const [about, setAbout] = useState();
   const [address, Address] = useState();
   const [contactNumber, setContactNumber] = useState();
   const [businessHours, setBusinessHours] = useState();
 
   const postStoreInfo = async () => {
     try {
       await axios
         .post(
           `${process.env.REACT_APP_API_URL}/StoreInfo`,
           {
            img: img,
            about: about,
            address: address,
            contactNumber: contactNumber,
            businessHours: businessHours,
           },
         )
         .then((res) => navigate(`/StoreInfo/${res.data.id}`));
     } catch (err) {
       console.log(err);
     }
   };


   const [Number, setNumber] = React.useState('');
   const NumberError = e => {
      Number(e.target.value);

      const NumberRegex = /^[0-9]+$/;

      if (NumberRegex.test(e.target.value) || e.target.value === '') {
         NumberRegex(false);
         NumberError(false);
      } else {
         NumberRegex(true);
         setNumber(true)
      }
   };

   function getImageFiles(e) {
      const uploadFiles = [];
      const files = e.currentTarget.files;
      const imagePreview = document.querySelector('.image-preview');


      if ([...files].length >= 2) {
         alert('이미지는 최대 2개 까지 업로드가 가능합니다.');
         return;
      }

      // 파일 타입 검사
      [...files].forEach(file => {
         if (!file.type.match('image/.*')) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return;
         }

         // 파일 갯수 검사
         if ([...files].length < 2) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = e => {
               const preview = createElement(e, file);
               imagePreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
         }
      });
   }

   function createElement(e, file) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.setAttribute('src', e.target.result);
      img.setAttribute('data-file', file.name);
      li.appendChild(img);

      return li;
   }

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
                     <label>프로필 사진 등록</label>
                  </InfoForm>
                  <RealUpload
                  type="file"
                  accept="image/*"
                  required
                  multiple
                  handleValue={setImg} />
                  <MenuImg>
                     <Upload />
                     <ImagePreview />
                  </MenuImg>

                  <InfoForm>
                     <label>가게 설명 등록</label>
                     <FormControl
                     type="text"
                     placeholder="가게 설명을 입력해주세요"
                     handleValue={setAbout} />
                  </InfoForm>

                  <InfoForm>
                     <label>가게주소 *</label>
                     <CompanyNum>
                        <BtnDefault>우편번호 검색</BtnDefault>
                        <FormControl type="text" placeholder="도로명 주소 검색" />
                        <BtnDefaultMobile href="javascript:void(0)">
                           <img src="images/search.png" />
                        </BtnDefaultMobile>
                     </CompanyNum>
                     <FormControl type="text" placeholder="상세 주소를 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <label>가게 전화번호 *</label>
                     <FormControl type="text" placeholder="전화번호를 입력해주세요"  handleValue={setContactNumber}/>
                  </InfoForm>
                  {NumberError && <span>숫자만 입력해주세요</span>}
                  <InfoForm>
                     <label>가게 영업시간</label>
                     <FormControl type="text" placeholder="가게 영업시간을 작성해 주세요" handleValue={setBusinessHours} />
                  </InfoForm>

                  <ImgRegBtn>
                     <BtnDefaultActive>
                        <Link to="/complete" handleSubmit={postStoreInfo}>완료</Link>
                     </BtnDefaultActive>
                  </ImgRegBtn>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default StoreInfo;
