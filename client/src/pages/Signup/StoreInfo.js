import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuImg from '../../components/Menu/MenuImg';
import Postcode from '../../components/PostCode/Postcode';
import {
   Active,
   BtnDefaultActive,
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
import { useSelector } from 'react-redux';
//가게 사진, 가게 설명, 주소, 전화번호, 영업시간
// 주소, 바디, 헤더
const StoreInfo = () => {
   const inputValue = useSelector(state => state);

   const postStoreInfo = async () => {
      const test = {
         loginId: inputValue.userMemberReducer.id,
         password: inputValue.userMemberReducer.password,
         businessNumber: inputValue.userMemberReducer.businessNumber,
         img: img,
         businessName: businessName,
         about: about,
         address: address,
         contactNumber: contactNumber,
         businessHours: businessHours
      };

      console.log(test);
      try {
         const res = await axios.post(`/member/join`, {
            loginId: inputValue.userMemberReducer.id,
            password: inputValue.userMemberReducer.password,
            businessNumber: inputValue.userMemberReducer.businessNumber,
            img: img,
            businessName: businessName,
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
   const [businessName, setBusinessName] = useState('');
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
                     <p>상호명 *</p>
                     <FormControl
                        type="text"
                        placeholder="상호명을 입력해주세요"
                        onChange={e => setBusinessName(e.target.value)}
                     />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 설명 등록</p>
                     <FormControl type="text" placeholder="가게 설명을 입력해주세요" onChange={e =>setAbout(e.target.value)} />
                  </InfoForm>

                  <InfoForm>
                     <p>가게주소 *</p>
                     <CompanyNum>
                        <Postcode setAddress={setAddress} />
                        <FormControl value={address} type="text" placeholder="도로명 주소 검색" />
                     </CompanyNum>

                     <FormControl type="text" placeholder="상세 주소를 입력해주세요" />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 전화번호 *</p>
                     <FormControl type="text" placeholder="전화번호를 입력해주세요" onChange={handleNumber} />
                  </InfoForm>
                  {NumberError && <span>숫자만 입력해주세요</span>}
                  <InfoForm>
                     <p>가게 영업시간</p>
                     <FormControl type="text" placeholder="가게 영업시간을 작성해 주세요" onChange={e =>setBusinessHours(e.target.value)} />
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
