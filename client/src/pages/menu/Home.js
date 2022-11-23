import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuDetailed } from '../../components/menu/MenuDetailed';
import { MenuList } from '../../components/menu/MenuList';
import { NavMenu } from '../../components/menu/NavMenu';
import { saveMenuId } from '../../redux/actions/menuAction';
import { Wrapper } from '../../style/menu.style';
import { motion } from 'framer-motion';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(saveMenuId(null));
    };
  });
  return (
    <Wrapper>
      <motion.main
        className="no-padding"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3 }
        }}
      >
        <NavMenu />
        <MenuList />
        <MenuDetailed />
      </motion.main>
    </Wrapper>
  );
};
