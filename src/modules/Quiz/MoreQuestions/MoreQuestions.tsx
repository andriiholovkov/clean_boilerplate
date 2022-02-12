import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import backArrow from '../MoreQuestions/assets/svg/Left.svg';
import './MoreQuestions.scss';
import greenGrass from '../MoreQuestions/assets/png/image.png';

const MoreQuestions = () => {
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

      <p className="more__question-title">Would you like to answer a few more questions for better results?</p>

      <p className="more__question-subheading">It’s just a couple more minutes!</p>

      <div className="more__question-buttons__wrapper">
        <button className="continue__button">Continue with questions</button>
        <button className="recommendations__button">See recommendations</button>
      </div>

      <img src={greenGrass} className="green__grass-img" alt="Green grass" />
    </div>
  );
};

export default MoreQuestions;
