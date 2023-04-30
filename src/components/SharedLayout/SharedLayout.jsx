import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Outlet />
    </>
  );
};

export default SharedLayout;
