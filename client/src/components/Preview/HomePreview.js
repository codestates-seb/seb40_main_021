/* eslint-disable import/namespace */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuDetailed } from '../usermenu/MenuDetailed';
import { StoreMenuList } from '../usermenu/StoreMenuList';
import { saveMenuId } from '../../redux/actions/menuAction';
import { Wrapper } from '../../style/menu.style';
import { motion } from 'framer-motion';
import { NavMenuPreview } from './NavMenuPreview';

export const HomePreview = ({ now }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch(saveMenuId(null));
      };
   });
   return (
      <Wrapper className="preview">
         <motion.main
            className="no-padding preview"
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1,
               transition: { duration: 0.3 }
            }}>
            <NavMenuPreview />
            <StoreMenuList now={now} />
            <MenuDetailed />
         </motion.main>
      </Wrapper>
   );
};
