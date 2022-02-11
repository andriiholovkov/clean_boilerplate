import React from 'react';
import './Question.scss';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import Button from '../../_common/Button/Button';
import Stepper from '../../_common/Stepper/Stepper';
import BackArrow from '../../_common/BackArrow/BackArrow';
import QuizInputs from '../../_common/QuizInputs/QuizInputs';

const Question = () => {
  return (
    <div>
      <HeaderLogo />
      <Stepper />
      <BackArrow />
      <p className="quiz__question">What month and year were you born?</p>
      <p className="quiz__suggestion">&#60;Hint text&#62;</p>
      <QuizInputs />
      <Button />
    </div>
  );
};

export default Question;
