import React from 'react';
import './Question.scss';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import Stepper from '../../_common/Stepper/Stepper';
import BackArrow from '../../_common/BackArrow/BackArrow';
import QuizInputs from '../../_common/QuizInputs/QuizInputs';
import Button from '../../_common/Button/Button';
import ROUTES from '../../../constants/routerConstants';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderLogo />
      <Stepper />
      <BackArrow title={'Back'} />
      <p className="quiz__question">What month and year were you born?</p>
      <p className="quiz__suggestion">&#60;Hint text&#62;</p>
      <QuizInputs />
      <div className="next__button-wrapper">
        <Button title={'Next'} className={'next__button'} clickHandler={() => navigate(ROUTES.QUIZ_MORE_QUESTIONS)} />
      </div>
    </div>
  );
};

export default Question;
