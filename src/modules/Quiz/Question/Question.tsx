import React from 'react';
import './Question.scss';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import backArrow from '../TypeSupplement/assets/svg/Left.svg';
import Button from '../../_common/Button/Button';

const Question = () => {
  return (
    <div>
      <HeaderLogo />

      <div className="progress__bar">
        <div className="progress__bar-step"></div>
      </div>

      <div className="back__buttons-wrapper">
        <img src={backArrow} className="back__button-arrow" alt="Back button arrow" />
        <p className="back__button-text">Back</p>
      </div>

      <p className="quiz__question">What month and year were you born?</p>

      <p className="quiz__suggestion">&#60;Hint text&#62;</p>

      <div className="quiz__inputs-wrapper">
        <input type="text" className="quiz__input" placeholder="mm" />
        <input type="text" className="quiz__input" placeholder="yyyy" />
      </div>

      <Button />
    </div>
  );
};

export default Question;
