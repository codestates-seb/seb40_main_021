import { AnimatePresence } from 'framer-motion';
import { HomePreview } from './HomePreview';
import { HeaderPreview } from './HeaderPreview';
import { BottomNavPreview } from './BottomNavPreview';
import { StorePreview } from './StorePreview';
const MenuAppPreview = ({ now }) => {
   return (
      <AnimatePresence>
         {now === 'menu' ? <HomePreview /> : <StorePreview />}
         <HeaderPreview />
         <BottomNavPreview now={now} />
      </AnimatePresence>
   );
};

export default MenuAppPreview;
