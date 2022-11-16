import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const OrderNav = () => {
  return (
    <div className="orderNav-wrapper">
      <NavLink
        to="/order/cart"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        장바구니
      </NavLink>
      <NavLink
        to="/order/list"
        className={({ isActive }) => (isActive ? 'active button' : 'button')}
      >
        <FontAwesomeIcon icon={faUtensils} />
        주문한 내역
      </NavLink>
    </div>
  );
};
