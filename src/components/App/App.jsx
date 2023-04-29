import { Routes, Route, Navigate } from 'react-router-dom';

import { Application } from './App.styled';
import { GlobalStyle } from '../../helpers/GlobalStyled';

import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage/HomePage';
import SubmissionPage from 'Pages/SuccessfulSubmission';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/success" element={<SubmissionPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <GlobalStyle />
    </Application>
  );
};

export default App;
