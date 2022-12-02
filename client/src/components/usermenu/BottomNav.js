import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBell, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import { BottomNavStyle } from '../../style/menu.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setParams } from '../../redux/actions/menuAction';

export const BottomNav = modal => {
   const cart = useSelector(store => store.menuReducer.cart);
   const params = useParams()['*'].split('/');
   const dispatch = useDispatch();

   // 팝업 보여주기
   const navHandler = () => {
      modal.setIsModalOpen(true);
   };

   useEffect(() => {
      dispatch(setParams(params));
   });

   return (
      <BottomNavStyle>
         <NavLink
            end
            to={`/usermenu/${params[0]}/${params[1]}`}
            className={({ isActive }) => (isActive ? 'active button' : 'button')}>
            <FontAwesomeIcon icon={faUtensils} />
            <p>메뉴</p>
         </NavLink>

         <button onClick={navHandler}>
            <FontAwesomeIcon icon={faBell} />
            <p>호출</p>
         </button>
         <NavLink
            to={`/usermenu/${params[0]}/${params[1]}/store`}
            className={({ isActive }) => (isActive ? 'active button' : 'button')}>
            <FontAwesomeIcon icon={faStore} />
            <p>가게정보</p>
         </NavLink>

         <NavLink
            to={`/usermenu/${params[0]}/${params[1]}/order`}
            className={({ isActive }) => (isActive ? 'active button' : 'button')}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cart.length > 0 && <span className="cartCount">{cart.length}</span>}
            <p>주문목록</p>
         </NavLink>
      </BottomNavStyle>
   );
};
