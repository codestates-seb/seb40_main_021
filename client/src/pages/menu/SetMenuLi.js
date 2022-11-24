import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuList from '../../components/Menu/MenuList';
import { menuSaveAndChangeAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';

const SetMenuLi = ({ submit, activeIndex }) => {

    const changeCategoryList = useSelector((store) => store.categoryUserItemReducer.data)

    const menuList = useSelector((store) => store.menuUserItemReducer.data)
    let categoryId

    if (changeCategoryList.length !== 0) {
        categoryId = changeCategoryList[activeIndex].categoryId
    }

    const { response, loading, error, clickFetchFunc } = useAxios(
        {
        }, false
    );
    // menuSaveAndChangeAdd
    useEffect(() => {
        clickFetchFunc({
            method: 'GET',
            url: `category/read/${categoryId}`,
        })

    }, [categoryId])
    const dispatch = useDispatch()
    useEffect(() => {
        response && dispatch(menuSaveAndChangeAdd(response))
    }, [categoryId])
    return (
        <>
            {menuList.map((el, idx) => <MenuList submit={submit} el={el} key={el.id} />)}
        </>
    );
};

export default SetMenuLi;