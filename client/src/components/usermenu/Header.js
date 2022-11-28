import { useParams } from 'react-router-dom';
import { HeaderStyle } from '../../style/menu.style';

export const Header = () => {
   const tableNumber = useParams().tableNumber;

   return (
      <HeaderStyle>
         <div className="storeName">🍽️QR오더</div>
         <div>NO.{tableNumber}</div>
      </HeaderStyle>
   );
};
