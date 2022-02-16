import React from 'react';
import SVG_ICONS from '../assets/svg/svg';
import './BackArrow.scss';
import { useNavigate } from 'react-router-dom';

interface BackArrowProps {
  title: string;
}

const BackArrow = ({ title }: BackArrowProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="back__buttons-wrapper"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={SVG_ICONS.LEFT_ARROW} className="back__button-arrow" alt="Back button arrow" />
        <p className="back__button-text">{title}</p>
      </div>
    </div>
  );
};

export default BackArrow;
