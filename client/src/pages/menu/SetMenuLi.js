import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuList from '../../components/Menu/MenuList';
import { menuSaveAndChangeAdd } from '../../redux/action/action';
import { useAxios } from '../../util/useAxios';

const SetMenuLi = ({ submit, setSubmit, activeIndex }) => {

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
        console.log(`category/read/${categoryId}`)

    }, [changeCategoryList, activeIndex])
    const dispatch = useDispatch()
    const [, setUpdateState] = useState()
    const forceUpdate = useCallback(() => setUpdateState({}), [])
    useEffect(() => {
        console.log('이게 실행안되나?', response)
        response && dispatch(menuSaveAndChangeAdd(response))
    }, [response, activeIndex])

    useEffect(() => {
        forceUpdate()
    }, [response])

    console.log('업데이트')
    return (
        <>

            {menuList.map((el, idx) => <MenuList submit={submit} setSubmit={setSubmit} el={el} key={el.id} />)}
        </>
    );
};

export default SetMenuLi;