import { DetailedWrapper } from '../../style/menu.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { activate, putItem } from '../../redux/actions/menuAction';

export const MenuDetailed = () => {
  const modal = useRef();
  const dispatch = useDispatch();
  const isActive = useSelector((store) => store.activeReducer);
  const menuId = useSelector((store) => store.menuIdReducer);
  const menu = useSelector(
    (store) => store.menuReducer.menu.filter((menu) => menu.id === menuId)[0]
  );
  const [quantity, setQuantity] = useState(1);

  const closeModal = () => {
    modal.current.classList.remove('active');
    dispatch(activate(false));
  };

  const initModal = () => {
    modal.current.classList.remove('active');
    setTimeout(() => {
      modal.current.classList.add('active');
      setQuantity(1);
    }, 100);
  };

  useEffect(() => {
    if (menuId !== null) {
      initModal();
    }

    return () => {
      dispatch(activate(false));
    };
  }, [menuId]);

  const cartBtnHandler = () => {
    const data = {
      id: menu.id,
      name: menu.name,
      price: menu.price,
      quantity,
      img: menu.img,
    };
    // 서버에 요청 -> 카트에 item 저장
    console.log('menuDetail : ', data);

    dispatch(putItem(data));
    closeModal();
  };

  return (
    <DetailedWrapper ref={modal} className={isActive && 'active'}>
      <button onClick={closeModal}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div className="menu">
        <div className="inline">
          <h1>{menu && menu.name}</h1>
          <p>{menu && menu.price}원</p>
        </div>
        <p>{menu && menu.infoText}</p>
      </div>
      <div className="cart">
        <div className="quantity">
          수량
          <div className="btn">
            <button onClick={() => quantity !== 1 && setQuantity(quantity - 1)}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="total">
          총 금액 : {menu && quantity * menu.price}원
          <button onClick={cartBtnHandler}>담기</button>
        </div>
      </div>
    </DetailedWrapper>
  );
};
