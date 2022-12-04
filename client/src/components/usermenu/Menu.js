import { useDispatch } from 'react-redux';
import { activate, saveMenuId } from '../../redux/actions/menuAction';

export const Menu = ({ menu }) => {
   const dispatch = useDispatch();

   const selectHandler = () => {
      dispatch(saveMenuId(menu.menuId));
      dispatch(activate(true));
   };

   return (
      <li>
         <button value={menu.menuId} onClick={selectHandler}>
            <div className="menuImgBox">
               {menu.menuImage === '' ? (
                  <p>
                     이미지
                     <br />
                     준비중입니다
                  </p>
               ) : (
                  <img src={menu.menuImage} alt={menu.menuName} />
               )}
            </div>
            <div className="menuTxtBox">
               <div className="inline">
                  <h2>{menu.menuName}</h2>
                  {menu.recommendedMenu && <span>인기</span>}
               </div>
               <p>{menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
         </button>
      </li>
   );
};
