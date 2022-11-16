import * as S from './MenuList.style'
import Input from '../Input';
import MenuImg from './MenuImg';
const MenuList = ({ idx }) => {
    const handleValue = () => {

    }

    return (
        <S.List>
            <S.ListLi>
                <MenuImg idx={idx} />
                <S.InputWrap>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>메뉴이름</p>
                            <Input value={''} type="text" handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                        <S.InputListWrap>
                            <p>가격</p>
                            <Input value={''} type="text" handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                    </S.InputList>
                    <S.InputList>
                        <S.InputListWrap>
                            <p>설명</p>
                            <Input value={''} type="text" handleValue={handleValue} width={'100%'} placeholders="설명을 입력해주세요" />
                        </S.InputListWrap>
                    </S.InputList>
                </S.InputWrap>
            </S.ListLi>
            <S.BottomListWarp>
                <S.CheckboxWrap>
                    <S.Checkbox type='checkbox' id={`recommnd${idx}`} /><S.LabelBox htmlFor={`recommnd${idx}`} >추천메뉴 설정 <span>* 설정시 추천메뉴 표기가 활성화 됩니다.</span></S.LabelBox>
                </S.CheckboxWrap>
                <S.DeleteBtnWarp>삭제</S.DeleteBtnWarp>
            </S.BottomListWarp>

        </S.List>
    );
};

export default MenuList;