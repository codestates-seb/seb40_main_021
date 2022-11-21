import * as S from './MenuList.style'
import Input from '../Input';
import MenuImg from './MenuImg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { menuUserUpdate, menuUserDelete, menuUserErrorMessage } from "../../redux/action/action";
import styled from 'styled-components';
import IconPhoto from './../../assets/img/icon_menu_photo.png'


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
`
const LabelPhoto = styled.label`
 width: 133px;
 height: 133px;
 background-color: #F4F4F4;
 border-bottom: ${(p) => (p.background === '' ? '4px solid #B6B6B6' : `none`)};
 background-image: ${(p) => (p.background === '' ? 'none' : `url(${p.background})`)};
 background-size: cover;
 background-position: center;
display: block;
position: relative;
cursor: pointer;
@media screen and (max-width: 700px) {
    width: 100px;
 height: 100px;
 border:none;
 border-radius: 5px;
}
& img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    display:  ${(p) => (p.background === '' ? 'block' : 'none')};
}
`
const MenuList = ({ el, submit }) => {

    const dispatch = useDispatch()
    const [imgSrc, setImageSrc] = useState('')
    const [menuNameChange, setmenuNameChange] = useState('')
    const [menuAboutChange, setmenuAboutChange] = useState('')
    const [pricesChange, setpricesChange] = useState('')
    const [checkedChange, setcheckedChange] = useState(false)

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    const [isError, setIsError] = useState(true);
    const [helperText, setHelperText] = useState({});


    //유효성
    const handleValue = (e) => {
        if (e.target.name === 'menuName') {
            const maxValue = 21
            if (maxValue && maxValue < e.target.value.length) return;
            if (e.target.value.length === maxValue) {
                setIsError(false);
                return setHelperText({ ...helperText, menuName: '20자까지 입력 가능합니다.' });
            }
            setHelperText({ ...helperText, menuName: '' });
            setmenuNameChange(e.target.value)
        }

        if (e.target.name === 'prices') {
            const number = /[^0-9]/
            const maxValue = 11
            if (number.test(e.target.value.replace(/,/gi, ''))) {
                setIsError(false);
                return setHelperText({ ...helperText, prices: '숫자만 입력해주세요.' });
            }
            if (e.target.value.length === maxValue) {
                setIsError(false);
                return setHelperText({ ...helperText, prices: '백만자리까지 입력 가능합니다.' });
            }
            setHelperText({ ...helperText, prices: '' });
            setpricesChange(e.target.value.replace(/[^\d]+/g, ''))
        }

        if (e.target.name === 'menuAbout') {
            const maxValue = 51
            if (maxValue && maxValue < e.target.value.length) return;
            if (e.target.value.length === maxValue) {
                setIsError(false);
                return setHelperText({ ...helperText, menuAbout: '50자까지 입력 가능합니다.' });
            }
            setHelperText({ ...helperText, menuAbout: '' });
            setmenuAboutChange(e.target.value)
        }

        if (e.target.name === 'recommnd') {
            setcheckedChange(e.target.checked)
        }
    }

    useEffect(() => {
        if (pricesChange[0] === '0') {
            const changePrice = pricesChange.substr(1);
            setpricesChange(changePrice)
        }
    }, [pricesChange])


    useEffect(() => {
        dispatch(menuUserUpdate(el.id, menuAboutChange, menuNameChange, imgSrc, pricesChange, checkedChange))
    }, [menuNameChange, menuAboutChange, pricesChange, imgSrc, checkedChange])

    useEffect(() => {
        dispatch(menuUserErrorMessage(el.id, helperText))
    }, [helperText])

    const DeleteMenu = (e) => {
        dispatch(menuUserDelete(el.id))
    }


    //number , 쉼표처리
    let number = pricesChange
    number = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");


    let menuNameError, pricesError, menuAboutError
    menuNameError = el.errorMessage.menuName === undefined ? false : el.errorMessage.menuName !== ''
    pricesError = el.errorMessage.prices === undefined ? false : el.errorMessage.prices !== ''
    menuAboutError = el.errorMessage.menuAbout === undefined ? false : el.errorMessage.menuAbout !== ''

    useEffect(() => {
        menuNameError = el.errorMessage.menuName === undefined ? false : el.errorMessage.menuName !== ''
        pricesError = el.errorMessage.prices === undefined ? false : el.errorMessage.prices !== ''
        menuAboutError = el.errorMessage.menuAbout === undefined ? false : el.errorMessage.menuAbout !== ''
    }, [submit])
    return (
        <S.List>
            <S.ListLi>
                <PicWrap><p>사진</p><LabelPhoto background={imgSrc} name={'menuImg'} onChange={(e) => handleValue(e)} htmlFor={`picture${el.id}`}><img src={IconPhoto} alt='add' /></LabelPhoto><input onChange={(e) => encodeFileToBase64(e.target.files[0])} type='file' name={`picture${el.id}`} id={`picture${el.id}`} /></PicWrap>
                <S.InputWrap>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>메뉴이름
                                <span>{menuNameError ? el.errorMessage.menuName : null}</span>
                            </p>
                            <Input value={menuNameChange} active={menuNameError} name={`menuName`} placeholder="메뉴 이름을 입력해주세요" type="text" idx={el.id} handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                        <S.InputListWrap>
                            <p>가격  <span>{pricesError ? el.errorMessage.prices : null}</span></p>

                            <Input name={`prices`} active={pricesError} value={number} placeholder="가격(숫자)을 입력해주세요" type="text" pattern="[0-9]*" handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                    </S.InputList>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>설명 <span>{menuAboutError ? el.errorMessage.menuAbout : null}</span></p>

                            <Input active={menuAboutError} name={`menuAbout`} value={menuAboutChange} placeholder="메뉴 설명을 입력해주세요" type='text' handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                    </S.InputList>
                </S.InputWrap>
            </S.ListLi>
            <S.BottomListWarp>
                <S.CheckboxWrap>
                    <S.Checkbox onChange={(e) => handleValue(e)} name="recommnd" type='checkbox' id={`recommnd${el.id}`} /><S.LabelBox htmlFor={`recommnd${el.id}`} >추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span></S.LabelBox>
                </S.CheckboxWrap>
                <S.DeleteBtnWarp onClick={(e) => DeleteMenu(e)}>삭제</S.DeleteBtnWarp>
            </S.BottomListWarp>

        </S.List>
    );
};

export default MenuList;