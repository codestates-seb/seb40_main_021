import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faBell,
  faStore,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { BottomNavStyle } from '../../style/menu.style';

export const BottomNav = (modal) => {
  const navHandler = () => {
    modal.setIsModalOpen(true);
  };
  return (
    <BottomNavStyle>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faUtensils} />
        <p>메뉴</p>
      </NavLink>

      <button onClick={navHandler}>
        <FontAwesomeIcon icon={faBell} />
        <p>호출</p>
      </button>
      <NavLink
        to="/store"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faStore} />
        <p>가게정보</p>
      </NavLink>

      <NavLink
        to="/order/cart"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>주문목록</p>
      </NavLink>
    </BottomNavStyle>
  );
};
