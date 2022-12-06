import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import MenuImg from '../../components/Menu/MenuImg';
import Postcode from '../../components/PostCode/Postcode';
import ImageNotes from './../../assets/images/notes.png';

import {
   Wrapper,
   Container,
   MemberReg,
   PageTitle,
   DivideLine,
   Active,
   MemberPanel,
   PanelTitle,
   Btn
} from './SignupTos.Style';
import { useSelector, useDispatch } from 'react-redux';
import { InfoForm, CompanyNum, FormControl } from './MemberInfo.Style';
import { onChangeIdAction, onChangePasswordAction, onChangeBusinessNumberAction } from '../../redux/action/action';

const StoreInfo = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const inputValue = useSelector(state => state);

   const [img, setImg] = useState('');
   const [businessName, setBusinessName] = useState('');
   const [about, setAbout] = useState();
   const [address, setAddress] = useState('');
   const [detailAddress, setDetailAddress] = useState('');

   const [contactNumber, setContactNumber] = useState('');
   const [businessHours, setBusinessHours] = useState();
   const [NumberError, setNumberError] = React.useState(false);

   const [isCheck, setIsCheck] = useState({
      businessNameError: false,
      address: false,
      detailAddress: false,
      contactNumber: false
   });

   useEffect(() => {
      if (inputValue.userMemberReducer.id === '' && inputValue.userMemberReducer.password === '') {
         alert('잘못된 접근입니다.');
         navigate('/signup', { replace: true });
         return;
      }
   }, []);

   const linkError = !(
      businessName === '' ||
      address === '' ||
      detailAddress === '' ||
      contactNumber === '' ||
      !/^\d{2,3}-\d{4}-\d{4}$/.test(contactNumber)
   );

   const postStoreInfo = async () => {
      try {
         onCheckValues();
         valiation();

         if (!linkError) {
            return;
         }

         await axios.post(`${API_BASE_URL}/member`, {
            loginId: inputValue.userMemberReducer.id,
            password: inputValue.userMemberReducer.password,
            businessNumber: inputValue.userMemberReducer.businessNumber,
            userImage: img,
            businessName: businessName,
            about: about,
            address: address,
            contactNumber: contactNumber,
            businessHours: businessHours
         });

         navigate('/signup/complete');

         dispatch(onChangeIdAction(''));
         dispatch(onChangePasswordAction(''));
         dispatch(onChangeBusinessNumberAction(''));
      } catch (err) {
         err;
      }
   };

   const handleNumber = e => {
      setContactNumber(e.target.value);
      setIsCheck({ ...isCheck, contactNumber: false });
      const ContactNumberRegex = /[0-9]{10,11}$/;

      if (!ContactNumberRegex.test(e.target.value) || e.target.value === '') {
         setNumberError(false);
      } else {
         setNumberError(true);
      }
   };

   const onCheckValues = () => {
      if (businessName === '' || address === '' || detailAddress === '' || contactNumber === '') {
         setIsCheck({
            ...isCheck,
            businessNameError: businessName === '' ? true : false,
            address: address === '' ? true : false,
            detailAddress: detailAddress === '' ? true : false,
            contactNumber: contactNumber === '' ? true : false
         });
      }
   };

   const valiation = () => {
      if (businessName === '') {
         alert('상호명을 입력해주세요.');
         return;
      }

      if (address === '') {
         alert('도로명 주소를 입력해주세요.');
         return;
      }

      if (detailAddress === '') {
         alert('가게 상세주소를 입력해주세요.');
         return;
      }

      if (contactNumber === '') {
         alert('가게 전화번호를 입력해주세요.');
         return;
      }

      if (!/^\d{2,3}-\d{4}-\d{4}$/.test(contactNumber)) {
         alert('올바른 가게 전화번호를 입력해주세요.');
         return;
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
                  <li></li>
                  <Active />
               </DivideLine>

               <MemberPanel>
                  <PanelTitle>
                     <h5>3. 가게 정보 입력</h5>
                     <span style={{ float: 'left' }}>* 고객에게 보여지는 페이지로 신중하게 입력해주세요.</span>
                  </PanelTitle>
                  <InfoForm>
                     <p>프로필 사진 등록</p>
                  </InfoForm>
                  <MenuImg type="file" accept="image/*" required multiple setImg={setImg} />

                  <InfoForm buttonError={isCheck.businessNameError} passwordError={businessName === '' ? true : false}>
                     <p>상호명 *</p>
                     <FormControl
                        type="text"
                        placeholder="상호명을 입력해주세요"
                        onChange={e => {
                           setBusinessName(e.target.value);
                           setIsCheck({ ...isCheck, businessNameError: false });
                        }}
                     />
                  </InfoForm>

                  <InfoForm>
                     <p>가게 설명 등록</p>
                     <FormControl
                        type="text"
                        placeholder="가게 설명을 입력해주세요"
                        onChange={e => setAbout(e.target.value)}
                     />
                  </InfoForm>

                  <InfoForm buttonError={isCheck.address} passwordError={address === '' ? true : false}>
                     <p>가게주소 *</p>
                     <CompanyNum>
                        <Postcode setAddress={setAddress} />
                        <FormControl
                           disabled
                           name="address"
                           type="text"
                           placeholder="도로명 주소 검색"
                           value={address}
                           onChange={e => {
                              setAddress(e.target.value);
                              setIsCheck({ ...isCheck, address: false });
                           }}
                        />
                     </CompanyNum>
                  </InfoForm>

                  <InfoForm buttonError={isCheck.detailAddress} passwordError={detailAddress === '' ? true : false}>
                     <FormControl
                        name="detailAddress"
                        type="text"
                        placeholder="상세 주소를 입력해주세요"
                        value={detailAddress}
                        onChange={e => {
                           setDetailAddress(e.target.value);
                           setIsCheck({ ...isCheck, detailAddress: false });
                        }}
                     />
                  </InfoForm>

                  <InfoForm buttonError={isCheck.contactNumber} passwordError={contactNumber === '' ? true : false}>
                     <p>가게 전화번호 *</p>
                     <FormControl
                        maxLength={13}
                        type="text"
                        name="number"
                        placeholder="전화번호를 입력해주세요"
                        onChange={handleNumber}
                        onInput={e => {
                           e.target.value = e.target.value
                              .replace(/[^0-9]/g, '')
                              .replace(/^(\d{2,3})(\d{4})(\d{4})$/, `$1-$2-$3`);
                        }}
                     />
                  </InfoForm>
                  {NumberError && <span>숫자만 입력해주세요</span>}
                  <InfoForm>
                     <p>가게 영업시간</p>
                     <FormControl
                        type="text"
                        placeholder="가게 영업시간을 작성해 주세요"
                        onChange={e => setBusinessHours(e.target.value)}
                     />
                  </InfoForm>

                  <Btn
                     allChecked={
                        !(businessName === '' || address === '' || detailAddress === '' || contactNumber === '')
                     }>
                     <Link to={null} onClick={postStoreInfo}>
                        완료
                     </Link>
                  </Btn>
               </MemberPanel>
            </MemberReg>
         </Container>
      </Wrapper>
   );
};

export default StoreInfo;
