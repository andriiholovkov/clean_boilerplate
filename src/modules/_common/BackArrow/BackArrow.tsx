import React from 'react';
import backArrow from './assets/svg/Left.svg';
import './BackArrow.scss';

const BackArrow = () => {
  return (
    <div>
      <div className="back__buttons-wrapper">
        <img src={backArrow} className="back__button-arrow" alt="Back button arrow" />
        <p className="back__button-text">Back</p>
      </div>
    </div>
  );
};

export default BackArrow;
