import { AnimatePresence } from 'framer-motion';
import { HomePreview } from './HomePreview';
import { HeaderPreview } from './HeaderPreview';
import { BottomNavPreview } from './BottomNavPreview';
const MenuAppPreview = () => {
   return (
      <AnimatePresence>
         <HomePreview />
         <HeaderPreview />
         <BottomNavPreview />
      </AnimatePresence>
   );
};

export default MenuAppPreview;
