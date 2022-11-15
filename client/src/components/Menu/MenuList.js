import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import IconPhoto from './../../assets/img/icon_menu_photo.png'

const List = styled.li`
list-style: none;
width: 100%;
margin-bottom: 30px;
@media screen and (max-width: 700px) {
}
`
const ListLi = styled.div`
width: 100%;
display: flex;
@media screen and (max-width: 700px) {
    display: block;
}
`
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

const InputWrap = styled.div`
width: calc(100% - 133px);
@media screen and (max-width: 700px) {
    width: 100%;
}
`
const InputList = styled.div`
display: flex;
width: 100%;
margin-bottom: 16px;
&:first-child div:last-child{margin-left:36px;}
@media screen and (max-width: 700px) {
    display: block;
    &:first-child div:last-child{margin-left:0;}
}
`
const InputListWrap = styled.div`
width: 100%;

& p {
    font-size: 14px;
    margin-bottom: 8px;
}
@media screen and (max-width: 700px) {
    margin-bottom: 12px;
}
`
const CheckboxWrap = styled.div`
display:flex;
align-items: center;

`
const Checkbox = styled.input`
width: 12px;
height: 12px;
cursor: pointer;
`
const LabelBox = styled.label`
font-size: 13px;
margin-left:5px;
cursor: pointer;
& span{
    font-size: 10px;
    color: #787878;
    @media screen and (max-width: 700px) {
        display: block;
    }
}
`
const BottomListWarp = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 12px;
border-bottom: 1px solid #B8B8B8;
`
const DeleteBtnWarp = styled.button`
cursor: pointer;
text-decoration: underline;
font-size: 14px;
border: none;
background-color: transparent;
`

const MenuList = ({ idx }) => {
    const [imgSrc, setImageSrc] = useState('')
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
    return (
        <List>
            <ListLi>
                <PicWrap><p>사진</p><LabelPhoto background={imgSrc} htmlFor={`picture${idx}`}><img src={IconPhoto} alt='add' /></LabelPhoto><input onChange={(e) => encodeFileToBase64(e.target.files[0])} type='file' name={`picture${idx}`} id={`picture${idx}`} /></PicWrap>
                <InputWrap>
                    <InputList>
                        <InputListWrap>
                            <p>메뉴이름</p>
                            <Input value={''} handleValue={''} width={'100%'} />
                        </InputListWrap>
                        <InputListWrap>
                            <p>가격</p>
                            <Input value={''} handleValue={''} width={'100%'} />
                        </InputListWrap>
                    </InputList>
                    <InputList>
                        <InputListWrap>
                            <p>설명</p>
                            <Input value={''} handleValue={''} width={'100%'} />
                        </InputListWrap>
                    </InputList>
                </InputWrap>
            </ListLi>
            <BottomListWarp>
                <CheckboxWrap>
                    <Checkbox type='checkbox' id={`recommnd${idx}`} /><LabelBox htmlFor={`recommnd${idx}`} >추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span></LabelBox>
                </CheckboxWrap>
                <DeleteBtnWarp>삭제</DeleteBtnWarp>
            </BottomListWarp>

        </List>
    );
};

export default MenuList;