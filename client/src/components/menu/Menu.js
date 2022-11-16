import { useDispatch } from 'react-redux';
import { activate, saveMenuId } from '../../redux/actions/menuAction';

export const Menu = ({ menu }) => {
  const dispatch = useDispatch();

  const selectHandler = () => {
    dispatch(saveMenuId(menu.id));
    dispatch(activate(true));
  };
  return (
    <li>
      <button value={menu.id} onClick={selectHandler}>
        <div className="menuImgBox">
          <img src={menu.img} alt={menu.name} />
        </div>
        <div className="menuTxtBox">
          <div className="inline">
            <h2>{menu.name}</h2>
            {menu.like && <span>인기</span>}
          </div>
          <p>{menu.price}원</p>
        </div>
      </button>
    </li>
  );
};
