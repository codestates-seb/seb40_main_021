/* eslint-disable import/namespace */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const OrderNav = () => {
   const params = useSelector(store => store.stateReducer.params);
   return (
      <div className="orderNav-wrapper">
         <NavLink
            end
            to={`/usermenu/${params[0]}/${params[1]}/order`}
            className={({ isActive }) => (isActive ? 'active button' : 'button')}>
            <FontAwesomeIcon icon={faCartShopping} />
            장바구니
         </NavLink>
         <NavLink
            to={`/usermenu/${params[0]}/${params[1]}/order/list`}
            className={({ isActive }) => (isActive ? 'active button' : 'button')}>
            <FontAwesomeIcon icon={faUtensils} />
            주문한 내역
         </NavLink>
      </div>
   );
};
