import {
  EMPTY_CART,
  GET_SELECTED_MENU,
  ORDER_MENUS,
  PUT_CARTITEM,
  SAVE_MENUID,
} from '../actions/menuAction';

const initialState = {
  menu: [
    {
      id: 0,
      name: '맛있는 치킨',
      price: 16000,
      infoText: '달콤한 소스를 이용한 치킨',
      like: true,
      img: 'https://www.jessicagavin.com/wp-content/uploads/2014/01/buttermilk-fried-chicken-11-1200.jpg',
    },
    {
      id: 1,
      name: '콤비네이션 피자',
      price: 22000,
      infoText: '토핑 가득 피자',
      like: false,
      img: 'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150',
    },
    {
      id: 2,
      name: '떡볶이',
      price: 12000,
      infoText: '매콤달콤 국물 떡볶이',
      like: true,
      img: 'https://cdn-std-web-216-59-godomall.spdycdn.net/dothegmal4_godomall_com/data/goods/21/06/22/1000000242/1000000242_detail_071.jpg',
    },
  ],
  cart: [],
  ordered: [],
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_MENU:
      return { ...state, ...action.payload };

    case PUT_CARTITEM: {
      const targetMenu = state.cart.find(
        (menu) => menu.id === action.payload.id
      );
      if (targetMenu) {
        targetMenu.quantity += action.payload.quantity;

        return { ...state };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }

    case EMPTY_CART:
      return { ...state, cart: [] };

    //  기능 수정 필요
    case ORDER_MENUS: {
      const targetMenu = state.ordered.find(
        (menu) => menu.id === action.payload.id
      );
      if (targetMenu) {
        targetMenu.quantity += action.payload.quantity;
        return { ...state };
      } else {
        return { ...state, ordered: [...state.ordered, ...action.payload] };
      }
    }

    default:
      return state;
  }
};

export const menuIdReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_MENUID:
      return action.payload;

    default:
      return state;
  }
};

export const activeReducer = (state = false, action) => {
  switch (action.type) {
    case 'MENU_SELECTED':
      return action.payload;

    default:
      return state;
  }
};
