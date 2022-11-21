import React from 'react';
import * as S from './CategoryLi.style'

const CategoryAdd = ({ placeholder, active }) => {
    return (
        <S.CategoryLiSTyle active={active}>
            <S.CategorySettingWarp>
                <input type='text' className='add' readOnly={false} disabled={false} placeholder={placeholder} id='category' />
            </S.CategorySettingWarp>
            <S.DeleteBtn className='add'>저장</S.DeleteBtn>
        </S.CategoryLiSTyle >
    );
};

export default CategoryAdd;