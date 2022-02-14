import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import backArrow from '../MoreQuestions/assets/svg/Left.svg';
import './MoreQuestions.scss';
import greenGrass from '../MoreQuestions/assets/png/image.png';
import Stepper from '../../_common/Stepper/Stepper';

const MoreQuestions = () => {
  return (
    <div>
      <HeaderLogo />

      <Stepper />

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

      <div className="green__grass-wrapper">
        <img src={greenGrass} className="green__grass-img" alt="Green grass" />
      </div>
    </div>
  );
};

export default MoreQuestions;
