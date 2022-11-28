import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBell, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { BottomNavStyle } from '../../style/menu.style';

export const BottomNavPreview = () => {
   return (
      <BottomNavStyle>
         <NavLink className={'active button'}>
            <FontAwesomeIcon icon={faUtensils} />
            <p>메뉴</p>
         </NavLink>

         <button>
            <FontAwesomeIcon icon={faBell} />
            <p>호출</p>
         </button>
         <NavLink className="button">
            <FontAwesomeIcon icon={faStore} />
            <p>가게정보</p>
         </NavLink>

         <NavLink className="button">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>주문목록</p>
         </NavLink>
      </BottomNavStyle>
   );
};
