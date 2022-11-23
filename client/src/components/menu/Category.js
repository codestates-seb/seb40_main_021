import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateCategory, setMenu } from '../../redux/actions/menuAction';

export const Category = ({ data }) => {
  const active = useSelector((store) => store.stateReducer.category);
  const dispatch = useDispatch();

  // 클릭한 카테고리 저장
  const categoryHandler = async () => {
    dispatch(activateCategory(data.categoryId));
  };

  // 카테고리별 메뉴목록 불러오기
  useEffect(() => {
    axios
      .get(`/category/read/${active}`)
      .then((res) => {
        const menus = res.data.data.menus;
        dispatch(setMenu(menus));
      })
      .catch((err) => console.log(err));
  }, [active]);

  return (
    <li>
      <button
        onClick={categoryHandler}
        className={active === data.categoryId ? 'active' : null}
      >
        {data.categoryName}
      </button>
    </li>
  );
};
