import * as S from './MenuList.style';
import IconCheck from './../../assets/img/icon_recommend_check.png';
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
`;

const ImgList = styled.span`
   display: block;
   width: 133px;
   height: 133px;
   border-radius: 5px;
   overflow: hidden;
   background: ${p => (p.backimg ? `url(${p.backimg})` : 'null')};
   background-size: cover;
   background-position: center;
   @media screen and (max-width: 700px) {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      overflow: hidden;
   }
`;
const NoBackImg = styled.div`
   background-color: #d9d9d9;
   width: 133px;
   height: 133px;
   display: flex;
   align-items: center;
   border-radius: 5px;
   justify-content: center;
   & p {
      font-family: 'IBM Plex Sans KR', sans-serif;
      font-weight: 700;
      text-align: center;
   }
`;
const MenuViewList = ({ el }) => {
   return (
      <S.List>
         <S.ListLi>
            <PicWrap>
               {el.menuImage === '' ? (
                  <NoBackImg>
                     <p>
                        이미지를 <br />
                        준비중입니다.
                     </p>
                  </NoBackImg>
               ) : (
                  <ImgList backimg={el.menuImage} alt="menuImg" />
               )}
            </PicWrap>
            <S.InputWrap>
               <S.InputList>
                  <S.InputListWrap>
                     <p>메뉴이름</p>
                     <p className="menuListItem">{el.menuName}</p>
                  </S.InputListWrap>
                  <S.InputListWrap>
                     <p>가격</p>
                     <p className="menuListPrice">{el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                  </S.InputListWrap>
               </S.InputList>
               <S.InputList>
                  <S.InputListWrap>
                     <p>설명</p>
                     <p className="menuListAbout">{el.menuContent}</p>
                  </S.InputListWrap>
               </S.InputList>
            </S.InputWrap>
         </S.ListLi>
         <S.BottomListWarp>
            {el.recommendedMenu ? (
               <S.CheckboxWrap>
                  <img src={IconCheck} alt="recommendMenu" />
                  <S.LabelBox className="list">
                     추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span>
                  </S.LabelBox>
               </S.CheckboxWrap>
            ) : null}
         </S.BottomListWarp>
      </S.List>
   );
};

export default MenuViewList;
