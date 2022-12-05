import { useSelector } from 'react-redux';
import { Menu } from './Menu';

export const StoreMenuList = ({ now }) => {
   const menus = useSelector(store => store.menuReducer.menu);

   return (
      <section className={now === 'menu' ? 'menulist-wrapper preview' : 'menulist-wrapper'}>
         <h1>대표 메뉴</h1>
         <ul className="grid-container">
            {menus.map(menu => (
               <Menu key={menu.menuId} menu={menu} />
            ))}
         </ul>
      </section>
   );
};
