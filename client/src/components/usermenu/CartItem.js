import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMenu, minusQuantity, plusQuantity } from '../../redux/actions/menuAction';

export const CartItem = ({ data }) => {
   const cart = useSelector(store => store.menuReducer.cart);
   const dispatch = useDispatch();

   // 수량 빼기
   const minusBtnHandler = () => {
      if (data.quantity > 1) {
         dispatch(minusQuantity({ menuId: data.menuId }));
      }
   };

   // 수량 더하기
   const plusBtnHandler = () => {
      dispatch(plusQuantity({ menuId: data.menuId }));
   };

   // 메뉴 삭제
   const deleteBtnHandler = () => {
      const filtered = cart.filter(menu => menu.menuId !== data.menuId);
      dispatch(deleteMenu(filtered));
   };
   return (
      <li className="stored-menu">
         <div className="left">
            <div className="imgBox">
               {data.img === '' ? (
                  <p>
                     이미지
                     <br />
                     준비중입니다
                  </p>
               ) : (
                  <img src={data.img} alt={data.menuName} />
               )}
            </div>
            <div className="menuTxt">
               <h2>{data.menuName}</h2>
               <p>{(data.price * data.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
         </div>
         <div className="right">
            <button className="delete" onClick={deleteBtnHandler}>
               <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="quantity">
               <button onClick={minusBtnHandler}>
                  <FontAwesomeIcon icon={faMinus} />
               </button>
               <p>{data.quantity}</p>
               <button onClick={plusBtnHandler}>
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div>
         </div>
      </li>
   );
};
