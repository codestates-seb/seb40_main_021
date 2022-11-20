import React, { useEffect, useState } from 'react';
import IconEdit from './../../../assets/img/icon_pencil.png'
import IconDelete from './../../../assets/img/icon_delete.png'
import * as S from './CategoryLi.style'

const CategoryLi = ({ active, name, placeholder, edit }) => {
    const editCategoryName = (e) => {
        console.log(e.target)
    }
    const [togglePatchCategory, setTogglePatchCategory] = useState(false)

    useEffect(() => {

    }, [togglePatchCategory])

    return (
        <S.CategoryLiSTyle active={active}>
            {active ?

                edit ?

                    togglePatchCategory ?
                        <>
                            <S.CategorySettingWarp>
                                <input type='text' value={name} readOnly={false} disabled={false} placeholder={placeholder} id='category' /> <button htmlFor='category' onClick={() => setTogglePatchCategory(!togglePatchCategory)}><img src={IconEdit} alt='edit' /></button>
                            </S.CategorySettingWarp>
                            <S.DeleteBtn ><img src={IconDelete} alt='delete category' /></S.DeleteBtn>
                        </>
                        :
                        <>
                            <S.CategorySettingWarp>
                                <input type='text' value={name} readOnly={true} disabled={true} placeholder={placeholder} id='category' /> <button htmlFor='category' onClick={() => setTogglePatchCategory(!togglePatchCategory)}><img src={IconEdit} alt='edit' /></button>
                            </S.CategorySettingWarp>
                            <S.DeleteBtn ><img src={IconDelete} alt='delete category' /></S.DeleteBtn>
                        </>

                    :
                    <>
                        <S.CategorySettingWarp>
                            <input type='text' className='edit' value={name} readOnly={true} disabled={true} placeholder={placeholder} id='category' />
                        </S.CategorySettingWarp>
                    </>

                :
                <S.CategorySettingWarp>

                    {name}
                </S.CategorySettingWarp>
            }

        </S.CategoryLiSTyle>
    );
};

export default CategoryLi;