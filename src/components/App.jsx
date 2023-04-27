import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
