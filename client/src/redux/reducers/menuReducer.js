import {
   DELETE_MENU,
   EMPTY_CART,
   GET_SELECTED_MENU,
   MINUS_QUANTITY,
   PLUS_QUANTITY,
   PUT_CARTITEM,
   SET_CATEGORY,
   SET_MENU,
   SET_ORDER_MENUS,
   SET_STOREINFO
} from '../actions/menuAction';

const initialState = {
   category: [{ categoryId: 1 }],
   menu: [],
   searchedMenu: [],
   cart: [],
   ordered: [],
   store: {}
};

// 메뉴판, 가게 정보를 위한 리듀서
export const menuReducer = (state = initialState, action) => {
   switch (action.type) {
      // 카테고리 저장
      case SET_CATEGORY:
         return { ...state, category: action.payload };
      // 메뉴 저장
      case SET_MENU:
         return { ...state, menu: action.payload };
      // 선택한 메뉴
      case GET_SELECTED_MENU:
         return { ...state, ...action.payload };
      // 장바구니에 담기
      case PUT_CARTITEM: {
         const targetMenu = state.cart.find(menu => menu.menuId === action.payload.menuId);
         if (targetMenu) {
            targetMenu.quantity += action.payload.quantity;

            return { ...state };
         } else {
            return {
               ...state,
               cart: [...state.cart, action.payload]
            };
         }
      }
      // 장바구니 수량 빼기
      case MINUS_QUANTITY: {
         const targetMenu = state.cart.find(menu => menu.menuId === action.payload.menuId);
         if (targetMenu) {
            targetMenu.quantity -= 1;
         }
         return { ...state, cart: [...state.cart] };
      }
      // 장바구니 수량 더하기
      case PLUS_QUANTITY: {
         const targetMenu = state.cart.find(menu => menu.menuId === action.payload.menuId);

         if (targetMenu) {
            targetMenu.quantity += 1;
         }
         return { ...state, cart: [...state.cart] };
      }
      // 장바구니 메뉴 삭제
      case DELETE_MENU:
         return { ...state, cart: [...action.payload] };
      // 장바구니 비우기
      case EMPTY_CART:
         return { ...state, cart: [] };
      // 주문 내역 저장
      case SET_ORDER_MENUS:
         return { ...state, ordered: action.payload };
      // 가게 정보 저장
      case SET_STOREINFO:
         return { ...state, store: action.payload };

      default:
         return state;
   }
};
