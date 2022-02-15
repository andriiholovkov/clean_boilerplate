import React from 'react';
import backArrow from './assets/svg/left-arrow.svg';
import './BackArrow.scss';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="back__buttons-wrapper"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={backArrow} className="back__button-arrow" alt="Back button arrow" />
        <p className="back__button-text">Back</p>
      </div>
    </div>
  );
};

export default BackArrow;
