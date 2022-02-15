import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ROUTES from '../constants/routerConstants';
import HomePage from '../modules/HomePage/HomePage';
import TypeSupplement from '../modules/Quiz/TypeSupplement/TypeSupplement';
import Recommendations from '../modules/Recommendations/Recommendations';
import Question from '../modules/Quiz/Question/Question';
import MoreQuestions from '../modules/Quiz/MoreQuestions/MoreQuestions';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTES.QUIZ_PAGE} element={<TypeSupplement />} />
        <Route path={ROUTES.QUIZ_QUESTION_2} element={<Question />} />
        <Route path={ROUTES.QUIZ_MORE_QUESTIONS} element={<MoreQuestions />} />
        <Route path={ROUTES.RECOMMENDATION_PAGE} element={<Recommendations />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
