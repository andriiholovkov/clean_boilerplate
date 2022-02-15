import React from 'react';
import backArrow from './assets/svg/left-arrow.svg';
import './BackArrow.scss';
import { useNavigate } from 'react-router-dom';

interface BackButton {
  title: string;
}

const BackArrow = ({ title }: BackButton) => {
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
        <p className="back__button-text">{title}</p>
      </div>
    </div>
  );
};

export default BackArrow;

interface Props {
  title: string;
  className: string;
  clickHandler?: () => void;
}

const Button = ({ title, className, clickHandler }: Props) => {
  return (
    <button className={className} onClick={clickHandler}>
      {title}
    </button>
  );
};
