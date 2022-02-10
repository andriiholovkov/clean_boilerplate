import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import Button from '../../_common/Button/Button';
import './TypeSupplement.scss';
import backArrow from './assets/svg/Left.svg';

const TypeSupplement = () => {
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

      <p className="quiz__question">Do you know what type of supplement you&apos;re looking for?</p>

      <p className="quiz__suggestion">We suggest trying a mild laxative first (which usually works in 1-2 days).</p>

      <div className="quiz__answers-wrapper">
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
        <button className="quiz__answer">Button</button>
      </div>

      <Button />
    </div>
  );
};

export default TypeSupplement;
