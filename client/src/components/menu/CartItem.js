import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMenu,
  minusQuantity,
  plusQuantity,
} from '../../redux/actions/menuAction';

export const CartItem = ({ data }) => {
  const cart = useSelector((store) => store.menuReducer.cart);
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    const fetchData = cart.filter((menu) => menu.id !== data.id);
    dispatch(deleteMenu(fetchData));
  };

  const minusBtnHandler = () => {
    console.log(data.id);
    if (data.quantity > 1) {
      dispatch(minusQuantity({ id: data.id }));
    }
  };

  const plusBtnHandler = () => {
    console.log(data.id);

    dispatch(plusQuantity({ id: data.id }));
  };
  return (
    <li className="stored-menu">
      <div className="left">
        <div className="imgBox">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="menuTxt">
          <h2>{data.name}</h2>
          <p>{data.price * data.quantity}원</p>
        </div>
      </div>
      <div className="right">
        <button className="delete" onClick={deleteBtnHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="quantity">
          <button onClick={minusBtnHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p>{data.quantity}</p>
          <button onClick={plusBtnHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </li>
  );
};
