import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '..//Home';

import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
