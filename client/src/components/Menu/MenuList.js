import * as S from './MenuList.style';
import Input from '../Input';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { menuUserUpdate, menuUserDelete, menuUserErrorMessage, setMenuUpdate } from '../../redux/action/action';
import styled from 'styled-components';
import IconPhoto from './../../assets/img/icon_menu_photo.png';

const PicWrap = styled.div`
   width: 133px;
   margin-right: 25px;
   & p {
      font-size: 14px;
      margin-bottom: 8px;
   }
   & input {
      display: none;
   }
   @media screen and (max-width: 700px) {
      width: 100%;
      margin-bottom: 13px;
   }
`;
const LabelPhoto = styled.label`
   width: 133px;
   height: 133px;
   background-color: #f4f4f4;
   border-bottom: ${p => (p.background === '' ? '2px solid #B6B6B6' : `none`)};
   background-image: ${p => (p.background === '' ? 'none' : `url(${p.background})`)};
   background-size: cover;
   background-position: center;
   display: block;
   position: relative;
   cursor: pointer;
   border-radius: 5px;
   overflow: hidden;
   @media screen and (max-width: 700px) {
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 5px;
   }
   & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      display: ${p => (p.background === '' ? 'block' : 'none')};
   }
`;
const MenuList = ({ el, submit, setSubmit }) => {
   const dispatch = useDispatch();

   const [imgSrc, setImageSrc] = useState(el.menuImage);
   const [menuNameChange, setmenuNameChange] = useState(el.menuName);
   const [menuAboutChange, setmenuAboutChange] = useState(el.menuContent);
   const [pricesChange, setpricesChange] = useState(el.price);
   const [checkedChange, setcheckedChange] = useState(false);

   const encodeFileToBase64 = fileBlob => {
      const reader = new FileReader();
      const maxSize = 40000;
      if (fileBlob.size > maxSize) {
         alert('이미지 용량은 40KB까지로 제한됩니다.');
      } else {
         reader.readAsDataURL(fileBlob);
         return new Promise(resolve => {
            reader.onload = () => {
               setImageSrc(reader.result);
               resolve();
            };
         });
      }
   };

   const [, setIsError] = useState(true);
   const [helperText, setHelperText] = useState({});

   //유효성
   const handleValue = e => {
      dispatch(setMenuUpdate(true));
      if (e.target.name === 'menuName') {
         const maxValue = 21;
         if (maxValue && maxValue < e.target.value.length) return;
         if (e.target.value.length === maxValue) {
            setIsError(false);
            return setHelperText({ ...helperText, menuName: '20자까지 입력 가능합니다.' });
         }
         setHelperText({ ...helperText, menuName: '' });
         setmenuNameChange(e.target.value);
      }

      if (e.target.name === 'prices') {
         const number = /[^0-9]/;
         const maxValue = 11;
         if (number.test(e.target.value.replace(/,/gi, ''))) {
            setIsError(false);
            return setHelperText({ ...helperText, price: '숫자만 입력해주세요.' });
         }
         if (e.target.value.length === maxValue) {
            setIsError(false);
            return setHelperText({ ...helperText, price: '백만자리까지 입력 가능합니다.' });
         }
         setHelperText({ ...helperText, price: '' });
         setpricesChange(e.target.value.replace(/[^\d]+/g, ''));
      }

      if (e.target.name === 'menuAbout') {
         const maxValue = 51;
         if (maxValue && maxValue < e.target.value.length) return;
         if (e.target.value.length === maxValue) {
            setIsError(false);
            return setHelperText({ ...helperText, menuContent: '50자까지 입력 가능합니다.' });
         }
         setHelperText({ ...helperText, menuContent: '' });
         setmenuAboutChange(e.target.value);
      }

      if (e.target.name === 'recommnd') {
         setcheckedChange(e.target.checked);
      }
   };

   useEffect(() => {
      if (pricesChange[0] === '0') {
         const changePrice = pricesChange.substr(1);
         setpricesChange(changePrice);
      }
   }, [pricesChange]);

   useEffect(() => {
      dispatch(menuUserUpdate(el.uuid, menuAboutChange, menuNameChange, imgSrc, pricesChange, checkedChange));
   }, [menuNameChange, menuAboutChange, pricesChange, imgSrc, checkedChange]);

   useEffect(() => {
      dispatch(menuUserErrorMessage(el.uuid, helperText));
   }, [helperText]);

   const DeleteMenu = () => {
      if (confirm('메뉴를 삭제하시겠습니까?')) {
         dispatch(setMenuUpdate(true));
         dispatch(menuUserDelete(el.uuid));
      }
   };

   //number , 쉼표처리
   // useEffect(() => {
   //     number = pricesChange.toString()
   //     number = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
   //     // setpricesChange(String(pricesChange).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
   // }, [pricesChange])
   // .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g);
   let number = pricesChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   // let number = pricesChange.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

   let menuNameError, pricesError, menuAboutError;
   menuNameError = el.errorMessage.menuName === undefined ? false : el.errorMessage.menuName !== '';
   pricesError = el.errorMessage.price === undefined ? false : el.errorMessage.price !== '';
   menuAboutError = el.errorMessage.menuContent === undefined ? false : el.errorMessage.menuContent !== '';

   useEffect(() => {
      menuNameError = el.errorMessage.menuName === undefined ? false : el.errorMessage.menuName !== '';
      pricesError = el.errorMessage.price === undefined ? false : el.errorMessage.price !== '';
      menuAboutError = el.errorMessage.menuContent === undefined ? false : el.errorMessage.menuContent !== '';

      if (menuNameError || pricesError || menuAboutError) {
         setSubmit('업데이트2');
      }
   }, [submit]);
   return (
      <S.List>
         <S.ListLi>
            <PicWrap>
               <p>사진</p>
               <LabelPhoto
                  background={imgSrc}
                  name={'menuImg'}
                  onChange={e => handleValue(e)}
                  htmlFor={`picture${el.uuid}`}>
                  <img src={IconPhoto} alt="add" />
               </LabelPhoto>
               <input
                  onChange={e => encodeFileToBase64(e.target.files[0])}
                  type="file"
                  name={`picture${el.uuid}`}
                  id={`picture${el.uuid}`}
               />
            </PicWrap>
            <S.InputWrap>
               <S.InputList>
                  <S.InputListWrap>
                     <p>
                        메뉴이름
                        <span>{menuNameError ? el.errorMessage.menuName : null}</span>
                     </p>
                     <Input
                        value={menuNameChange || ''}
                        active={menuNameError}
                        name={`menuName`}
                        placeholder="메뉴 이름을 입력해주세요"
                        type="text"
                        idx={el.uuid}
                        handleValue={handleValue}
                        width={'100%'}
                        placeholders="설명을 입력해주세요"
                     />
                  </S.InputListWrap>
                  <S.InputListWrap>
                     <p>
                        가격 <span>{pricesError ? el.errorMessage.price : null}</span>
                     </p>

                     <Input
                        name={`prices`}
                        active={pricesError}
                        value={number || ''}
                        placeholder="가격(숫자)을 입력해주세요"
                        type="text"
                        pattern="[0-9]*"
                        handleValue={handleValue}
                        width={'100%'}
                        placeholders="설명을 입력해주세요"
                     />
                  </S.InputListWrap>
               </S.InputList>
               <S.InputList>
                  <S.InputListWrap>
                     <p>
                        설명 <span>{menuAboutError ? el.errorMessage.menuContent : null}</span>
                     </p>

                     <Input
                        active={menuAboutError}
                        name={`menuAbout`}
                        value={menuAboutChange || ''}
                        placeholder="메뉴 설명을 입력해주세요"
                        type="text"
                        handleValue={handleValue}
                        width={'100%'}
                        placeholders="설명을 입력해주세요"
                     />
                  </S.InputListWrap>
               </S.InputList>
            </S.InputWrap>
         </S.ListLi>
         <S.BottomListWarp>
            <S.CheckboxWrap>
               <S.Checkbox
                  onChange={e => handleValue(e)}
                  name="recommnd"
                  type="checkbox"
                  id={`recommnd${el.uuid}`}
                  checked={checkedChange || false}
               />
               <S.LabelBox htmlFor={`recommnd${el.uuid}`}>
                  추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span>
               </S.LabelBox>
            </S.CheckboxWrap>
            <S.DeleteBtnWarp onClick={e => DeleteMenu(e)}>삭제</S.DeleteBtnWarp>
         </S.BottomListWarp>
      </S.List>
   );
};

export default MenuList;
