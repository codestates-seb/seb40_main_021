import * as S from './MenuList.style'
import IconCheck from './../../assets/img/icon_recommend_check.png';
import Img from './../../assets/img/defeultPic.png';
import styled from 'styled-components';

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

const ImgList = styled.span`
 display: block;
        width: 133px;
        height: 133px;
        background: ${(p) => (p.backimg ? `url(${p.backimg})` : 'null')};
        background-size: cover;
        background-position: 100% 100%;
        @media screen and (max-width: 700px) {
            width: 100px;
        height: 100px;
        border-radius: 5px;
        overflow: hidden;
        }


`
const MenuViewList = ({ el }) => {
    return (
        <S.List>
            <S.ListLi>
                <PicWrap><p>사진</p>
                    {
                        el.menuImg === '' ?
                            <ImgList backimg={Img} alt='menuImg' />
                            :
                            <ImgList backimg={el.menuImg} alt='menuImg' />
                    }
                </PicWrap>
                <S.InputWrap>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>메뉴이름</p>
                            <p className='menuListItem'>{el.menuName}</p>
                        </S.InputListWrap>
                        <S.InputListWrap>
                            <p>가격</p>
                            <p className='menuListPrice'>{el.prices}</p>
                        </S.InputListWrap>
                    </S.InputList>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>설명</p>
                            <p className='menuListAbout'>{el.about}</p>
                        </S.InputListWrap>
                    </S.InputList>
                </S.InputWrap>
            </S.ListLi>
            <S.BottomListWarp>
                {
                    el.recommend ?
                        <S.CheckboxWrap>
                            <img src={IconCheck} alt='recommendMenu' /><S.LabelBox className='list' >추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span></S.LabelBox>
                        </S.CheckboxWrap>
                        :
                        null
                }

            </S.BottomListWarp>

        </S.List>
    );
};

export default MenuViewList;