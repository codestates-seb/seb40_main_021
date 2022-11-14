import { useState } from 'react';
import { BottomNav } from '../../components/menu/BottomNav';
import { Header } from '../../components/menu/Header';
import { MenuList } from '../../components/menu/MenuList';
import { Modal } from '../../components/menu/Modal';
import { NavMenu } from '../../components/menu/NavMenu';
import { Wrapper } from '../../style/menu.style';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <main>
        <Header />
        <NavMenu />
        <MenuList />
        <BottomNav setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </main>
    </Wrapper>
  );
};
