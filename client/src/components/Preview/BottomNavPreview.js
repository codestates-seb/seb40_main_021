/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBell, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BottomNavStyle } from '../../style/menu.style';

export const BottomNavPreview = ({ now }) => {
   return (
      <BottomNavStyle>
         <a className={now === 'menu' ? 'active button' : 'button preview'}>
            <FontAwesomeIcon icon={faUtensils} />
            <p>메뉴</p>
         </a>

         <button className="preview">
            <FontAwesomeIcon icon={faBell} />
            <p>호출</p>
         </button>
         <a className={now !== 'menu' ? 'active button' : 'button preview'}>
            <FontAwesomeIcon icon={faStore} />
            <p>가게정보</p>
         </a>

         <a className="button preview">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>주문목록</p>
         </a>
      </BottomNavStyle>
   );
};
