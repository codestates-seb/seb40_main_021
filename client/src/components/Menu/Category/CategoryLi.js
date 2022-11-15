import React from 'react';
import styled from 'styled-components';
import IconEdit from './../../../assets/img/icon_pencil.png'
import IconDelete from './../../../assets/img/icon_delete.png'

const CategoryLiSTyle = styled.li`
cursor:${(p) => (p.active ? 'defult' : 'pointer')};
padding: 13px 16px;
background-color : ${(p) => (p.active ? 'white' : '#FF6B00')};
display: flex;
color: white;
font-weight: 500;
text-align: center;
align-items: center;
border-radius: 10px 10px 0 0;
justify-content: space-between;
@media screen and (max-width: 700px) {
font-size: 14px;
}

`
const CategorySettingWarp = styled.div`
display: flex;
white-space: nowrap;
align-items: center;
& input:disabled{
    background-color: transparent;
    border: none;
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    padding: 0;
    width: 100px;
    display: inline-block;
    @media screen and (max-width: 700px) {
font-size: 14px;
}
}
& button{
    border: none;
    padding: 0;
    background-color: transparent;
    margin-left: 6px;
    margin-right: 20px;
    cursor: pointer;
}
`
const DeleteBtn = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
padding: 0;
`
const CategoryLi = ({ active, name, placeholder }) => {
    const editCategoryName = (e) => {
        console.log(e.target)
    }
    return (
        <CategoryLiSTyle active={active}>
            {active ?
                <>
                    <CategorySettingWarp>
                        <input type='text' value={name} readOnly={true} disabled={true} placeholder={placeholder} id='category' /> <button htmlFor='category' onClick={(e) => editCategoryName(e)}><img src={IconEdit} alt='edit' /></button>
                    </CategorySettingWarp>
                    <DeleteBtn><img src={IconDelete} alt='delete category' /></DeleteBtn>
                </>
                :
                <CategorySettingWarp>

                    {name}
                </CategorySettingWarp>
            }

        </CategoryLiSTyle>
    );
};

export default CategoryLi;