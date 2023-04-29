import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Header from '../Header/Header';
// import Home from '..//Home';

// import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Outlet />
    </>
  );
};

export default SharedLayout;
