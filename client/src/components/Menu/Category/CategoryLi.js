import React, { useEffect, useRef, useState } from 'react';
import IconEdit from './../../../assets/img/icon_pencil.png'
import IconDelete from './../../../assets/img/icon_delete.png'
import * as S from './CategoryLi.style'
import { useDispatch, useSelector } from 'react-redux';
import { setUserCategoryNaming, setUserCategoryNowNaming, setUserDeleteCategory, setUserModifyCategory } from '../../../redux/action/action';

const CategoryLi = ({ placeholder, edit, el, active, idx, setActiveIndex }) => {
    const { uuid, categoryName } = el

    const state = useSelector((store) => store.categoryUserItemReducer)
    const categoryAddName = state.input.categoryName;

    const dispatch = useDispatch()
    const editCategoryName = (e) => {
        const value = e.target.value
        dispatch(setUserCategoryNaming(
            value
        ))
    }
    const [togglePatchCategory, setTogglePatchCategory] = useState(true)

    const setPatchCategory = () => {

        if (togglePatchCategory) {
            dispatch(setUserCategoryNowNaming(uuid))
            setTogglePatchCategory(!togglePatchCategory);
        } else {
            if (!categoryAddName || !categoryAddName.trim()) {
                return alert('카테고리 이름을 작성하세요.');

            } else {
                dispatch(setUserModifyCategory(uuid, categoryAddName))
                dispatch(setUserCategoryNaming(''))
                setTogglePatchCategory(!togglePatchCategory);
            }
        }
    }

    const CategorytRef = useRef();
    const CategorytModifyRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (CategorytRef.current && CategorytModifyRef.current && !CategorytRef.current.contains(e.target) && !CategorytModifyRef.current.contains(e.target)) {
                if (window.confirm('카테고리 수정을 취소하시겠습니까?')) {
                    setTogglePatchCategory(true);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [CategorytRef]);

    const DeleteCategory = (e) => {
        e.stopPropagation();
        if (idx !== 0) {
            setActiveIndex(idx - 1)
        }
        dispatch(setUserDeleteCategory(uuid))
    }
    const onTitleClick = () => {
        setActiveIndex(idx);
    };
    return (
        <S.CategoryLiSTyle active={active} onClick={onTitleClick}>
            {active ?

                edit ?
                    <>
                        <S.CategorySettingWarp>
                            {
                                togglePatchCategory ? categoryName : <input type='text' ref={CategorytRef} value={categoryAddName} id={uuid} onChange={(e) => editCategoryName(e)} readOnly={togglePatchCategory} disabled={togglePatchCategory} placeholder={placeholder} />
                            }
                            <button htmlFor='category' ref={CategorytModifyRef} id={uuid} value={categoryName} onClick={(e) => { setPatchCategory(e) }}><img src={IconEdit} alt='edit' /></button>
                        </S.CategorySettingWarp>
                        <S.DeleteBtn onClick={(e) => DeleteCategory(e)}><img src={IconDelete} alt='delete category' /></S.DeleteBtn>
                    </>

                    :
                    <>
                        <S.CategorySettingWarp >
                            {categoryName}
                        </S.CategorySettingWarp>
                    </>

                :
                <S.CategorySettingWarp  >
                    {categoryName}
                </S.CategorySettingWarp>
            }

        </S.CategoryLiSTyle>
    );
};

export default CategoryLi;