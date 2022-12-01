/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBell, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BottomNavStyle } from '../../style/menu.style';

export const BottomNavPreview = () => {
   return (
      <BottomNavStyle>
         <a className={'active button'}>
            <FontAwesomeIcon icon={faUtensils} />
            <p>메뉴</p>
         </a>

         <button>
            <FontAwesomeIcon icon={faBell} />
            <p>호출</p>
         </button>
         <a className="button">
            <FontAwesomeIcon icon={faStore} />
            <p>가게정보</p>
         </a>

         <a className="button class이상">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>주문목록</p>
         </a>
      </BottomNavStyle>
   );
};
