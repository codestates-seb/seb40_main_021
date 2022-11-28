/* eslint-disable import/namespace */
import { DetailedWrapper } from '../../style/menu.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { activate, putItem } from '../../redux/actions/menuAction';

export const MenuDetailed = () => {
   const modal = useRef();
   const isActive = useSelector(store => store.stateReducer.bottomModal);
   const menuId = useSelector(store => store.stateReducer.menuId);
   const menu = useSelector(store => store.menuReducer.menu.filter(menu => menu.menuId === menuId)[0]);
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();

   // 모달 닫기
   const closeModal = () => {
      modal.current.classList.remove('active');
      dispatch(activate(false));
   };

   // 모달 초기화
   const initModal = () => {
      dispatch(activate(false));
      // modal.current.classList.remove('active');
      setTimeout(() => {
         dispatch(activate(true));

         // modal.current.classList.add('active');
         setQuantity(1);
      }, 100);
   };

   useEffect(() => {
      if (menuId !== null) {
         initModal();
      }
      return () => {
         dispatch(activate(false));
      };
   }, [menuId]);

   // useEffect(() => {}, [isActive]);

   // 선택메뉴 카트에 담기
   const cartBtnHandler = () => {
      // 추가 메뉴
      const data = {
         menuId: menu.menuId,
         menuName: menu.menuName,
         price: menu.price,
         quantity,
         img: menu.img
      };

      // 로컬 스토리지에 저장된 장바구니 리스트 불러오기
      const getCartItem = JSON.parse(localStorage.getItem('cart'));
      // 아무것도 없으면 추가
      if (getCartItem === null) {
         localStorage.setItem('cart', JSON.stringify([data]));

         // 장바구니에 저장된 메뉴가 있는경우
      } else {
         const target = getCartItem.filter(menu => menu.menuId === data.menuId)[0];
         // 같은 메뉴는 수량 합친후 저장
         if (target) {
            target.quantity += data.quantity;
            localStorage.setItem('cart', JSON.stringify(getCartItem));
            // 같은 메뉴가 아닌경우 배열에 추가한 후 저장
         } else {
            localStorage.setItem('cart', JSON.stringify([...getCartItem, data]));
         }
      }

      dispatch(putItem(data));
      closeModal();
   };

   return (
      <DetailedWrapper ref={modal} className={isActive && 'active'}>
         <button onClick={closeModal}>
            <FontAwesomeIcon icon={faAngleDown} />
         </button>
         <div className="menu">
            <div className="inline">
               <h1>{menu && menu.menuName}</h1>
               <p>{menu && menu.price}원</p>
            </div>
            <p>{menu && menu.menuContent}</p>
         </div>
         <div className="cart">
            <div className="quantity">
               수량
               <div className="btn">
                  <button onClick={() => quantity !== 1 && setQuantity(quantity - 1)}>
                     <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => setQuantity(quantity + 1)}>
                     <FontAwesomeIcon icon={faPlus} />
                  </button>
               </div>
            </div>
            <div className="total">
               총 금액 : {menu && quantity * menu.price}원<button onClick={cartBtnHandler}>담기</button>
            </div>
         </div>
      </DetailedWrapper>
   );
};
