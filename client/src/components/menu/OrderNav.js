import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

export const OrderNav = () => {
  return (
    <div className="orderNav-wrapper">
      <NavLink
        to="/order/cart"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faBell} />
        장바구니
      </NavLink>
      <NavLink
        to="/order/list"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faBell} />
        주문한 내역
      </NavLink>
    </div>
  );
};
