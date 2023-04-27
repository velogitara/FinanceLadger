import { Routes, Route, Navigate } from 'react-router-dom';

import { Application } from './App.styled';
import { GlobalStyle } from '../../helpers/GlobalStyled';

import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <GlobalStyle />
    </Application>
  );
};

export default App;
