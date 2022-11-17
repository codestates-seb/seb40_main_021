import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuDetailed } from '../../components/menu/MenuDetailed';
import { MenuList } from '../../components/menu/MenuList';
import { NavMenu } from '../../components/menu/NavMenu';
import { saveMenuId } from '../../redux/actions/menuAction';
import { Wrapper } from '../../style/menu.style';
// import { Search } from '../../components/menu/Search';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(saveMenuId(null));
    };
  });
  return (
    <Wrapper>
      <main className="no-padding">
        <NavMenu />
        <MenuList />
        <MenuDetailed />
      </main>
    </Wrapper>
  );
};
