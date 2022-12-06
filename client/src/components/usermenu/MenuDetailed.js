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

   // 선택메뉴 카트에 담기
   const cartBtnHandler = () => {
      // 추가 메뉴
      const data = {
         menuId: menu.menuId,
         menuName: menu.menuName,
         price: menu.price,
         quantity,
         img: menu.menuImage
      };

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
               <p>{menu && menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
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
               총 금액 : {menu && (quantity * menu.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
               <button onClick={cartBtnHandler}>담기</button>
            </div>
         </div>
      </DetailedWrapper>
   );
};
