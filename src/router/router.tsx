import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ROUTES from '../constants/routerConstants';
import HomePage from '../components/HomePage/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
