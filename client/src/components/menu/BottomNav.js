import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

export const BottomNav = (modal) => {
  const navHandler = () => {
    modal.setIsModalOpen(true);
  };
  return (
    <div className="bottomNav-wrapper">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faBell} />
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
        <FontAwesomeIcon icon={faBell} />
        <p>가게정보</p>
      </NavLink>

      <NavLink
        to="/order/cart"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faBell} />
        <p>주문목록</p>
      </NavLink>
    </div>
  );
};
