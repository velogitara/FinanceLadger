import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
